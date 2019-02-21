"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sets = exports.Sets = function () {
  var Sets = function () {
    function Sets() {
      _classCallCheck(this, Sets);

      this.items = {};
    }
    /**
     * 向集合添加一个新的项
     * @param {*} value 
     */


    _createClass(Sets, [{
      key: "add",
      value: function add(value) {
        if (!this.has(value)) {
          this.items[value] = value;
          return true;
        }
        return false;
      }
      /**
       * 从集合移除一个值
       * @param {*} value 
       */

    }, {
      key: "remove",
      value: function remove(value) {
        if (this.has(value)) {
          delete this.items[value];
          return true;
        }
        return false;
      }
      /**
       * 如果值在集合中，返回 true ，否则返回 false 
       * @param {*} value 
       */

    }, {
      key: "has",
      value: function has(value) {
        return this.items.hasOwnProperty(value);
      }
      /**
       * 移除集合中的所有项
       */

    }, {
      key: "clear",
      value: function clear() {
        this.items = {};
      }
      /**
       * 返回集合所包含元素的数量。与数组的 length 属性类似。
       */

    }, {
      key: "size",
      value: function size() {
        return Object.keys(this.items).length;
      }
      /**
       * 返回一个包含集合中所有值的数组
       */

    }, {
      key: "values",
      value: function values() {
        var values = [];
        for (var i = 0, keys = Object.keys(this.items); i < keys.length; i++) {
          values.push(this.items[keys[i]]);
        }
        return values;
      }
    }]);

    return Sets;
  }();

  return Sets;
}();