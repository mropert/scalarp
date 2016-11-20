#include <nfc/nfc.h>
#include <cmath>

#include "nfc_reader.h"
#include "nfc_exception.h"
#include "nfc_tag.h"

#include "nfc_tag_mifare.h"

using namespace scalarp;

nfc_reader::nfc_reader(bool dryrun)
    : m_p_nfc_device(NULL), m_p_nfc_context(NULL), m_dryrun(dryrun) {}

nfc_reader::~nfc_reader()
{
    destroy_nfc_device();
    destroy_nfc_context();
}

void nfc_reader::init()
{
    init_nfc_context();
    init_nfc_device();
}

std::string nfc_reader::get_nfc_version()
{
    const char *acLibnfcVersion = nfc_version();
    std::string libNfcVersion(acLibnfcVersion);
    return libNfcVersion;
}

bool nfc_reader::is_tag_present()
{
    check_nfc_context();
    check_nfc_device();

    return (0 == nfc_initiator_target_is_present(m_p_nfc_device, NULL));
}

std::string nfc_reader::get_device_name()
{
    if (m_dryrun)
        return std::string("Dummy Device");

    check_nfc_context();
    check_nfc_device();

    const char *device_name = nfc_device_get_name(m_p_nfc_device);
    std::string str_name(device_name);

    return str_name;
}

void nfc_reader::init_nfc_context()
{
    if (m_dryrun)
        return;

    if (m_p_nfc_context)
        throw nfc_exception("lib nfc already initialized");

    nfc_init(&m_p_nfc_context);
    if (!m_p_nfc_context)
        throw nfc_exception("Unable to init libnfc (malloc)");
}

void nfc_reader::init_nfc_device()
{
    if (m_dryrun)
        return;

    check_nfc_context();
    if (m_p_nfc_device)
        throw nfc_exception("nfc device already initialized");

    m_p_nfc_device = nfc_open(m_p_nfc_context, NULL);
    if (!m_p_nfc_context)
        throw nfc_exception("Unable to open NFC device.");
}

void nfc_reader::destroy_nfc_device()
{
    if (m_p_nfc_device)
        nfc_close(m_p_nfc_device);
    m_p_nfc_device = NULL;
}

void nfc_reader::destroy_nfc_context()
{
    if (m_p_nfc_context)
        nfc_exit(m_p_nfc_context);
    m_p_nfc_context = NULL;
}

void nfc_reader::check_nfc_context()
{
    if (!m_p_nfc_context)
        throw nfc_exception("lib nfc not initialized");
}

void nfc_reader::check_nfc_device()
{
    if (!m_p_nfc_device)
        throw nfc_exception("nfc device not initialized");
}

// ================================================================================== //
nfc_tag nfc_reader::poll_tag(int timeout)
{
    if (m_dryrun)
    {
        return nfc_tag_dummy();
    }

    if (timeout < 0)
        throw nfc_exception("polling timeout is negative, cannot go back in time");
    if (timeout > 30)
        throw nfc_exception("polling timeout is too long, cannot wait this long");

    check_nfc_context();
    check_nfc_device();

    if (nfc_initiator_init(m_p_nfc_device) < 0)
    {
        const char *error = nfc_strerror(m_p_nfc_device);
        throw nfc_exception(
            std::string("cannot initialize device in initiator mode : ") +
            std::string(error));
    }

    const uint8_t uiPeriod = 2;
    const nfc_modulation nmModulations[1] = {
        {.nmt = NMT_ISO14443A, .nbr = NBR_106},
    };
    const size_t szModulations = 1;

    const double time_one_poll_ms = uiPeriod * 150 * szModulations;
    const double nb_poll = double(timeout) * 1000 / time_one_poll_ms;
    const uint8_t uiPollNr = ceil(nb_poll);

    /*
    printf("NFC device will poll during %ld ms (%u pollings of %lu ms for %d "
           "modulations)\n",
           (unsigned long)uiPollNr * szModulations * uiPeriod * 150, uiPollNr,
           (unsigned long)uiPeriod * 150, szModulations);
	   */

    nfc_target target;
    int ret =
        nfc_initiator_poll_target(m_p_nfc_device, nmModulations, szModulations,
                                  uiPollNr, uiPeriod, &target);
    if (ret < 0)
    {
        const char *error = nfc_strerror(m_p_nfc_device);
        throw nfc_exception(std::string("error while polling device : ") +
                            std::string(error));
    }

    switch (target.nm.nmt)
    {
    case NMT_ISO14443A:
    {
        nfc_tag_mifare mifare(target);
        mifare.getUUID();
        return std::move(mifare);
    }
    default:
    {
        return nfc_tag_dummy();
    }
    }
}
