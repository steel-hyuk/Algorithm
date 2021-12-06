function solution(s) {
  let count = 0;
  // 올바른 괄호 문자열인지 확인하는 함수
  const check = (str) => {
      // 소,중,대괄호를 확인
      let sCheck = 0;
      let mCheck = 0;
      let lCheck = 0;
      
      for (let i=0; i<str.length; i++){
          // 괄호에 따라 카운트
          switch(str[i]) {
              case '(':
                  sCheck++;
                  break;
              case ')':
                  sCheck--;
                  break;
              case '{':
                  mCheck++;
                  break;
              case '}':
                  mCheck--;
                  break;
              case '[':
                  lCheck++;
                  break;
              case ']':
                  lCheck--;
                  break;
          }
          // 닫히는 괄호가 먼저 나온 경우 올바르지 않음
          if (sCheck < 0 || mCheck < 0 || lCheck < 0)
              return false;
      }
      // 짝이 맞지 않은 경우 올바르지 않음
      if (sCheck !== 0 || mCheck !== 0 || lCheck !== 0)
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