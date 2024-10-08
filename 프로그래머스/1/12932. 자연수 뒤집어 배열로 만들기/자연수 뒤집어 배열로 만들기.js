function solution(n) {
    const str = String(n);
    return Array.from(str).reverse().map(Number)
}