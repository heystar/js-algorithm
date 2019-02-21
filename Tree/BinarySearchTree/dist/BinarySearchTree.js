"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(key) {
  _classCallCheck(this, Node);

  this.key = key;
  this.left = null; // 左侧子节点
  this.right = null; // 右侧子节点
};

var BinarySearchTree = exports.BinarySearchTree = function () {
  function BinarySearchTree() {
    _classCallCheck(this, BinarySearchTree);

    this.root = null;
  }
  /**
   * 向树中插入一个新的键
   * @param {*} key 
   */


  _createClass(BinarySearchTree, [{
    key: "insert",
    value: function insert(key) {
      var newNode = new Node(key); // 创建用来表示新节点的 Node 类
      if (this.root === null) {
        // 插入节点是树的第一个节点
        this.root = newNode;
      } else {
        // 非根节点
        this._insertNode(this.root, newNode);
      }
    }

    /**
     * 私有函数 -- 找到新节点应该插入的正确位置
     * @param {Object} node 从根节点开始
     * @param {Object} newNode  新节点
     */

  }, {
    key: "_insertNode",
    value: function _insertNode(node, newNode) {
      if (newNode.key < node.key) {
        // 如果新节点的键小于当前节点的键
        if (node.left === null) {
          // 如果没有左侧子节点
          node.left = newNode; // 插入新的节点
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        // 如果节点的键比当前节点的键大
        if (node.right === null) {
          // 当前节点没有右侧子节点
          node.right = newNode; // 插入新的节点
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }

    /**
     * 在树中查找一个键，如果节点存在，则返回 true ；如果不存在，则返回false
     * @param {*} key 
     */

  }, {
    key: "search",
    value: function search(key) {
      return this._searchNode(this.root, key);
    }
  }, {
    key: "_searchNode",
    value: function _searchNode(node, key) {
      if (node === null) {
        return false;
      }
      if (key < node.key) {
        return this._searchNode(node.left, key);
      } else if (key > node.key) {
        return this._searchNode(node.right, key);
      } else {
        return true;
      }
    }

    /**
     * 通过先序遍历方式遍历所有节点
     */

  }, {
    key: "preOrderTraverse",
    value: function preOrderTraverse(callback) {
      this._preOrderTraverseNode(this.root, callback);
    }
  }, {
    key: "_preOrderTraverseNode",
    value: function _preOrderTraverseNode(node, callback) {
      if (node !== null) {
        callback(node.key);
        this._preOrderTraverseNode(node.left, callback);
        this._preOrderTraverseNode(node.right, callback);
      }
    }

    /**
     * 通过中序遍历方式遍历所有节点
     */

  }, {
    key: "inOrderTraverse",
    value: function inOrderTraverse(callback) {
      this._inOrderTraverseNode(this.root, callback);
    }

    /**
     * 私有辅助函数 -- 以从最小到最大的顺序访问所有节点
     * @param {Object} node 
     * @param {Function} callback 
     */

  }, {
    key: "_inOrderTraverseNode",
    value: function _inOrderTraverseNode(node, callback) {
      if (node !== null) {
        // 检查以参数形式传入的节点是否为 null 
        this._inOrderTraverseNode(node.left, callback); // 调用相同的函数来访问左侧子节点
        callback(node.key);
        this._inOrderTraverseNode(node.right, callback); // 然后再访问右侧子节点
      }
    }

    /**
     * 通过后序遍历方式遍历所有节点
     */

  }, {
    key: "postOrderTraverse",
    value: function postOrderTraverse(callback) {
      this._postOrderTraverseNode(this.root, callback);
    }
  }, {
    key: "_postOrderTraverseNode",
    value: function _postOrderTraverseNode(node, callback) {
      if (node !== null) {
        this._postOrderTraverseNode(node.left, callback);
        this._postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    }
    /**
     * 返回树种最小的值/键
     */

  }, {
    key: "min",
    value: function min() {
      var node = this.root;
      if (node) {
        while (node && node.left !== null) {
          node = node.left;
        }
        return node.key;
      } else {
        return null;
      }
    }

    /**
     * 返回树中最大的值/键
     */

  }, {
    key: "max",
    value: function max() {
      var node = this.root;
      if (node) {
        while (node && node.right !== null) {
          node = node.right;
        }
        return node.key;
      } else {
        return null;
      }
    }

    /**
     * 从树种移出某个键
     */

  }, {
    key: "remove",
    value: function remove(key) {
      this.root = this._removeNode(this.root, key);
    }
  }, {
    key: "_removeNode",
    value: function _removeNode(node, key) {
      if (node === null) {
        return null;
      }
      if (key < node.key) {
        node.left = this._removeNode(node.left, key);
        return node;
      } else if (key > node.key) {
        node.right = this._removeNode(node.right, key);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          // 根节点
          node = null;
          return node;
        }

        // 只有一个子节点的节点
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }

        // 一个有两个子节点的节点
        var aux = this._findMinNode(node.right);
        node.key = aux.key;
        node.right = this._removeNode(node.right, aux.key);
        return node;
      }
    }
  }, {
    key: "_findMinNode",
    value: function _findMinNode(node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
  }]);

  return BinarySearchTree;
}();