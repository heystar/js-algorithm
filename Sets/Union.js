import { Sets } from './Sets'
/**
 * 并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合
 */
export function union(thisSet, otherSet) {
    let unionSet = new Sets()

    let values = thisSet.values()
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet
  }
