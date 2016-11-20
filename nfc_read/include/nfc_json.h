#ifndef NFC_JSON_H
#define NFC_JSON_H

#include <string>

namespace scalarp
{
class nfc_json
{
  public:
    static std::string poll(int timeout, bool dryrun = false);
};
}

#endif // NFC_JSON_H
