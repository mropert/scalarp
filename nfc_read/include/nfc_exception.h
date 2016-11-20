#ifndef NFC_EXCEPTION_H
#define NFC_EXCEPTION_H

#include <exception>
#include <string>

class nfc_exception : public std::exception
{
  public:
    nfc_exception(std::string details) : m_details(details){};
    nfc_exception() : m_details(){};

    virtual const char *what() const throw()
    {
        if (m_details.size() > 0)
        {
            std::string text = std::string("nfc_exception: ") + m_details;
            return text.c_str();
        }
        else
        {
            return "nfc_exception";
        }
    }

  private:
    std::string m_details;
};

#endif // NFC_EXCEPTION_H
