export const Dictionary = function () {
  let items = new WeakMap()
  class Dictionary {
    constructor() {
      items.set(this, {})
    }
    /**
     * 向字典中添加新元素
     * @param {*} key 
     * @param {*} value 
     */
    set(key, value) {
      let element = items.get(this)
      element[key] = value
    }
    /**
     * 通过使用键值来从字典中移除键值对应的数据值。
     * @param {*} key 
     */
    delete(key) {
      if (this.has(key)) {
        let element = items.get(this)
        delete element[key]
        return true
      } else {
        return false
      }
    }
    /**
     * 如果某个键值存在于这个字典中，则返回 true ，反之则返回 false 
     * @param {*} key 
     */
    has(key) {
      let element = items.get(this)
      return key in element
    }
    /**
     * 通过键值查找特定的数值并返回
     * @param {*} key 
     */
    get(key) {
      let element = items.get(this)
      return element[key]
    }
    /**
     * 将这个字典中的所有元素全部删除
     */
    clear() {
      let element = items.get(this)
      element = {}
    }
    /**
     * 返回字典所包含元素的数量。与数组的 length 属性类似。
     */
    size() {
      let element = items.get(this)
      return Object.keys(element).length
    }
    /**
     * 将字典所包含的所有键名以数组形式返回
     */
    keys() {
      let element = items.get(this)
      return Object.keys(element)
    }
    /**
     * 将字典所包含的所有数值以数组形式返回
     */
    values() {
      let element = items.get(this),
        values = []
      for (let key in element) {
        if (this.has(key) && element.hasOwnProperty(key))
          values.push(element[key])
      }
      return values
    }

    getItems() {
      return items.get(this)
    }
  }
  return Dictionary
}()