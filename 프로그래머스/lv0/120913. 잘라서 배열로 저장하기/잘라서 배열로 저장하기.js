function solution(my_str, n) {
  var answer = []

  for (let i = 1; i < my_str.length / n + 1; i++) {
    answer.push(my_str.slice((i - 1) * n, i * n))
  }

  return answer
}
