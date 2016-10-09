"use strict";

var buildUrl = function buildUrl(user, repo, issue) {
    if (typeof issue === 'undefined') {
        return "https://github.com/" + user + "/" + repo;
    } else {
        return "https://github.com/" + user + "/" + repo + "/issues/" + issue;
    }
};
var expand = function expand(refName) {
    var m = refName.match(/^([^\/]+)\/([^\/#]+)(?:#(\d+))?$/);
    if (m === null) return null;
    var user = m[1];
    var repo = m[2];
    var issue = m[3];
    return "[" + refName + "]: " + buildUrl(user, repo, issue);
};
exports.expand = expand;