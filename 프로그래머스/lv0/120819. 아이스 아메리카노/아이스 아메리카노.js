function solution(money) {
  const amount = ~~(money / 5500)

  const answer = [amount, money - amount * 5500]

  return answer
}