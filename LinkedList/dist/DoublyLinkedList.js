'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 双向链表
 */
var DoublyLinkedList = exports.DoublyLinkedList = function () {
  var Node = function Node(element) {
    _classCallCheck(this, Node);

    this.element = element;
    this.prev = null;
    this.next = null;
  };

  var length = 0,
      head = null,
      tail = null;

  var DoublyLinkedList = function () {
    function DoublyLinkedList() {
      _classCallCheck(this, DoublyLinkedList);
    }

    _createClass(DoublyLinkedList, [{
      key: 'append',

      /**
       * 向列表尾部添加一个新的项
       * @param {*} element 
       */
      value: function append(element) {
        var node = new Node(element);
        if (tail === null) {
          head = node;
          tail = node;
        } else {
          var current = tail;
          current.next = node;
          node.prev = current;
          tail = node;
        }
        length++;
      }

      /**
       * 向列表的特定位置插入一个新的项
       * @param {Number} position 插入位置
       * @param {*} element 
       */

    }, {
      key: 'insert',
      value: function insert(position, element) {
        if (position < 0 || position > length) return false;
        var node = new Node(element),
            current = head,
            previous = void 0,
            index = 0;
        if (position === 0) {
          // 插入第一个位置
          if (head) {
            node.next = current; // 新节点next指向head
            current.prev = node; // head.pre指向新节点
            head = node; // head改为新的节点
          } else {
            // 当前列表为空
            head = node;
            tail = node;
          }
        } else if (position === length) {
          // 插入最后一个位置
          current = tail;
          node.prev = current; // 新节点prev指向tail
          current.next = node; // tail.next指向新节点
          tail = node; // tail改为新节点
        } else {
          if (position > length / 2) {
            // 从尾部开始迭代
            index = length;
            current = tail;
            while (index-- > position) {
              previous = current;
              current = current.prev;
            }
            // 前一个节点prev指向新节点
            previous.prev = node;
            // 新节点next指向前一个节点
            node.next = previous;
            // 新节点next指向current(current=current.prev)
            node.prev = current;
            // 下一个节点next指向新节点
            current.next = node;
          } else {
            // 从头部开始迭代
            while (index++ < position) {
              previous = current;
              current = current.next;
            }
            // 前一个节点next指向新节点
            previous.next = node;
            // 新节点prev指向前一个节点
            node.prev = previous;
            // 新节点next指向current(current=current.next)
            node.next = current;
            // 下一个节点prev指向新节点
            current.prev = node;
          }
        }
        length++;
        return true;
      }

      /**
       * 从列表的特定位置移除一项
       * @param {Number} position 
       */

    }, {
      key: 'removeAt',
      value: function removeAt(position) {
        if (position < 0 || position > length) return false;
        var current = head,
            previous = void 0,
            index = 0;
        if (position === 0) {
          head = current.next;
          if (length === 1) {
            // 如果只有一项
            tail = current;
          } else {
            head.prev = null;
          }
        } else if (position === length - 1) {
          // 如果移出最后一项
          current = tail;
          tail = current.prev;
          tail.next = null;
        } else {
          if (position > length / 2) {
            // 从尾部开始迭代
            console.log('从尾部开始迭代');
            index = length;
            current = tail;
            while (index-- > position) {
              previous = current;
              current = current.prev;
            }
            previous.prev = current.prev;
            current.prev.next = previous;
          } else {
            // 从头部开始迭代
            while (index++ < position) {
              previous = current;
              current = current.next;
            }
            previous.next = current.next;
            current.next.prev = previous;
          }
        }
        length--;
        return current.element;
      }

      /**
       * 如果链表中不包含任何元素，返回 true ，如果链表长度大于0则返回 false 
       */

    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        return length === 0;
      }
      /**
       * 返回链表包含的元素个数。与数组的 length 属性类似
       */

    }, {
      key: 'size',
      value: function size() {
        return length;
      }
    }, {
      key: 'toString',
      value: function toString() {
        var current = head,
            string = '';
        while (current) {
          string += '' + current.element + (current.next ? ' - ' : '');
          current = current.next;
        }
        return string;
      }
    }]);

    return DoublyLinkedList;
  }();

  return DoublyLinkedList;
}();