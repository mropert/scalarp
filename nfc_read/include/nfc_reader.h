#ifndef NFC_READER_H
#define NFC_READER_H

#include <string>

#include "nfc_tag.h"

struct nfc_device;
struct nfc_context;

namespace scalarp
{
class nfc_reader
{
  public:
    nfc_reader(bool dryrun = false);
    virtual ~nfc_reader();

    void init();
    nfc_tag poll_tag(int timeout = 5);
    bool is_tag_present();

    std::string get_device_name();
    static std::string get_nfc_version();

  private:
    // Class members
    nfc_device *m_p_nfc_device;
    nfc_context *m_p_nfc_context;

    //Assist function
    void init_nfc_context();
    void check_nfc_context();
    void destroy_nfc_context();

    void init_nfc_device();
    void check_nfc_device();
    void destroy_nfc_device();

    const bool m_dryrun;
};
}
#endif // ifndef NFC_READER_H
