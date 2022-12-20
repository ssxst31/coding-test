function solution(food) {
  const foods = food.map((item) => Math.floor(item / 2))
  let leftFoods = ''

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < foods[i]; j++) {
      leftFoods = leftFoods + i
    }
  }

  let rightFoods = leftFoods.split('').reverse().join('')

  return leftFoods + '0' + rightFoods
}
