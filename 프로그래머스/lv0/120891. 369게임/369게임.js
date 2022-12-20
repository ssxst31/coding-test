function solution(order) {
  const orderArr = String(order).split('')

  const orderFiltered = orderArr.filter((a) => ['3', '6', '9'].includes(a))

  return orderFiltered.length
}