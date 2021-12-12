function solution(n) {
  // 피보나치
  const answer = [0, 1, 2];
  for (let i=3; i<=n; i++){
      answer.push((answer[i-1] + answer[i-2]) % 1234567);
  }
  return answer[n];
}