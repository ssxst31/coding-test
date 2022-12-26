function solution(absolutes, signs) {
   absolutes = absolutes.map((a, index) => {
    if (signs[index]) {
      return a
    } else {
      return a * -1
    }
  })

  return absolutes.reduce((a, b) => a + b)
}