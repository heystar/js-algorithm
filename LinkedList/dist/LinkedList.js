'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkedList = exports.LinkedList = function () {
  /**
   * 节点类
   * 存放元素本身的节点和下一个元素的引用
   */
  var Node = function Node(element) {
    _classCallCheck(this, Node);

    this.element = element; // 添加到列表的值
    this.next = null; // 指向列表中下一个节点项的指针
  };

  var length = 0,
      // 列表项的数量
  head = null; // 第一个节点

  var LinkedList = function () {
    function LinkedList() {
      _classCallCheck(this, LinkedList);
    }

    _createClass(LinkedList, [{
      key: 'append',

      /**
       * 向列表尾部添加一个新的项
       * @param {*} element 
       */
      value: function append(element) {
        // 创建一个节点
        var node = new Node(element);
        // 列表为空
        if (head === null) {
          // 赋值给第一个节点
          head = node;
        } else {
          // 节点不为空时,节点头赋值给current
          var current = head;
          // 从head开始遍历next
          while (current.next) {
            current = current.next;
          }
          // 找到最后一个节点, 将新创建的节点赋值给它的next
          current.next = node;
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
        // 检查边界
        if (position < 0 || position > length) return false;
        var node = new Node(element),
            // 创建节点
        current = head,
            // 当前节点位置
        previous = void 0,
            // 前一个节点
        index = 0;
        // 在第0个位置插入
        if (position === 0) {
          // 插入第一个节点next
          node.next = current;
          // 改变head为node
          head = node;
        } else {
          // 遍历到position位置
          while (index++ < position) {
            // 找到position前一个位置
            previous = current;
            current = current.next;
          }
          // 前一个节点的next等于当前创建节点
          previous.next = node;
          // 当前节点next等于找到的current(下一个节点)
          node.next = current;
        }
        length++;
      }
      /**
       * 从列表中移除一项
       * @param {*} element 
       */

    }, {
      key: 'remove',
      value: function remove(element) {
        var index = this.indexOf(element);
        return this.removeAt(idnex);
      }
      /**
       * 返回元素在列表中的索引。如果列表中没有该元素则返回 -1
       * @param {*} element 
       */

    }, {
      key: 'indexOf',
      value: function indexOf(element) {
        var current = head,
            index = -1;
        while (current) {
          if (current.element === element) {
            index += 1;
            break;
          }
          current = current.next;
          index++;
        }
        return index;
      }
      /**
       * 从列表的特定位置移除一项
       * @param {Number} position 
       */

    }, {
      key: 'removeAt',
      value: function removeAt(position) {
        // 检查边界
        if (position < 0 || position > length) return false;
        var current = head,
            previous = void 0,
            index = 0;
        if (position === 0) {
          head = current.next;
        } else {
          for (var i = index; i < position; i++) {
            previous = current;
            current = current.next;
            index++;
          }
          // 将previous与current的下一项链接起来：跳过current，从而移除它
          previous.next = current.next;
        }
        length--;
        // 返回删除的元素
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
      /**
       * 输出元素的值
       */

    }, {
      key: 'toString',
      value: function toString() {
        var current = head,
            string = '';
        // 从head开始遍历节点
        while (current) {
          string += '' + current.element + (current.next ? ' - ' : '');
          current = current.next;
        }
        return string;
      }
    }]);

    return LinkedList;
  }();

  return LinkedList;
}();