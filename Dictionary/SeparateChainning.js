/**
 * 分离链接
 */
import { LinkedList } from './LinkedList'
import { ValuePair } from './ValuePair'

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
      let element = table.get(this)
      if (element[position] === undefined) {
        element[position] = new LinkedList()
      }
      element[position].append(new ValuePair(key, value))
    }
    /**
     * 根据键值从散列表中移除值。
     * @param {*} key 
     */
    remove(key) {
      let element = table.get(this)
      let position = this._loseloseHashCode(key)
      if (element[position] !== undefined) {
        let current = element[position].getHead()
        while (current.next) {
          if (current.element.key === key) {
            element[position].remove(current.element)
            if (element[position].isEmpty()) {
              element[position] = undefined
            }
            return true
          }
          current = current.next
        }

        if (current.element.key === key) {
          element[position].remove(current.element)
          if (element[position].isEmpty()) {
            element[position] = undefined
          }
          return true
        }
      }
      return false
    }
    /**
     * 返回根据键值检索到的特定的值
     * @param {*} key 
     */
    get(key) {
      let element = table.get(this)
      let position = this._loseloseHashCode(key)
      // 特定位置上是否有元素存在
      if (element[position] !== undefined) {
        // 遍历链表来寻找键/值
        let current = element[position].getHead()
        // 从链表的头部开始寻找
        while (current.next) {
          if (current.element.key === key) {
            return current.element.value
          }
          current = current.next
        }
        // 检查元素在链表第一个或最后一个节点的情况，如果要找的元素是链表的第一个或最后一个节点，那么就不会进入 while 循环的内部
        if (current.element.key === key) {
          return current.element.value
        }
      }
      return undefined
    }

    print() {
      let element = table.get(this)
      for (let i = 0; i < element.length; i++) {
        if (element[i] != undefined) {
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