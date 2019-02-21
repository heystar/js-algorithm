'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.difference = undefined;

var _Sets = require('./Sets');

/**
 * 差集: 对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合。
 * @param {Set} otherSet 
 * @param {Set} thisSet 
 */
var difference = exports.difference = function difference(thisSet, otherSet) {
  var differenceSet = new _Sets.Sets();

  var values = thisSet.values();
  for (var i = 0; i < values.length; i++) {
    if (!otherSet.has(values[i])) {
      differenceSet.add(values[i]);
    }
  }
  return differenceSet;
};