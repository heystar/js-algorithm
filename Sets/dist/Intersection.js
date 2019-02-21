'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersection = undefined;

var _Sets = require('./Sets');

/**
 * 交集：对于给定的两个集合，返回一个包含两个集合中共有元素的新集合
 * @param {Set} thisSet 
 * @param {Set} otherSet 
 */
var intersection = exports.intersection = function intersection(thisSet, otherSet) {
  var intersectionSet = new _Sets.Sets();

  var values = thisSet.values();
  for (var i = 0; i < values.length; i++) {
    if (otherSet.has(values[i])) {
      intersectionSet.add(values[i]);
    }
  }
  return intersectionSet;
};