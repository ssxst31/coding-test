function solution(my_string, n) {
  const answer = Array.from(my_string).map((item) => {
    const itemArray = []

    for (let i = 0; i < n; i++) {
      itemArray.push(item)
    }

    return itemArray.join('')
  })
  return answer.join('')
}
