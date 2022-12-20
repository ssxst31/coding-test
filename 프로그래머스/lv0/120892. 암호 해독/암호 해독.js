function solution(cipher, code) {
  const cipherList = Array.from(cipher)
  let answer = ''

  for (let i = 0; i < cipherList.length + 1; i++) {
    if (i % code === 0 && i !== 0) {
      answer = answer + cipherList[i - 1]
    }
  }

  return answer
}