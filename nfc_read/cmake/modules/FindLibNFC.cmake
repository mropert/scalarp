find_package(PkgConfig)
pkg_check_modules(PC_LIBNFC QUIET libnfc)
set(LIBNFC_DEFINITIONS ${PC_LIBNFC_CFLAGS_OTHER})

find_path(LIBNFC_INCLUDE_DIR nfc/nfc.h
          HINTS ${PC_LIBNFC_INCLUDEDIR} ${PC_LIBNFC_INCLUDE_DIRS}
          PATH_SUFFIXES libnfc )

find_library(LIBNFC_LIBRARY NAMES nfc libnfc
             HINTS ${PC_LIBNFC_LIBDIR} ${PC_LIBNFC_LIBRARY_DIRS} )

include(FindPackageHandleStandardArgs)
# handle the QUIETLY and REQUIRED arguments and set LIBNFC_FOUND to TRUE
# if all listed variables are TRUE
find_package_handle_standard_args(LibNFC  DEFAULT_MSG
                                  LIBNFC_LIBRARY LIBNFC_INCLUDE_DIR)

mark_as_advanced(LIBNFC_INCLUDE_DIR LIBNFC_LIBRARY )

set(LIBNFC_LIBRARIES ${LIBNFC_LIBRARY} )
set(LIBNFC_INCLUDE_DIRS ${LIBNFC_INCLUDE_DIR} )
