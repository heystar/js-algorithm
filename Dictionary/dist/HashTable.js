'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HashTable = exports.HashTable = function () {
  var table = new WeakMap();

  var HashTable = function () {
    function HashTable() {
      _classCallCheck(this, HashTable);

      table.set(this, []);
    }

    /**
     * 向散列表增加一个新的项（也能更新散列表）
     * @param {*} key 
     * @param {*} value 
     */


    _createClass(HashTable, [{
      key: 'put',
      value: function put(key, value) {
        // 算出key在表中的位置
        var position = this._loseloseHashCode(key);
        console.log(position + ' - ' + key);
        var element = table.get(this);
        element[position] = value;
      }
      /**
       * 根据键值从散列表中移除值。
       * @param {*} key 
       */

    }, {
      key: 'remove',
      value: function remove(key) {
        var element = table.get(this);
        element[this._loseloseHashCode(key)] = undefined;
      }
      /**
       * 返回根据键值检索到的特定的值
       * @param {*} key 
       */

    }, {
      key: 'get',
      value: function get(key) {
        var element = table.get(this);
        return element[this._loseloseHashCode(key)];
      }

      /**
       * 散列函数
       * 给定一个 key 参数，我们就能根据组成 key 的每个字符的ASCII码值的和得到一个数字
       * @param {*} key 
       */

    }, {
      key: '_loseloseHashCode',
      value: function _loseloseHashCode(key) {
        var hash = 0; // 变量来存储这个总和
        // 然后，遍历 key并将从ASCII表中查到的每个字符对应的ASCII值加到 hash 变量中
        for (var i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i); // 使用JavaScript的 String 类中的 charCodeAt方法
        }
        return hash % 37; // ，返回 hash 值。为了得到比较小的数值，我们会使用hash值和一个任意数做除法的余数
      }
    }]);

    return HashTable;
  }();

  return HashTable;
}();