import { Stack } from './Stack'

/**
 * 十进制转换成二进制
 * @param {Number} number 要转换的数字
 * @returns {String} 转换后的值
 */
const divideBy2 = number => {
  let stack = new Stack(),
    rem, // 求模
    binaryString = '' // 输出
  while (number > 0) {
        // 求模 返回0 or 1
    rem = Math.floor(number % 2)
        // 模数推入栈中
    stack.push(rem)
        // 求余数
    number = Math.floor(number / 2)
  }

  while (!stack.isEmpty()) {
        // 每次取出栈顶
    binaryString += stack.pop().toString()
  }
  return binaryString
}

// console.log(divideBy2(10)) // 1010
// console.log(divideBy2(233)) // 11101001
// console.log(divideBy2(1000)) // 1111101000

/**
 * 进制转换算法
 * @param {Number} number 要转换的数字
 * @param {Number} base 转换值
 * @returns {String} 转换后的值
 */
const baseConverter = (number, base) => {
  let stack = new Stack(), rem, baseString = '', 
      digits = '0123456789ABCDEF' // 转换的值从这里面取出

  while (number > 0) {
    rem = Math.floor(number % base)
    stack.push(rem)
    number = Math.floor(number / base)
  }

  while (!stack.isEmpty()) {
    baseString += digits[stack.pop()]
  }

  return baseString
}

console.log(baseConverter(100345, 2)) // 11000011111111001
console.log(baseConverter(100345, 8)) // 303771
console.log(baseConverter(100345, 16)) // 187F9