function solution(s) {
    // 공백을 기준으로 나누어 배열로 만듦.
    s = s.split(' ');
    
    // 숫자로 변환
    for (let el of s){
        el = Number(el);
    }
    
    let max = Math.max(...s);
    let min = Math.min(...s);
    
    return min + ' ' + max;
}
