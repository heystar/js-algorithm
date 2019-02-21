import { Sets } from './Sets'

/**
 * 子集：验证一个给定集合是否是另一集合的子集。
 */
export const subSet = (thisSet, otherSet) => {
  // 首先需要验证的是当前 Set 实例的大小。如果当前实例中的元素比 otherSet 实例更多，它就不是一个子集（行 {1} ）。子集的元素个数需要小于或等于要比较的集合。
  if (thisSet.size() > otherSet.size()) {
    return false
  } else {
    let values = thisSet.values()
    for (let i = 0; i < values.length; i++) {
      if(!otherSet.has(values[i])){
        return false
      }
    }
    return true
  }
}