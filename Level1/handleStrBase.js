function solution(s) {
    if (s.length !== 4 && s.length !== 6)
        return false;
    // e도 숫자로 인식하기 때문에 구분해줌.
    if (s.includes('e')) return false;
    return !isNaN(Number(s));
}
