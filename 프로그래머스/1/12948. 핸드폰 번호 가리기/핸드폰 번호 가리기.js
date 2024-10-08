function solution(phone_number) {
    let num4 = [...phone_number].slice(-4).join('')
    let answer = '*'.repeat(phone_number.length - 4); 
    
    return answer + num4; 
 
}