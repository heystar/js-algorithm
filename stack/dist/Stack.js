"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = exports.Stack = function () {
  // 私有变量
  var items = new WeakMap();
  // 创建栈

  var Stack = function () {
    function Stack() {
      _classCallCheck(this, Stack);

      items.set(this, []);
    }
    // 向栈添加元素


    _createClass(Stack, [{
      key: "push",
      value: function push(item) {
        var elements = items.get(this);
        elements.push(item);
      }
      // 从栈移除元素

    }, {
      key: "pop",
      value: function pop() {
        var elements = items.get(this);
        return elements.pop();
      }
      // 查看栈顶元素

    }, {
      key: "peek",
      value: function peek() {
        var elements = items.get(this);
        return elements[elements.length - 1];
      }
      // 检查栈是否为空

    }, {
      key: "isEmpty",
      value: function isEmpty() {
        var elements = items.get(this);
        return elements.length == 0;
      }
      // 清空

    }, {
      key: "clear",
      value: function clear() {
        var elements = items.get(this);
        elements.clear();
      }
      // 打印栈元素

    }, {
      key: "print",
      value: function print() {
        var elements = items.get(this);
        console.log(elements.toString());
      }
    }]);

    return Stack;
  }();

  return Stack;
}();