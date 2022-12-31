function solution(num_list) {
    const evenNumbers =num_list.filter((item)=>item%2===0).length
    const oddNumbers =num_list.filter((item)=>item%2!==0).length
    return [evenNumbers,oddNumbers];
}