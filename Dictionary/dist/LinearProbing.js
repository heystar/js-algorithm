'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 线性探查
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _ValuePair = require('./ValuePair');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HashTable = exports.HashTable = function () {
  var table = new WeakMap();

  var HashTable = function () {
    function HashTable() {
      _classCallCheck(this, HashTable);

      table.set(this, []);
    }

    _createClass(HashTable, [{
      key: 'put',
      value: function put(key, value) {
        var element = table.get(this);
        var position = this._loseloseHashCode(key);

        console.log(position + ' - ' + key);

        // 验证这个位置是否有元素存在
        if (element[position] === undefined) {
          // 加入新元素
          element[position] = new _ValuePair.ValuePair(key, value);
        } else {
          // 如果这个位置已经被占据了，需要找到下一个没有被占据的位置
          var index = ++position;
          while (element[index] !== undefined) {
            index++;
          }
          element[index] = new _ValuePair.ValuePair(key, value);
        }
      }
    }, {
      key: 'get',
      value: function get(key) {
        var element = table.get(this);
        var position = this._loseloseHashCode(key);

        if (element[position] !== undefined) {
          if (element[position].key === key) {
            return element[position].value;
          } else {
            var index = ++position;
            while (element[index] === undefined || element[index] && element[index].key !== key) {
              index++;
            }
            if (element[index] && element[index].key === key) {
              return element[index].value;
            }
          }
        } else {
          //search for possible deleted value
          var _index = ++position;
          while (element[_index] === undefined || _index == element.length || element[_index] !== undefined && element[_index] && element[_index].key !== key) {
            _index++;
          }
          if (element[_index] && element[_index].key === key) {
            return element[_index].value;
          }
        }
        return undefined;
      }
    }, {
      key: 'remove',
      value: function remove(key) {
        var element = table.get(this);
        var position = this._loseloseHashCode(key);
        if (element[position] !== undefined) {
          if (element[position].key === key) {
            element[position] = undefined;
          } else {
            var index = ++position;
            while (element[index] === undefined || element[index].key !== key) {
              index++;
            }
            if (element[index].key === key) {
              element[index] = undefined;
            }
          }
        }
      }
    }, {
      key: 'print',
      value: function print() {
        var element = table.get(this);
        for (var i = 0; i < element.length; i++) {
          if (element[i] !== undefined) {
            console.log(i + ':' + element[i]);
          }
        }
      }
    }, {
      key: '_loseloseHashCode',
      value: function _loseloseHashCode(key) {
        var hash = 0; // 变量来存储这个总和
        for (var i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i);
        }
        return hash % 37; // 返回 hash 值。为了得到比较小的数值，我们会使用hash值和一个任意数做除法的余数
      }
    }]);

    return HashTable;
  }();

  return HashTable;
}();