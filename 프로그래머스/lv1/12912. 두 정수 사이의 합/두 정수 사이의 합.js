function solution(a, b) {
  let x = a;
  let y = b;
  if (a > b) {
    y = a;
    x = b;
  }

  let answer = 0;
  for (let i = x; i <= y; i++) {
    answer = answer + i;
  }

  return answer;
}
