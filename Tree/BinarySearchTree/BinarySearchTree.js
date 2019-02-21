class Node {
  constructor(key) {
    this.key = key
    this.left = null // 左侧子节点
    this.right = null // 右侧子节点
  }
}
export class BinarySearchTree {
  constructor() {
    this.root = null
  }
  /**
   * 向树中插入一个新的键
   * @param {*} key 
   */
  insert(key) {
    let newNode = new Node(key) // 创建用来表示新节点的 Node 类
    if (this.root === null) { // 插入节点是树的第一个节点
      this.root = newNode
    } else { // 非根节点
      this._insertNode(this.root, newNode)
    }
  }

  /**
   * 私有函数 -- 找到新节点应该插入的正确位置
   * @param {Object} node 从根节点开始
   * @param {Object} newNode  新节点
   */
  _insertNode(node, newNode) {
    if (newNode.key < node.key) { // 如果新节点的键小于当前节点的键
      if (node.left === null) { // 如果没有左侧子节点
        node.left = newNode // 插入新的节点
      } else {
        this._insertNode(node.left, newNode)
      }
    } else { // 如果节点的键比当前节点的键大
      if (node.right === null) { // 当前节点没有右侧子节点
        node.right = newNode // 插入新的节点
      } else {
        this._insertNode(node.right, newNode)
      }
    }
  }

  /**
   * 在树中查找一个键，如果节点存在，则返回 true ；如果不存在，则返回false
   * @param {*} key 
   */
  search(key) {
    return this._searchNode(this.root, key)
  }

  _searchNode(node, key) {
    if (node === null) {
      return false
    }
    if (key < node.key) {
      return this._searchNode(node.left, key)
    } else if (key > node.key) {
      return this._searchNode(node.right, key)
    } else {
      return true
    }
  }

  /**
   * 通过先序遍历方式遍历所有节点
   */
  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this.root, callback)
  }

  _preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this._preOrderTraverseNode(node.left, callback)
      this._preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 通过中序遍历方式遍历所有节点
   */
  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this.root, callback)
  }

  /**
   * 私有辅助函数 -- 以从最小到最大的顺序访问所有节点
   * @param {Object} node 
   * @param {Function} callback 
   */
  _inOrderTraverseNode(node, callback) {
    if (node !== null) {// 检查以参数形式传入的节点是否为 null 
      this._inOrderTraverseNode(node.left, callback) // 调用相同的函数来访问左侧子节点
      callback(node.key)
      this._inOrderTraverseNode(node.right, callback) // 然后再访问右侧子节点
    }
  }

  /**
   * 通过后序遍历方式遍历所有节点
   */
  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this.root, callback)
  }

  _postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, callback)
      this._postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  /**
   * 返回树种最小的值/键
   */
  min() {
    let node = this.root
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    } else {
      return null
    }
  }

  /**
   * 返回树中最大的值/键
   */
  max() {
    let node = this.root
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    } else {
      return null
    }
  }

  /**
   * 从树种移出某个键
   */
  remove(key) {
    this.root = this._removeNode(this.root, key)
  }

  _removeNode(node, key) {
    if (node === null) {
      return null
    }
    if (key < node.key) {
      node.left = this._removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this._removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {// 根节点
        node = null
        return node
      }

      // 只有一个子节点的节点
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // 一个有两个子节点的节点
      let aux = this._findMinNode(node.right)
      node.key = aux.key
      node.right = this._removeNode(node.right, aux.key)
      return node
    }
  }

  _findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
}