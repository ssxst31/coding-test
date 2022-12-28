function solution(n) {
  let answer = 0
  
  for (let i = n; i >= 0; i--) {
    if (n % i === 1) {
      answer = i
    }
  }
    
  return answer
}
