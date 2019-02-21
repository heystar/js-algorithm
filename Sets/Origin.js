/**
 * 并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合
 * @param {*} thisSet 
 * @param {*} otherSet 
 */
export const union = (thisSet, otherSet) => {
  let unionSet = new Set()
  for (let x in thisSet) unionSet.add(x)
  for (let x in otherSet) unionSet.add(x)
  return unionSet
}

/**
 * 交集：对于给定的两个集合，返回一个包含两个集合中共有元素的新集合
 * @param {*} thisSet 
 * @param {*} otherSet 
 */
export const intersection = (thisSet, otherSet) => {
  let intersectionSet = new Set()
  for (let x in thisSet) {
    if (otherSet.has(x)) {
      intersectionSet.add(x)
    }
  }
  return intersectionSet
}

/**
 * 差集: 对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合。
 * @param {*} thisSet 
 * @param {*} otherSet 
 */
export const difference = (thisSet, otherSet) => {
  let differenceSet = new Set()
  for (let x in thisSet) {
    if (!otherSet.has(x)) {
      differenceSet.add(x)
    }
  }
  return differenceSet
}

/**
 * 子集：验证一个给定集合是否是另一集合的子集。
 * @param {*} thisSet 
 * @param {*} otherSet 
 */
export const subSet = (thisSet, otherSet) => {
  if(thisSet.size() > otherSet.szie()){
    return false
  }else{
    for (let x in thisSet) {
      if (!otherSet.has(x)) {
        return false
      }
    }
    return true
  }
}