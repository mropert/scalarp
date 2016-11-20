#include <nfc_tag_mifare.h>
#include <algorithm>
#include <sstream>
#include <iomanip>

#include <nfc/nfc-types.h>

using namespace scalarp;

std::string nfc_tag_mifare::getUUID() const
{
    std::stringstream stream;
    for (auto v : m_uuid)
    {
        int i = v;
        stream << std::setw(2) << std::setfill('0') << std::hex << i;
    }
    return stream.str();
}

nfc_tag_mifare::nfc_tag_mifare(const nfc_target &pnai)
    : m_uuid(pnai.nti.nai.abtUid, pnai.nti.nai.abtUid + pnai.nti.nai.szUidLen),
      m_atqa(pnai.nti.nai.abtAtqa, pnai.nti.nai.abtAtqa + 2)
{
    // see snprint_nfc_iso14443a_info from target-subr.c

    // char* buffer;
    // str_nfc_target(&buffer, &pnai, true);
    // std::cout << "MIFARE TAG READ : " << buffer << std::endl;
    // nfc_free(buffer);
}
