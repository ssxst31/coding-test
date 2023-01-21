function solution(numbers) {
  const answer = [];
    
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
    
  const set = new Set(answer);
  const uniqueArr = [...set];

  return uniqueArr.sort((a, b) => a - b);
}
