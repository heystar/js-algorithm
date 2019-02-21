export const PriorityQueue = (function () {
  const items = new WeakMap()
  class PriorityQueue {
    constructor () {
      items.set(this, [])
    }
        // 向队列尾部添加一个（或多个）新的项。
    enqueue (item, priority) {
      let elements = items.get(this)
      let added = false
      for (let i = 0; i < elements.length; i++) {
        // 判断优先级
        if (priority < elements[i].priority) {
          elements.splice(i, 0, {element: item, priority: priority})
          added = true
          break
        }
      }
      if(!added)
        elements.push({element: item, priority: priority})
    }
        // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
    dequeue () {
      let elements = items.get(this)
      return elements.shift()
    }
        // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动
    front () {
      let elements = items.get(this)
      return elements[0]
    }
        // 如果队列中不包含任何元素，返回 true ，否则返回 false 。
    isEmpty () {
      let elements = items.get(this)
      return elements.length == 0
    }
        // 返回队列包含的元素个数
    size () {
      let elements = items.get(this)
      return elements.length
    }
        // 打印元素
    print () {
      let elements = items.get(this)
      for (let i = 0; i < elements.length; i++) {
        console.log(`${elements[i].element} - ${elements[i].priority}`)
      }
    }
    }
  return PriorityQueue
})()
