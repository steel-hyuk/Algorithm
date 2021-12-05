function solution(number, k) {
    // 수를 쌓을 스택
    const stack = [];
    
    for (let i=0; i<number.length; i++){
        const num = number[i];
        
        while(k > 0 && stack[stack.length-1] < num){
            // k번만큼 number에서 수 빼기
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    // 제거해야할 숫자가 k만큼 남았는데 반복이 끝난 경우
    stack.splice(stack.length-k, k);
    return stack.join('');
}