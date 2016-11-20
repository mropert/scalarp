#include "nfc_json.h"

#include "scalarp.h"
#include "nfc_reader.h"
#include "nfc_exception.h"

#include <boost/property_tree/ptree.hpp>
#include <boost/property_tree/json_parser.hpp>

using namespace scalarp;
namespace pt = boost::property_tree;

std::string nfc_json::poll(int timeout, bool dryrun_flag)
{
    pt::ptree json_tree;

    json_tree.put("scalarp.version", VERSION_STRING);
    json_tree.put("scalarp.libnfc-version", nfc_reader::get_nfc_version());

    try
    {
        nfc_reader reader(dryrun_flag);

        reader.init();
        json_tree.put("scalarp.nfc-reader", reader.get_device_name());

        nfc_tag tag = reader.poll_tag(timeout);

        json_tree.put("scalarp.nfc-tag.uuid", tag.getUUID());
        json_tree.put("scalarp.nfc-tag.type", tag.getType());

        json_tree.put("scalarp.nfc-tag.data.size", tag.getDataSize());
        json_tree.put("scalarp.nfc-tag.data.data", tag.getData());

        json_tree.put("scalarp.status.code", "SUCCESS");
    }
    catch (nfc_exception &ne)
    {
        json_tree.put("scalarp.status.code", "ERROR");
        json_tree.put("scalarp.status.message", ne.what());
    }

    std::ostringstream oss;
    write_json(oss, json_tree);
    return oss.str();
}
