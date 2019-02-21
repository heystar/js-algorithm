'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.union = union;

var _Sets = require('./Sets');

/**
 * 并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合
 */
function union(thisSet, otherSet) {
    var unionSet = new _Sets.Sets();

    var values = thisSet.values();
    for (var i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (var _i = 0; _i < values.length; _i++) {
        unionSet.add(values[_i]);
    }
    return unionSet;
}