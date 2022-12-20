function solution(numbers, direction) {
  if (direction === 'right') {
    let numberPoped = numbers.pop()
    numbers.unshift(numberPoped)

    return numbers
  } else {
    const numberShifted = numbers.shift()
    numbers.push(numberShifted)

    return numbers
  }
}
