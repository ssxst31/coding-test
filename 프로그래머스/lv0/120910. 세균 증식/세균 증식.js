function solution(n, t) {
  let germAmount = n
  
  for (let i = 0; i < t; i++) {
     germAmount =  germAmount * 2
  }
    
  return  germAmount
}
