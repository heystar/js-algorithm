import { Sets } from './Sets'

/**
 * 差集: 对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合。
 * @param {Set} otherSet 
 * @param {Set} thisSet 
 */
export const difference = (thisSet, otherSet) => {
  let differenceSet = new Sets()

  let values = thisSet.values()
  for (let i = 0; i < values.length; i++) {
    if(!otherSet.has(values[i])){
      differenceSet.add(values[i])
    }
  }
  return differenceSet
}