function solution(n) {
    const str = String(n)
    return Number(Array.from(str).sort((a, b) => b - a).join(''));
}