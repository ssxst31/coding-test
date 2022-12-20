function solution(num, k) {
  let numArr = String(num).split('')

  if (numArr.indexOf(String(k)) > -1) {
    return numArr.indexOf(String(k)) + 1
  }

  return numArr.indexOf(String(k))
}
