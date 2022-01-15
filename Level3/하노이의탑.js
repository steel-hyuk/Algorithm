function solution(n) {
  const answer = [];
  
  // 재귀함수를 이용 
  // num개의 원판을 start -> end 하기 위해서는
  // num-1개의 원판을 start -> mid
  // 남은 num번째 원판을 start -> end
  // mid에 쌓인 나머지 원판을 mid -> end
  const hanoi = (num, start, mid, end) => {
      if (num === 1) {
          answer.push([start, end]);
          return ;
      }
      
      hanoi(num-1, start, end, mid);
      answer.push([start, end]);
      hanoi(num-1, mid, start, end);
  }
  hanoi(n, 1, 2, 3);
  return answer;
}