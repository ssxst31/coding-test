function solution(num_list, n) {
  const answer = []

  for (let i = 0; i < num_list.length; i++) {
    if (i % n === 0 || i === 0) {
      answer.push(num_list.slice(i, i + n))
    }
  }
  return answer
}
