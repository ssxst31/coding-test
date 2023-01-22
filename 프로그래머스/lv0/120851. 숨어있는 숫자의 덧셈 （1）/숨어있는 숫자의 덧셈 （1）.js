function solution(my_string) {
  const answer = Array.from(my_string)
    .map((item) => Number(item))
    .filter((number) => number)
    .reduce((a, b) => a + b);
  return answer;
}
