#ifndef NFC_TAG_MIFARE_H
#define NFC_TAG_MIFARE_H

#include <nfc/nfc-types.h>
#include <array>
#include <vector>
#include "nfc_tag.h"

class nfc_tag_mifare
{
  public:
    nfc_tag_mifare(const nfc_target &mifare);
    nfc_tag_mifare(nfc_tag_mifare &&) = default;

    std::string getType() const { return "MIFARE CLASSIC 1K"; };
    std::string getUUID() const;
    std::size_t getDataSize() const { return 16; };
    std::string getData() const { return "00112233445566778899AABBCCDDEEFF"; };

  private:
    std::vector<uint8_t> m_uuid;
    std::vector<uint8_t> m_atqa;
};

#endif // NFC_TAG_MIFARE_H
