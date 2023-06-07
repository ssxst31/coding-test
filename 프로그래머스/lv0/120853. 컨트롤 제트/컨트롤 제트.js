function solution(s) {
  const arr = s.split(' ')
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) || Number(arr[i]) === 0) {
      count = count + Number(arr[i])
    } else {
      count = count - Number(arr[i - 1])
    }
  }
  return count
}