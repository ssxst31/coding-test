function solution(number) {
  const answer = []

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let b = i + 2; b < number.length; b++) {
        if (j !== b && j < b) {
          answer.push(number[i] + number[j] + number[b])
        }
      }
    }
  }
  return answer.filter((item) => item === 0).length
}
