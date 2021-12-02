function solution(n) {
  var answer = 0;
  
  // i는 연속된 자연수의 시작
  for (let i=1; i<=n; i++){
      let addN = i;
      let sum = 0;
      while (true) {
          sum += addN;
          // 연속된 자연수 합이 n과 같아지면 answer을 더하고 종료
          if (sum === n) {
              answer++;
              break;
          } else if (sum > n) {
              // n보다 커지면 종료
              break;
          }
          addN++;
      }
  }
  return answer;
}