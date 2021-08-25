function solution(s) {
    // 문자열을 검사하기 위한 배열
    const str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    // 문자가 있는지 검사
    for (let i=0; i<str.length; i++){
        // 해당 문자로 s를 나누어 arr에 저장
        let arr = s.split(str[i]);
        
        // 문자가 있어서 나누어졌다면 숫자로 바꾸어 합침
        if (arr.length > 1){
            s = arr.join(i);
        }
    }
    return Number(s);
}
