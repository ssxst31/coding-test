function solution(i, j, k) {
  let amount = 0

  for (let number = i; number <= j; number++) {
    amount =
      amount +
      String(number)
        .split('')
        .filter((i) => i === String(k)).length
  }
  return amount
}
