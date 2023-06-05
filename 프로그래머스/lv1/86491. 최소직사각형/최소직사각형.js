function solution(sizes) {
  let a
  let b
  for (let i = 0; i < sizes.length; i++) {
    if (i === 0) {
      a = Math.max(...sizes[i])
      b = Math.min(...sizes[i])
    }
    if (Math.max(...sizes[i]) > a) {
      a = Math.max(...sizes[i])
    }
    if (Math.min(...sizes[i]) > b) {
      b = Math.min(...sizes[i])
    }
  }
  return a * b
}
