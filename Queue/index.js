import { Queue } from './Queue'

// {
//   let queue = new Queue()
//   console.log(queue.isEmpty())
//   queue.enqueue(1)
//   queue.enqueue(2)
//   queue.enqueue(3)
//   console.log(queue.isEmpty())
//   console.log(queue.front())
//   console.log(queue.dequeue())
//   queue.print()
// }
// // 优先队列
// import { PriorityQueue } from './PriorityQueue'
// let priorityQueue = new PriorityQueue()
// priorityQueue.enqueue('John', 2)
// priorityQueue.enqueue('Jack', 1)
// priorityQueue.enqueue('Camila', 1)
// priorityQueue.print()

// 击鼓传花
const hotPotato = (names, num) => {
  let queue = new Queue()
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i])
  }

  let eliminated = ''
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()) // 从队列开头移除一项，再将其添加到队列末尾
    }
    eliminated = queue.dequeue()
    console.log(eliminated + '在击鼓传花游戏中被淘汰。')
  }
  return queue.dequeue()
}

let names = ['John','Jack','Camila','Ingrid','Carl']
let winner = hotPotato(names, 7)
console.log('The winner is: ' + winner)