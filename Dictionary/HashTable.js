export const HashTable = function () {
  let table = new WeakMap()
  class HashTable {
    constructor() {
      table.set(this, [])
    }

    /**
     * 向散列表增加一个新的项（也能更新散列表）
     * @param {*} key 
     * @param {*} value 
     */
    put(key, value) {
      // 算出key在表中的位置
      let position = this._loseloseHashCode(key)
      console.log(position + ' - ' + key)
      let element = table.get(this)
      element[position] = value
    }
    /**
     * 根据键值从散列表中移除值。
     * @param {*} key 
     */
    remove(key) {
      let element = table.get(this)
      element[this._loseloseHashCode(key)] = undefined
    }
    /**
     * 返回根据键值检索到的特定的值
     * @param {*} key 
     */
    get(key) {
      let element = table.get(this)
      return element[this._loseloseHashCode(key)]
    }

    /**
     * 散列函数
     * 给定一个 key 参数，我们就能根据组成 key 的每个字符的ASCII码值的和得到一个数字
     * @param {*} key 
     */
    _loseloseHashCode(key) {
      let hash = 0 // 变量来存储这个总和
      // 然后，遍历 key并将从ASCII表中查到的每个字符对应的ASCII值加到 hash 变量中
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i) // 使用JavaScript的 String 类中的 charCodeAt方法
      }
      return hash % 37 // ，返回 hash 值。为了得到比较小的数值，我们会使用hash值和一个任意数做除法的余数
    }
  }
  return HashTable
}()