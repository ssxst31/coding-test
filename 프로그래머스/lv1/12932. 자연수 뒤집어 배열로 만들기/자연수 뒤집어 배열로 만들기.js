function solution(phone_number) {
  const answer = Array.from(String(phone_number))
    .reverse()
    .map((item) => Number(item))

  return answer
}
