"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PriorityQueue = exports.PriorityQueue = function () {
  var items = new WeakMap();

  var PriorityQueue = function () {
    function PriorityQueue() {
      _classCallCheck(this, PriorityQueue);

      items.set(this, []);
    }
    // 向队列尾部添加一个（或多个）新的项。


    _createClass(PriorityQueue, [{
      key: "enqueue",
      value: function enqueue(item, priority) {
        var elements = items.get(this);
        var added = false;
        for (var i = 0; i < elements.length; i++) {
          // 判断优先级
          if (priority < elements[i].priority) {
            elements.splice(i, 0, { element: item, priority: priority });
            added = true;
            break;
          }
        }
        if (!added) elements.push({ element: item, priority: priority });
      }
      // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。

    }, {
      key: "dequeue",
      value: function dequeue() {
        var elements = items.get(this);
        return elements.shift();
      }
      // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动

    }, {
      key: "front",
      value: function front() {
        var elements = items.get(this);
        return elements[0];
      }
      // 如果队列中不包含任何元素，返回 true ，否则返回 false 。

    }, {
      key: "isEmpty",
      value: function isEmpty() {
        var elements = items.get(this);
        return elements.length == 0;
      }
      // 返回队列包含的元素个数

    }, {
      key: "size",
      value: function size() {
        var elements = items.get(this);
        return elements.length;
      }
      // 打印元素

    }, {
      key: "print",
      value: function print() {
        var elements = items.get(this);
        for (var i = 0; i < elements.length; i++) {
          console.log(elements[i].element + " - " + elements[i].priority);
        }
      }
    }]);

    return PriorityQueue;
  }();

  return PriorityQueue;
}();