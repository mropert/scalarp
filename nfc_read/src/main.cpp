#include <iostream>
#include <boost/program_options.hpp>

#include "scalarp.h"
#include "nfc_json.h"

namespace po = boost::program_options;

namespace
{
auto piak()
{
    return []
    {
        std::cout << "piak!" << std::endl;
    };
}

const size_t SUCCESS = 0;
const size_t ERROR_UNKNOWN_PO = 1;
const size_t ERROR_UNHANDLED_EXCEPTION = 2;
}

int main(int argc, char *argv[])
{
    const int DEFAULT_ARGS_TIMEOUT_SECONDS = 2;

    try
    {
        // Declaration of options variables
        int opt_timeout;
        bool opt_dryrun = false;

        namespace po = boost::program_options;
        po::options_description generic_opts("Generic options");

        po::options_description testing_opts("Testing options");

        generic_opts.add_options()("help,h", "display this message")(
            "timeout,t", po::value<int>(&opt_timeout)
                             ->default_value(DEFAULT_ARGS_TIMEOUT_SECONDS),
            "timeout value (in seconds)");

        testing_opts.add_options()("dryrun", "dryrun mode");

        po::options_description desc("Allowed options");
        desc.add(generic_opts).add(testing_opts);

        po::variables_map vm;
        try
        {
            po::store(po::parse_command_line(argc, argv, desc), vm); // can throw

            if (vm.count("help"))
            {
                piak()();
                std::cout << "Scalarp nfc_reader application "
                          << scalarp::VERSION_STRING << std::endl;
                std::cout << desc << std::endl;
                return SUCCESS;
            }

            if (vm.count("dryrun"))
            {
                std::cout << "Scalarp nfc_reader application "
                          << scalarp::VERSION_STRING << std::endl;
                opt_dryrun = true;
            }

            po::notify(vm);
        }
        catch (po::error &e)
        {
            std::cerr << "ERROR: " << e.what() << std::endl
                      << std::endl;
            std::cerr << desc << std::endl;
            return ERROR_UNKNOWN_PO;
        }

        // application code here //
        std::cout << scalarp::nfc_json::poll(opt_timeout, opt_dryrun) << std::endl;
    }
    catch (std::exception &e)
    {
        std::cerr << "Unhandled Exception reached the top of main: " << e.what()
                  << ", application will now exit" << std::endl;
        return ERROR_UNHANDLED_EXCEPTION;
    }

    return 0;
}
