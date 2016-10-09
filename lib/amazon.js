"use strict";

var expand = function expand(refName) {
    var m = refName.match(/^asin:(.+)$/);
    if (m === null) return null;
    var asin = m[1];
    return "[" + refName + "]: https://www.amazon.co.jp/dp/" + asin + "/";
};
exports.expand = expand;