function solution(p) {
    // 빈 문자열 리턴
    if (p.length === 0)
        return '';
    
    // 올바른 괄호 문자열인지 확인하는 함수
    const isCorrect = (str) => {
        // 시작과 끝이 제대로 열리거나 닫히지 않는 경우
        if (str[0] === ')' || str[str.length-1] === '(')
            return false;
        
        let OpenCnt = 0;
        let CloseCnt = 0;
        
        for (let i=0; i<str.length; i++){
            if (str[i] === '(')
                OpenCnt++;
            else if (str[i] === ')')
                CloseCnt++;
            
            // 닫히는 괄호가 더 많아지면 false 리턴
            if (CloseCnt > OpenCnt)
                return false;
        }
        // 반복이 끝나고 열리고 닫히는 괄호 개수가 다른 경우
        if (OpenCnt !== CloseCnt)
            return false;
        return true;
    }
    
    // 올바르지 않은 경우에 수정하는 함수
    const change = (str) => {
        if (str.length === 0)
            return '';
        let u = '';
        let v = '';
        let OpenCnt = 0;
        let CloseCnt = 0;
        
        let i=0;
        while (i < str.length){
            u += str[i];
            if (str[i] === '(')
                OpenCnt++;
            else
                CloseCnt++;
            
            i++;
            // 열리고 닫히는 괄호가 같아지면 종료
            // 하나의 균형잡힌 괄호 문자열 u 생성
            if (OpenCnt === CloseCnt)
                break;
        }
        // 나머지 문자를 v로
        v = str.slice(i);
        
        // u가 올바른 괄호 문자열이라면 v에 대해 반복
        if (isCorrect(u)) { 
            return u + change(v);
        }
        // 4
        else {
            let char = '(';
            char += change(v);
            char += ')';
            
            // 첫번째와 마지막 문자 제거하고 괄호 방향 뒤집어 붙이기
            for (let j=1; j<u.length-1; j++){
                if (u[j] === '(')
                    char +=')';
                else if (u[j] === ')')
                    char += '(';
            }
            return char;
        }
    }
    
    if (isCorrect(p))
        return p;
    else
        return change(p);
}