function solution(num_str) {
    var answer = 0
    num_str.split('').forEach(num => answer += Number(num))
    return answer
}