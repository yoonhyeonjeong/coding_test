function solution(x) {

    const string = String(x)
    let number = 0
    
    for(let i = 0; i < string.length; i++){
        number += Number(string[i])
    }
    return x % number === 0 ? true : false
    
}