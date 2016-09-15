cmake_minimum_required (VERSION 3.0)
project (nfc_read)

if (${CMAKE_VERSION} VERSION_LESS "3.1")
	include(CheckCXXCompilerFlag)
	CHECK_CXX_COMPILER_FLAG("-std=c++14" COMPILER_SUPPORTS_CXX14)
	if(COMPILER_SUPPORTS_CXX14)
		set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++14")
	else()
		message(STATUS "The compiler ${CMAKE_CXX_COMPILER} has no C++14 support. Please use a different C++ compiler.")
	endif()
else()
	set (CMAKE_CXX_STANDARD 14)
	set (CMAKE_CXX_STANDARD_REQUIRED ON)
endif()

set (sources src/piak.cpp)

add_executable(nfc_read ${sources})

