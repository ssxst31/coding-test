function solution(n) {
  let oddNumbers = []

  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0 && i) {
      oddNumbers.push(i)
    }
  }
	
  return oddNumbers
}