function solution(my_string) {
  const answer = Array.from(my_string).filter((item) => !['a', 'e', 'i', 'o', 'u'].includes(item))

  return answer.join('')
}
