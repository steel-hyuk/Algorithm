function solution(s) {
  let count = 0;
  // 올바른 괄호 문자열인지 확인하는 함수
  const check = (str) => {
      const stack = [];
      
      for (let i=0; i<str.length; i++){
          if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
              stack.push(str[i]);
          } else {
              const open = stack.pop();
              // 열린 괄호 없이 닫혔을 경우
              if (open === undefined)
                  return false;
              // 괄호가 짝이 맞지 않을 경우
              switch (str[i]) {
                  case ')':
                      if (open !== '(') return false;
                      break;
                  case '}':
                      if (open !== '{') return false;
                      break;
                  case ']':
                      if (open !== '[') return false;
                      break;
              }
          }
      }
      // 열리기만 했을 경우
      if (stack.length > 0)
          return false;
      return true;
  }
  
  for (let i=0; i<s.length; i++){
      // 회전시키면서 확인
      s = s.slice(1) + s[0];
      if (check(s))
          count++;
  }
  return count;
}