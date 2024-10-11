function solution(n) {
    let result = []
    let index = 1;
    let answer = 0
    while (index <= n) {
      if (n % index === 0) result.push(index)
      index++
    }
    
    return result.reduce((acc,cur)=> acc+cur ,0)
}