"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dictionary = exports.Dictionary = function () {
  var items = new WeakMap();

  var Dictionary = function () {
    function Dictionary() {
      _classCallCheck(this, Dictionary);

      items.set(this, {});
    }
    /**
     * 向字典中添加新元素
     * @param {*} key 
     * @param {*} value 
     */


    _createClass(Dictionary, [{
      key: "set",
      value: function set(key, value) {
        var element = items.get(this);
        element[key] = value;
      }
      /**
       * 通过使用键值来从字典中移除键值对应的数据值。
       * @param {*} key 
       */

    }, {
      key: "delete",
      value: function _delete(key) {
        if (this.has(key)) {
          var element = items.get(this);
          delete element[key];
          return true;
        } else {
          return false;
        }
      }
      /**
       * 如果某个键值存在于这个字典中，则返回 true ，反之则返回 false 
       * @param {*} key 
       */

    }, {
      key: "has",
      value: function has(key) {
        var element = items.get(this);
        return key in element;
      }
      /**
       * 通过键值查找特定的数值并返回
       * @param {*} key 
       */

    }, {
      key: "get",
      value: function get(key) {
        var element = items.get(this);
        return element[key];
      }
      /**
       * 将这个字典中的所有元素全部删除
       */

    }, {
      key: "clear",
      value: function clear() {
        var element = items.get(this);
        element = {};
      }
      /**
       * 返回字典所包含元素的数量。与数组的 length 属性类似。
       */

    }, {
      key: "size",
      value: function size() {
        var element = items.get(this);
        return Object.keys(element).length;
      }
      /**
       * 将字典所包含的所有键名以数组形式返回
       */

    }, {
      key: "keys",
      value: function keys() {
        var element = items.get(this);
        return Object.keys(element);
      }
      /**
       * 将字典所包含的所有数值以数组形式返回
       */

    }, {
      key: "values",
      value: function values() {
        var element = items.get(this),
            values = [];
        for (var key in element) {
          if (this.has(key) && element.hasOwnProperty(key)) values.push(element[key]);
        }
        return values;
      }
    }, {
      key: "getItems",
      value: function getItems() {
        return items.get(this);
      }
    }]);

    return Dictionary;
  }();

  return Dictionary;
}();