function solution(n, t, m, p) {
  let str = '0';
  let answer = '';
  
  // n진수로 변환한 전체 숫자 str
  for (let i=1; i<=t*m; i++){
      str += i.toString(n);
  }
  // 순서에 맞는 문자만 뽑아냄
  for (let i=p-1; i<t*m; i+=m) {
      answer += str[i];
  }
  return answer.toUpperCase();
}