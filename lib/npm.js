"use strict";

var expand = function expand(refName) {
    var m = refName.match(/^npm:(.+)$/);
    if (m === null) return null;
    var pkg = m[1];
    return "[" + refName + "]: https://www.npmjs.com/package/" + pkg;
};
exports.expand = expand;