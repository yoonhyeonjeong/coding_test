function solution(numbers) {
    let add = 0
    for(let i = 0; i < 10; i++){
        if(!numbers.includes(i)){
            add += i
        }
    }
    return add
}