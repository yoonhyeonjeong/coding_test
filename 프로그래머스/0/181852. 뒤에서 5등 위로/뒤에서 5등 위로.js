function solution(num_list) {
    var length = num_list.length
    return num_list.sort((a,b)=>a-b).slice(5,length)
}