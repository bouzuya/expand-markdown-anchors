"use strict";

var amazon_1 = require('./amazon');
var bbn_1 = require('./bbn');
var github_1 = require('./github');
var npm_1 = require('./npm');
var expandOne = function expandOne(refName) {
    return [amazon_1.expand, bbn_1.expand, github_1.expand, npm_1.expand].reduce(function (result, expand) {
        return result === null ? expand(refName) : result;
    }, null);
};
var expand = function expand(s) {
    var refs = [];
    var r = /(?:\[(.+?)\]\[\])|(?:\[.+?\]\[(.+?)\])/g;
    while (true) {
        var m = r.exec(s);
        if (m === null) return refs;
        var refName1 = m[1];
        var refName2 = m[2];
        var refName = typeof refName1 !== 'undefined' ? refName1 : typeof refName2 !== 'undefined' ? refName2 : '';
        var ref = expandOne(refName);
        if (ref !== null) refs.push(ref);
    }
};
exports.expand = expand;
var match = function match(s) {
    var refs = [];
    var r = /(?:\[(.+?)\]\[\])|(?:\[.+?\]\[(.+?)\])/g;
    while (true) {
        var m = r.exec(s);
        if (m === null) return refs;
        var refName1 = m[1];
        var refName2 = m[2];
        var refName = typeof refName1 !== 'undefined' ? refName1 : typeof refName2 !== 'undefined' ? refName2 : '';
        var ref = expandOne(refName);
        if (ref !== null) refs.push(refName);
    }
};
exports.match = match;