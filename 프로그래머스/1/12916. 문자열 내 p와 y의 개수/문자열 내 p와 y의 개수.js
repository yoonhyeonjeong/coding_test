function solution(s){
    
    const p = [...s.toLowerCase()].filter(string => string === 'p').length;
    const y = [...s.toLowerCase()].filter(string => string === 'y').length;
    
    return p === y 

}