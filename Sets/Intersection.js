import { Sets } from './Sets'
/**
 * 交集：对于给定的两个集合，返回一个包含两个集合中共有元素的新集合
 * @param {Set} thisSet 
 * @param {Set} otherSet 
 */
export const intersection = (thisSet, otherSet) => {
  let intersectionSet = new Sets()

  let values = thisSet.values()
  for (let i = 0; i < values.length; i++) {
    if (otherSet.has(values[i])) {
      intersectionSet.add(values[i])
    }
  }
  return intersectionSet
}