#ifndef NFC_TAG_H
#define NFC_TAG_H

#include <iostream>
#include <memory>
#include <string>
#include "nfc_exception.h"

namespace scalarp
{
class nfc_tag
{
    struct base_t
    {
        virtual std::string getType() const = 0;
        virtual std::string getUUID() const = 0;
        virtual std::string getData() const = 0;
        virtual std::size_t getDataSize() const = 0;
        virtual ~base_t() {}
    };

    template <typename T>
    struct impl_t : public base_t
    {
        T m_impl;

        impl_t(const T &) = delete;
        impl_t(T &&impl) : m_impl(std::move(impl)) {}

        virtual std::string getType() const override { return m_impl.getType(); }
        virtual std::string getUUID() const override { return m_impl.getUUID(); }
        virtual std::string getData() const override { return m_impl.getData(); }
        virtual std::size_t getDataSize() const override { return m_impl.getDataSize(); }
    };

  public:
    nfc_tag(nfc_tag &&) = default;
    template <typename T>
    nfc_tag(T &&tag) : m_tag(new impl_t<T>(std::move(tag))) {}

    nfc_tag &operator=(nfc_tag &&) = default;
    template <typename T>
    nfc_tag &operator=(T &&tag)
    {
        m_tag.reset(std::make_unique<impl_t<T>>(tag));
        return *this;
    }

    nfc_tag(const nfc_tag &) = delete;
    nfc_tag &operator=(const nfc_tag &) = delete;

    std::string getType() const
    {
        if (!m_tag)
            throw("empty tag item");
        return m_tag->getType();
    }
    std::string getUUID() const
    {
        if (!m_tag)
            throw("empty tag item");
        return m_tag->getUUID();
    }
    std::string getData() const
    {
        if (!m_tag)
            throw("empty tag item");
        return m_tag->getData();
    }
    std::size_t getDataSize() const
    {
        if (!m_tag)
            throw("empty tag item");
        return m_tag->getDataSize();
    }

  private:
    std::unique_ptr<base_t> m_tag;
};

class nfc_tag_dummy
{
  public:
    std::string getType() const { return "UNKNOWN"; };
    std::string getUUID() const { return "0xF01263127"; };
    std::size_t getDataSize() const { return 16; };
    std::string getData() const { return "00112233445566778899AABBCCDDEEFF"; };
};
}

#endif // NFC_TAG_H
