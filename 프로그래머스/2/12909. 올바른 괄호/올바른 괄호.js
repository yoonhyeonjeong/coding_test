function solution(s){
    let count = 0;
    for(let char of s){
        if(char === '('){
            count++;
        }else{
            count--;
        }
        
        if(count < 0){
            return false
        }
    }
    
    // 트루 펄스 판단
    return count === 0

}