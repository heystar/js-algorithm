export const LinkedList = function () {
  /**
   * 节点类
   * 存放元素本身的节点和下一个元素的引用
   */
  class Node {
    constructor(element) {
      this.element = element // 添加到列表的值
      this.next = null // 指向列表中下一个节点项的指针
    }
  }

  class LinkedList {
    constructor() {
      this.length = 0, // 列表项的数量
      this.head = null // 第一个节点
    }
    /**
     * 向列表尾部添加一个新的项
     * @param {*} element 
     */
    append(element) {
      // 创建一个节点
      let node = new Node(element)
      // 列表为空
      if (this.head === null) {
        // 赋值给第一个节点
        this.head = node
      } else {
        // 节点不为空时,节点头赋值给current
        let current = this.head
        // 从this.head开始遍历next
        while (current.next) {
          current = current.next
        }
        // 找到最后一个节点, 将新创建的节点赋值给它的next
        current.next = node
      }
      this.length++
    }
    /**
     * 向列表的特定位置插入一个新的项
     * @param {Number} position 插入位置
     * @param {*} element 
     */
    insert(position, element) {
      // 检查边界
      if (position < 0 || position > this.length)
        return false
      let node = new Node(element), // 创建节点
        current = this.head, // 当前节点位置
        previous, // 前一个节点
        index = 0
      // 在第0个位置插入
      if (position === 0) {
        // 插入第一个节点next
        node.next = current
        // 改变this.head为node
        this.head = node
      } else {
        // 遍历到position位置
        while (index++ < position) {
          // 找到position前一个位置
          previous = current
          current = current.next
        }
        // 前一个节点的next等于当前创建节点
        previous.next = node
        // 当前节点next等于找到的current(下一个节点)
        node.next = current
      }
      this.length++
    }
    /**
     * 从列表中移除一项
     * @param {*} element 
     */
    remove(element) {
      let index = this.indexOf(element)
      return this.removeAt(idnex)
    }
    /**
     * 返回元素在列表中的索引。如果列表中没有该元素则返回 -1
     * @param {*} element 
     */
    indexOf(element) {
      let current = this.head,
        index = -1
      while (current) {
        if (current.element === element) {
          index += 1
          break
        }
        current = current.next
        index++
      }
      return index
    }
    /**
     * 从列表的特定位置移除一项
     * @param {Number} position 
     */
    removeAt(position) {
      // 检查边界
      if (position < 0 || position > this.length)
        return false
      let current = this.head,
        previous,
        index = 0
      if (position === 0) {
        this.head = current.next
      } else {
        for (let i = index; i < position; i++) {
          previous = current
          current = current.next
          index++
        }
        // 将previous与current的下一项链接起来：跳过current，从而移除它
        previous.next = current.next
      }
      this.length--
      // 返回删除的元素
      return current.element
    }
    /**
     * 如果链表中不包含任何元素，返回 true ，如果链表长度大于0则返回 false 
     */
    isEmpty() {
      return this.length === 0
    }
    /**
     * 返回链表包含的元素个数。与数组的 this.length 属性类似
     */
    size() {
      return this.length
    }
    /**
     * 输出元素的值
     */
    toString() {
      let current = this.head,
        string = ''
      // 从this.head开始遍历节点
      while (current) {
        string += `${current.element}${current.next ? ' - ' : ''}`
        current = current.next
      }
      return string
    }
    getHead() {
      return this.head
    }
  }
  return LinkedList
}() 