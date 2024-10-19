function solution(a, b) {
    var answer = 0;
    let min = Math.min(a, b);  // 작은 값
    let max = Math.max(a, b);  // 큰값
    
    for(let i = min; min <= max; min++){
        answer += min
    }
    return answer;
}