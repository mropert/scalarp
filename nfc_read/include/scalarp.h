#ifndef SCALARP_H
#define SCALARP_H
#include <string>

namespace scalarp
{
const size_t VERSION_MAJOR = 0;
const size_t VERSION_MINOR = 1;
const size_t VERSION_PATCH = 0;

const std::string VERSION_STRING = std::to_string(VERSION_MAJOR) + "." + std::to_string(VERSION_MINOR) + "." + std::to_string(VERSION_PATCH);
}

#endif // ifndef SCALARP_H
