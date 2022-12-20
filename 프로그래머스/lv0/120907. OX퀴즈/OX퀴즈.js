function solution(quiz) {
  return quiz.map((item) => {
    const itemArr = item.split('=')

    if (eval(itemArr[0]) === Number(itemArr[1])) {
      return 'O'
    } else {
      return 'X'
    }
  })
}
