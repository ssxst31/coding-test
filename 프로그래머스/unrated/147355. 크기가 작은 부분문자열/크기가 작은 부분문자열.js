function solution(a, b) {
  
  const sliceArray = Array.from(a).map((item, index, arr) => {
    if (index <= arr.length - b.length) {
      return Number([...arr.slice(index, index + b.length)].join(''))
    }
  })
  
  const answer = sliceArray.filter((item) => item <= Number(b)).length
  
  return answer
}