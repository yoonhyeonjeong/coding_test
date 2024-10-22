function solution(n) {
    var answer = 0
    for(let i = 1; i<= n; i++){
        if(n != i * i){ // 제곱근이 아니면 
            answer = -1
            continue;
        }else{ // 제곱근이면
            answer = (i+1) * (i+1) 
            break;
        }
    }
    return answer
}