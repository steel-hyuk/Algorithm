function solution(s) {
    // 결과로 리턴할 값들
    let changeCount = 0;
    let removedZero = 0;
    
    // 이진수로 변환하는 함수
    const change = (str) => {
        let tmp = '';
        
        // 0을 제거하기 위한 반복
        // 1일 경우에 값을 담고 0일 경우에 카운트 증가
        for (let i=0; i<str.length; i++){
            if (str[i] === '1')
                tmp += '1';
            else
                removedZero++;
        }
        // 1의 길이를 이진수로 변환
        let result = tmp.length.toString(2);
        
        // 함수가 한 번 호출될 때마다 카운트 증가
        changeCount++;
        
        return result;
    }
    
    while (s.length > 1){
        s = change(s);
    }
    return [changeCount, removedZero];
}
