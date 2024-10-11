function solution(arr, divisor) {
    const filterArray = arr.filter(num => num % divisor === 0).sort((a,b)=>a-b)
    return filterArray.length ? filterArray : [-1]
}