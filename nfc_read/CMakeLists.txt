cmake_minimum_required (VERSION 3.0)
project (nfc_read)

set(CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/cmake/modules/")

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

find_package(LibNFC REQUIRED)
include_directories(${LIBNFC_INCLUDE_DIR})

find_package(Boost COMPONENTS program_options REQUIRED)
include_directories(${Boost_INCLUDE_DIR})

include_directories(include)
set (sources src/main.cpp src/nfc_reader.cpp src/nfc_json.cpp src/nfc_tag_mifare.cpp)

set(LIBS ${LIBNFC_LIBRARY})

add_executable(nfc_read ${sources} )
target_link_libraries(nfc_read ${LIBS})
target_link_libraries(nfc_read ${Boost_LIBRARIES})

