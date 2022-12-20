function solution(emergency) {
  const emergencySorted = [...emergency].sort((a, b) => b - a)

  const answer = emergency.map((a) => emergencySorted.indexOf(a) + 1)

  return answer
}
