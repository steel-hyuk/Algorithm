function solution(n, s) {
  const answer = [];
  // 만들 수 없는 집합
  if (n > s) {
      answer.push(-1);
  } else {
      // 각 원소가 최솟값을 가져야 곱이 커짐
      // 1 x 7 || 2 x 6 < 4 x 4
      // 최소가 되게 고르게 나눈 정수
      const dividedN = Math.floor(s / n);
      // 칸을 채운 나머지
      let rest = s - (dividedN * n);
      for (let i=0; i<n; i++){
          answer.push(dividedN);
      }
      // 정수를 나누고 남은 수만큼 뒤에서부터 채워줌
      for (let i=n-1; i>n-rest-1; i--) {
          answer[i]++;
      }
  }
  return answer;
}