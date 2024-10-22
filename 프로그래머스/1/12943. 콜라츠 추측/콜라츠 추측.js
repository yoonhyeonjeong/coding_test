function solution(num) {
    var count = 0;
    // 주어진수가 1이면 0 반환
    if(num === 1) {
        return 0
    }
    // 1이 될떄까지 반복
    while(num !== 1){
        // 500번 이상이면
        if(count >= 500){
            return -1
        }
        if(num % 2 === 0){
            num = num / 2 
        }else{
            num = (num * 3) + 1
        }
        count++
    }
    return count
    
}
    
