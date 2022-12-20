function solution(before, after) {
  const beforeArr = before.split('')
  const afterArr = after.split('')

  for (let i = 0; i < before.length; i++) {
    if (afterArr.indexOf(beforeArr[i]) > -1) {
      afterArr.splice(afterArr.indexOf(beforeArr[i]), 1)
    }
  }

  if (afterArr.length === 0) {
    return 1
  }

  return 0
}
