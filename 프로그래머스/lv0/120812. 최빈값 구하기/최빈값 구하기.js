function solution(array) {
  if (array.length === 1) return array[0]

  const counts = array.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1
    return pv
  }, {})

  const sortable = []

  for (var name in counts) {
    sortable.push([name, counts[name]])
  }

  const sortableSorted = sortable.sort((a, b) => b[1] - a[1])

  if (sortableSorted.length === 1) return Number(sortableSorted[0][0])

  if (sortableSorted[0][1] === sortableSorted[1][1]) {
    return -1
  } else {
    return Number(sortableSorted[0][0])
  }
}
