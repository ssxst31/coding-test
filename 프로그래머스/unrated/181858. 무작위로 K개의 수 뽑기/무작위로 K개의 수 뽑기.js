function solution(arr, k) {
  const answer = []
  let num

  for (let i = 0; i < arr.length; i++) {
    if (answer.length === k) return answer

    if (!answer.some((item)=>item===arr[i])) {
      answer.push(arr[i])
    }
    num = arr[i]
  }

  if (answer.length < k) return answer.concat(new Array(k - answer.length).fill(-1))

  return answer
}
