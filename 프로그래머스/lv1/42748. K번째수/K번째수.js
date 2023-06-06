function solution(array, commands) {
  const dsa = commands.map((el)=>{
  return array.slice(el[0]-1,el[1]).sort((a,b)=>a-b)[el[2]-1]
  })
  

  return dsa
}
