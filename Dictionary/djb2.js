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

    print() {
      let element = table.get(this)
      for (let i = 0; i < element.length; i++) {
        if (element[i] !== undefined) {
          console.log(`${i}:${element[i]}`)
        }
      }
    }

    /**
     * 散列函数
     * 给定一个 key 参数，我们就能根据组成 key 的每个字符的ASCII码值的和得到一个数字
     * @param {*} key 
     */
    _loseloseHashCode(key) {
      var hash = 5381; // 初始化一个 hash 变量并赋值为一个质数
      for (var i = 0; i < key.length; i++) { // 迭代参数
        hash = hash * 33 + key.charCodeAt(i) // 将 hash 与 33 相乘并和当前迭代到的字符的ASCII码值相加
      }
      return hash % 1013 // 将使用相加的和与另一个随机质数相除的余数
    }
  }
  return HashTable
}()