function solution(numbers) {
  let answer = 0

  for (let i = 0; i < 10; i++) {
    if (numbers.indexOf(i) === -1) {
      answer = answer + i
    }
  }

  return answer
}
