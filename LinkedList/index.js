// import { LinkedList } from './LinkedList'

// let list = new LinkedList()
// list.append(0)
// list.append(1)
// list.append(2)
// console.log(list.toString())
// list.insert(1,3)
// console.log(list.toString())
// list.removeAt(1)
// console.log(list.toString())
// console.log(list.indexOf(0))

import { DoublyLinkedList } from './DoublyLinkedList'

let doublyList = new DoublyLinkedList()
doublyList.append('a')
doublyList.append('b')
doublyList.append('c')
doublyList.append('d')
console.log(doublyList.toString())
doublyList.insert(2, 'e')
console.log(doublyList.toString())
doublyList.removeAt(3)
console.log(doublyList.toString())