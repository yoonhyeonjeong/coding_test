function solution(A,B){
    var answer = 0;

    // 배열 A는 오름차순으로, 배열 B는 내림차순으로 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    A.forEach((a,i)=>{
        var sum = 0
        sum = a * B[i]
        answer += sum
    })
    return answer;
}