function solution(age) {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
  const ageArr = String(age).split('')
  const numbers = ageArr.map((item) => Number(item))

  let answer = ''
  for (let i = 0; i < ageArr.length; i++) {
    const index = numbers[i]

    answer = answer + alphabets[index]
  }
  return answer
}

