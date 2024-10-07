function solution(my_string, alp) {
    const char = my_string.split('')
    const array = char.map((char)=>{
        return char === alp ? alp.toUpperCase() : char
    })
    return array.join('')
}