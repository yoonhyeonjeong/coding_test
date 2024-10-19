function solution(absolutes, signs) {
    var answer = 123456789;
    return absolutes
        .map((num,index)=> signs[index] ? num : -num)
        .reduce((acc, curr)=> acc + curr, 0)
}