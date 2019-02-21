export const Stack = function () {
    // 私有变量
  const items = new WeakMap()
    // 创建栈
  class Stack {
    constructor () {
      items.set(this, [])
    }
        // 向栈添加元素
    push (item) {
      let elements = items.get(this)
      elements.push(item)
    }
        // 从栈移除元素
    pop () {
      let elements = items.get(this)
      return elements.pop()
    }
        // 查看栈顶元素
    peek () {
      let elements = items.get(this)
      return elements[elements.length - 1]
    }
        // 检查栈是否为空
    isEmpty () {
      let elements = items.get(this)
      return elements.length == 0
    }
        // 清空
    clear () {
      let elements = items.get(this)
      elements.clear()
    }
        // 打印栈元素
    print () {
      let elements = items.get(this)
      console.log(elements.toString())
    }
  }
  return Stack
}()
