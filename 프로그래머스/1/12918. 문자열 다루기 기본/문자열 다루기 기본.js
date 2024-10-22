function solution(s) {
    // 길이가 4 또는 6이고, 숫자만 포함된 경우
    return (s.length === 4 || s.length === 6) && /^\d+$/.test(s);
}