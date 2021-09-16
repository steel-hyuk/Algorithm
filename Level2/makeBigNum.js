function solution(number, k) {
    var answer = '';
    
    // 같은 글자로만 구성되었는지 판단
    const checkOnly = (str) => {
        for (let i=1; i<str.length; i++){
            if (str[0] !== str[i])
                return false;
        }
        return true;
    }
    // 한 글자를 빼서 최대를 만드는 함수
    const findMax = (str, k) => {
        str = str.split('');
        for (let j=0; j<k; j++){
            if (checkOnly(str))
                return str.join('').slice(k-j);
            for (let i=1; i<str.length; i++){
                if (Number(str[i-1]) < Number(str[i])){
                    str.splice(i-1, 1);
                    break;
                }
                if (i === str.length-1)
                    str.splice(i, 1);
            }
        }
        return str.join('');
    }
    
    // k번 반복하면서 반복할 때마다 지웠을 때 가장 큰 수를 유지한다
    return findMax(number, k);
}
