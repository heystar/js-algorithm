'use strict';

var _Queue = require('./Queue');

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
var hotPotato = function hotPotato(names, num) {
  var queue = new _Queue.Queue();
  for (var i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }

  var eliminated = '';
  while (queue.size() > 1) {
    for (var _i = 0; _i < num; _i++) {
      queue.enqueue(queue.dequeue()); // 从队列开头移除一项，再将其添加到队列末尾
    }
    eliminated = queue.dequeue();
    console.log(eliminated + '在击鼓传花游戏中被淘汰。');
  }
  return queue.dequeue();
};

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log('The winner is: ' + winner);