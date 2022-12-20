function solution(n) {
  let Arr = new Array(n)
    .fill('')
    .map((item, index) => index)
    .join()

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      Arr = Arr.replace(i, '수')
    } else {
      Arr = Arr.replace(i, '박')
    }
  }

  return Arr.replaceAll(',', '')
}
