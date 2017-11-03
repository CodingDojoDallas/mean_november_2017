// very simple parser - assumes urlencoding
// using this function to clean up strings
function clean_string(string) {
    string = string.replace(/\+/g, " ");
    string = string.replace(/%21/g, "!");
    string = string.replace(/%3A/g, ":");
    string = string.replace(/%2C/g, ",");
    string = string.replace(/%3B/g, ";");
    string = string.replace(/%40/g, "@");
    string = string.replace(/%23/g, "#");
    string = string.replace(/%24/g, "$");
    string = string.replace(/%25/g, "%");
    string = string.replace(/%5E/g, "^");
    string = string.replace(/%26/g, "&");
    string = string.replace(/%28/g, "(");
    string = string.replace(/%29/g, ")");
    string = string.replace(/%3D/g, "=");
    string = string.replace(/%7B/g, "{");
    string = string.replace(/%7D/g, "}");
    string = string.replace(/%7C/g, "|");
    string = string.replace(/%5C/g, "\\");
    string = string.replace(/%2F/g, "/");
    string = string.replace(/%27/g, "'");
    string = string.replace(/%22/g, '"');
    string = string.replace(/%3F/g, "?");
    string = string.replace(/%3C/g, "<");
    string = string.replace(/%3E/g, ">");
    string = string.replace(/%5B/g, "[");
    string = string.replace(/%5D/g, "]");
    return string;
}
module.exports = function(req, res, next) {
    var raw = "";
    var data = {};
    
    req.on("data", function(d) {
        raw += d;
    });
    req.on("end", function() {
        if (raw) {
            split = raw.split("&");
            for (var idx in split) {
                let split_again = split[idx].split("=");
                data[split_again[0]] = clean_string(split_again[1]);
            }
            req.body = data;
        }
        next();
    });
};