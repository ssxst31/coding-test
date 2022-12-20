function solution(num) {
  let answer = num
  let i = 0

  const collatz = () => {
    if (answer === 1) {
      return i
    }

    if (i > 500) {
      return -1
    }

    if (answer % 2 === 0) {
      answer = answer / 2
      i++

      return collatz(num)
    } else {
      answer = answer * 3 + 1
      i++

      return collatz(num)
    }
  }

  return collatz()
}
