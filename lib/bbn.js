"use strict";

var expand = function expand(refName) {
    var match = refName.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (match === null) return null;
    var y = match[1];
    var m = match[2];
    var d = match[3];
    return "[" + refName + "]: http://blog.bouzuya.net/" + y + "/" + m + "/" + d + "/";
};
exports.expand = expand;