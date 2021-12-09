function solution(s){
    const stack = [];
    // 열리는 괄호와 닫히는 괄호
    const open = '(';
    const close = ')';
    
    for (let i=0; i<s.length; i++){
        // 괄호가 열렸을 때 스택에 담아준다.
        if (s[i]===open){
            stack.push(s[i]);
        }
        // 닫히는 괄호를 만났을 때 스택에 닫을 짝이 있는지 확인한다
        else if (s[i] === close) {
            const check = stack.pop();
            // 짝이 맞지 않거나 맨 처음에 close가 나오면 false
            if (check !== open || check === undefined){
                return false;
            }
        }
    }
    // 짝이 다 맞은채로 반복이 끝나더라도 개수가 맞지 않는다면 열린게 더 많음
    return stack.length === 0;
}
