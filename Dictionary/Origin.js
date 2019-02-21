let hash = new Map()
hash.set('Gandalf', 'gandalf@email.com')
hash.set('John', 'johnsnow@email.com')
hash.set('Tyrion', 'tyrion@email.com')
hash.set('Aaron', 'aaron@email.com')
hash.set('Donnie', 'donnie@email.com')
hash.set('Ana', 'ana@email.com')
hash.set('Jonathan', 'jonathan@email.com')
hash.set('Jamie', 'jamie@email.com')
hash.set('Sue', 'sue@email.com')
hash.set('Mindy', 'mindy@email.com')
hash.set('Paul', 'paul@email.com')
hash.set('Nathan', 'nathan@email.com')
console.log(hash.has('Ana'))
console.log(hash.size)
console.log(hash.keys())
console.log(hash.values())
console.log(hash.get('Paul'))

// 只能用对象作为键
let weakHash = new WeakMap()
var ob1 = {name:'Gandalf'}, 
ob2 = {name:'John'},
ob3 = {name:'Tyrion'};
weakHash.set(ob1, 'gandalf@email.com'); 
weakHash.set(ob2, 'johnsnow@email.com');
weakHash.set(ob3, 'tyrion@email.com');
console.log(weakHash.has(ob1)); // 输出true
console.log(weakHash.get(ob3)); // 输出tyrion@email.com
weakHash.delete(ob2); //