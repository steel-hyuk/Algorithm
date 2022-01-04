function solution(n, left, right) {
  const answer = [];
  
  // (i, j)에 위치하는 숫자는 i, j 중 큰 값 + 1
  // 이차원 배열을 다 만들고 자르면 n의 크기가 10의 7승이기 때문에 복잡도가 너무 커진다
  // 바로 left~right에 맞는 값을 뽑아야 함.
  for (let i=left; i<=right; i++){
      answer.push(Math.max(Math.floor(i/n), i % n) + 1);
  }
  return answer;
}