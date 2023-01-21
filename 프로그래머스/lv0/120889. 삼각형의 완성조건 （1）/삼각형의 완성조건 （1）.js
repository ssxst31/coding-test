function solution(sides) {
  var largestNumber = Math.max(...sides);

  sides.splice(sides.indexOf(largestNumber), 1);

  const otherAddedNumber = sides.reduce((a, b) => a + b);
  
  if (otherAddedNumber > largestNumber) {
    return 1;
  } else {
    return 2;
  }
}
