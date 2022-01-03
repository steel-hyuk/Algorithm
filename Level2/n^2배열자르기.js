function solution(n, left, right) {
  const answer = [];
  
  // (i, j)에 위치하는 숫자는 i, j 중 큰 값 + 1
  for (let i=0; i<n; i++){
      for (let j=0; j<n; j++){
          answer.push(Math.max(i, j) + 1);
      }
  }
  return answer.slice(left, right+1);
}