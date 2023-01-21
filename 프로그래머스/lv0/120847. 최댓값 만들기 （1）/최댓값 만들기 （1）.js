function solution(numbers) {
  const largestNumber = Math.max(...numbers);

  numbers.splice(numbers.indexOf(largestNumber), 1);
  
  const largestNumbe2 = Math.max(...numbers);

  return largestNumber * largestNumbe2;
}
