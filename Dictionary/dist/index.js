'use strict';

// import { Dictionary } from './Dictionary'

// let dictionary = new Dictionary()
// dictionary.set('Gandalf', 'gandalf@email.com')
// dictionary.set('John', 'johnsnow@email.com')
// dictionary.set('Tyrion', 'tyrion@email.com')
// console.log(dictionary.has('Gandalf'))
// console.log(dictionary.size())
// console.log(dictionary.keys())
// console.log(dictionary.values())
// console.log(dictionary.get('Tyrion'))
// dictionary.delete('John')
// console.log(dictionary.size())
// console.log(dictionary.keys())
// console.log(dictionary.values())
// console.log(dictionary.getItems())

// import { HashTable } from './HashTable'
// let hashTable = new HashTable()
// hashTable.put('Gandalf', 'gandalf@email.com') // 19 - Gandalf
// hashTable.put('John', 'johnsnow@email.com') // 29 - John
// hashTable.put('Tyrion', 'tyrion@email.com') // 16 - Tyrion
// console.log(hashTable.get('Gandalf')) // gandalf@email.com
// console.log(hashTable.get('Loiane')) // undefined
// hashTable.remove('Gandalf')
// console.log(hashTable.get('Gandalf')) // undefined

// import { HashTable } from './SeparateChainning'
// let hash = new HashTable()
// hash.put('Gandalf', 'gandalf@email.com')
// hash.put('John', 'johnsnow@email.com')
// hash.put('Tyrion', 'tyrion@email.com')
// hash.put('Aaron', 'aaron@email.com')
// hash.put('Donnie', 'donnie@email.com')
// hash.put('Ana', 'ana@email.com')
// hash.put('Jonathan', 'jonathan@email.com')
// hash.put('Jamie', 'jamie@email.com')
// hash.put('Sue', 'sue@email.com')
// hash.put('Mindy', 'mindy@email.com')
// hash.put('Paul', 'paul@email.com')
// hash.put('Nathan', 'nathan@email.com')

// hash.print()

// import { HashTable } from './LinearProbing'
// let hash = new HashTable()
// hash.put('Gandalf', 'gandalf@email.com')
// hash.put('John', 'johnsnow@email.com')
// hash.put('Tyrion', 'tyrion@email.com')
// hash.put('Aaron', 'aaron@email.com')
// hash.put('Donnie', 'donnie@email.com')
// hash.put('Ana', 'ana@email.com')
// hash.put('Jonathan', 'jonathan@email.com')
// hash.put('Jamie', 'jamie@email.com')
// hash.put('Sue', 'sue@email.com')
// hash.put('Mindy', 'mindy@email.com')
// hash.put('Paul', 'paul@email.com')
// hash.put('Nathan', 'nathan@email.com')

// hash.print()
// // 5:[Jonathan - jonathan@email.com]
// // 6:[Jamie - jamie@email.com]
// // 7:[Sue - sue@email.com]
// // 10:[Nathan - nathan@email.com]
// // 13:[Donnie - donnie@email.com]
// // 14:[Ana - ana@email.com]
// // 16:[Tyrion - tyrion@email.com]
// // 17:[Aaron - aaron@email.com]
// // 19:[Gandalf - gandalf@email.com]
// // 29:[John - johnsnow@email.com]
// // 32:[Mindy - mindy@email.com]
// // 33:[Paul - paul@email.com]

// console.log(hash.get('Sue')) // sue@email.com

// hash.remove('Sue')
// hash.print()
// // 5:[Jonathan - jonathan@email.com]
// // 6:[Jamie - jamie@email.com]
// // 10:[Nathan - nathan@email.com]
// // 13:[Donnie - donnie@email.com]
// // 14:[Ana - ana@email.com]
// // 16:[Tyrion - tyrion@email.com]
// // 17:[Aaron - aaron@email.com]
// // 19:[Gandalf - gandalf@email.com]
// // 29:[John - johnsnow@email.com]
// // 32:[Mindy - mindy@email.com]
// // 33:[Paul - paul@email.com]

// import { HashTable } from './djb2'
// let hash = new HashTable()
// hash.put('Gandalf', 'gandalf@email.com')
// hash.put('John', 'johnsnow@email.com')
// hash.put('Tyrion', 'tyrion@email.com')
// hash.put('Aaron', 'aaron@email.com')
// hash.put('Donnie', 'donnie@email.com')
// hash.put('Ana', 'ana@email.com')
// hash.put('Jonathan', 'jonathan@email.com')
// hash.put('Jamie', 'jamie@email.com')
// hash.put('Sue', 'sue@email.com')
// hash.put('Mindy', 'mindy@email.com')
// hash.put('Paul', 'paul@email.com')
// hash.put('Nathan', 'nathan@email.com')

// hash.print()
// // 54:paul@email.com
// // 215:aaron@email.com
// // 223:nathan@email.com
// // 278:donnie@email.com
// // 288:jonathan@email.com
// // 502:sue@email.com
// // 624:tyrion@email.com
// // 798:gandalf@email.com
// // 804:mindy@email.com
// // 838:johnsnow@email.com
// // 925:ana@email.com
// // 962:jamie@email.com

var hash = new Map();
hash.set('Gandalf', 'gandalf@email.com');
hash.set('John', 'johnsnow@email.com');
hash.set('Tyrion', 'tyrion@email.com');
hash.set('Aaron', 'aaron@email.com');
hash.set('Donnie', 'donnie@email.com');
hash.set('Ana', 'ana@email.com');
hash.set('Jonathan', 'jonathan@email.com');
hash.set('Jamie', 'jamie@email.com');
hash.set('Sue', 'sue@email.com');
hash.set('Mindy', 'mindy@email.com');
hash.set('Paul', 'paul@email.com');
hash.set('Nathan', 'nathan@email.com');
console.log(hash.has('Ana')); // true
console.log(hash.size); // 12
console.log(hash.keys()); // MapIterator {'Gandalf','John','Tyrion','Aaron','Donnie','Ana','Jonathan','Jamie','Sue','Mindy','Paul','Nathan' }
console.log(hash.values()); // MapIterator {'gandalf@email.com','johnsnow@email.com','tyrion@email.com','aaron@email.com','donnie@email.com','ana@email.com','jonathan@email.com','jamie@email.com','sue@email.com','mindy@email.com','paul@email.com','nathan@email.com' }
console.log(hash.get('Paul')); // paul@email.com

// 只能用对象作为键
var weakHash = new WeakMap();
var ob1 = { name: 'Gandalf' },
    ob2 = { name: 'John' },
    ob3 = { name: 'Tyrion' };
weakHash.set(ob1, 'gandalf@email.com');
weakHash.set(ob2, 'johnsnow@email.com');
weakHash.set(ob3, 'tyrion@email.com');
console.log(weakHash.has(ob1)); // 输出true
console.log(weakHash.get(ob3)); // 输出tyrion@email.com
weakHash.delete(ob2); //