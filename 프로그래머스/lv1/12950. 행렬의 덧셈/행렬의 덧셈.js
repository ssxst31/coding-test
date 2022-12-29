function solution(arr1, arr2) {
  const arr2Flated = arr2.flat()

  let i = -1
  return arr1.map((arr) =>
    arr.map((item) => {
      i++

      return item + arr2Flated[i]
    })
  )
}
