export const Sets = function () {
  class Sets {
    constructor() {
      this.items = {}
    }
    /**
     * 向集合添加一个新的项
     * @param {*} value 
     */
    add(value) {
      if (!this.has(value)) {
        this.items[value] = value
        return true
      }
      return false
    }
    /**
     * 从集合移除一个值
     * @param {*} value 
     */
    remove(value) {
      if (this.has(value)) {
        delete this.items[value]
        return true
      }
      return false
    }
    /**
     * 如果值在集合中，返回 true ，否则返回 false 
     * @param {*} value 
     */
    has(value) {
      return this.items.hasOwnProperty(value)
    }
    /**
     * 移除集合中的所有项
     */
    clear() {
      this.items = {}
    }
    /**
     * 返回集合所包含元素的数量。与数组的 length 属性类似。
     */
    size() {
      return Object.keys(this.items).length
    }
    /**
     * 返回一个包含集合中所有值的数组
     */
    values() {
      let values = []
      for (let i = 0, keys = Object.keys(this.items); i < keys.length; i++) {
        values.push(this.items[keys[i]])
      }
      return values
    }
  }
  return Sets
}()