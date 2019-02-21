/**
 * 线性探查
 */
import { ValuePair } from './ValuePair'
export const HashTable = function () {
  let table = new WeakMap()

  class HashTable {
    constructor() {
      table.set(this, [])
    }

    put(key, value) {
      let element = table.get(this)
      let position = this._loseloseHashCode(key)

      console.log(position + ' - ' + key)
      
      // 验证这个位置是否有元素存在
      if (element[position] === undefined) {
        // 加入新元素
        element[position] = new ValuePair(key, value)
      } else {
        // 如果这个位置已经被占据了，需要找到下一个没有被占据的位置
        let index = ++position
        while (element[index] !== undefined) {
          index++
        }
        element[index] = new ValuePair(key, value)
      }
    }

    get(key) {
      let element = table.get(this)
      let position = this._loseloseHashCode(key)

      if (element[position] !== undefined) {
        if (element[position].key === key) {
          return element[position].value
        } else {
          let index = ++position
          while (element[index] === undefined || (element[index] && element[index].key !== key)) {
            index++
          }
          if (element[index] && element[index].key === key) {
            return element[index].value
          }
        }
      } else {
        //search for possible deleted value
        let index = ++position
        while (element[index] === undefined || index == element.length ||
          (element[index] !== undefined && element[index] && element[index].key !== key)) {
          index++
        }
        if (element[index] && element[index].key === key) {
          return element[index].value
        }
      }
      return undefined
    }

    remove(key) {
      let element = table.get(this)
      let position = this._loseloseHashCode(key)
      if (element[position] !== undefined) {
        if (element[position].key === key) {
          element[position] = undefined
        } else {
          let index = ++position
          while (element[index] === undefined || element[index].key !== key) {
            index++
          }
          if (element[index].key === key) {
            element[index] = undefined
          }
        }
      }
    }

    print() {
      let element = table.get(this)
      for (let i = 0; i < element.length; i++) {
        if (element[i] !== undefined) {
          console.log(`${i}:${element[i]}`)
        }
      }
    }

    _loseloseHashCode(key) {
      let hash = 0 // 变量来存储这个总和
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i)
      }
      return hash % 37 // 返回 hash 值。为了得到比较小的数值，我们会使用hash值和一个任意数做除法的余数
    }
  }
  return HashTable
}()