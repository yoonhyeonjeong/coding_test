function solution(x, n) {
    return Array(n).fill().map((_, i) => x * (i + 1));
}