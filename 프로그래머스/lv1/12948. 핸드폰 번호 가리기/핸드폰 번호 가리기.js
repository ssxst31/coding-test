function solution(phone_number) {
  const phoneNumberArr = Array.from(phone_number)

  const answer = phoneNumberArr.map((el, index) => {
    if (index < phoneNumberArr.length - 4) {
      return '*'
    } else {
      return el
    }
  })

  return answer.join('')
}
