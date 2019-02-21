'use strict';

var _Sets = require('./Sets');

var _SubSet = require('./SubSet');

var SetA = new _Sets.Sets();
SetA.add(1);
SetA.add(2);

var SetB = new _Sets.Sets();
SetB.add(1);
SetB.add(2);
SetB.add(3);

console.log((0, _SubSet.subSet)(SetA, SetB));

var SetC = new _Sets.Sets();
SetC.add(2);
SetC.add(3);
SetC.add(4);
console.log((0, _SubSet.subSet)(SetB, SetC));

// import { difference } from './Difference'
// let SetA = new Sets()
// SetA.add(1)
// SetA.add(2)
// SetA.add(3)

// let SetB = new Sets()
// SetB.add(2)
// SetB.add(3)
// SetB.add(4)

// let differenceAB = difference(SetA, SetB)
// console.log(differenceAB.values())

// let SetA = new Sets()
// SetA.add(1)
// SetA.add(2)
// SetA.add(3)

// let SetB = new Sets()
// SetB.add(2)
// SetB.add(3)
// SetB.add(4)

// let intersectionAB = intersection(SetA, SetB)
// console.log(intersectionAB.values())
//import { union } from './Union'

// let sets = new  Sets()
// sets.add(1)
// console.log(sets.values())
// console.log(sets.size())
// console.log(sets.has(1))
// sets.add(2)
// console.log(sets.values())
// sets.remove(2)
// console.log(sets.values())

// let SetA = new Sets()
// SetA.add(1)
// SetA.add(2)
// SetA.add(3)

// let SetB = new Sets()
// SetB.add(3)
// SetB.add(4)
// SetB.add(5)
// SetB.add(6)

// let UnionAB = union(SetA, SetB)
// console.log(UnionAB.values())