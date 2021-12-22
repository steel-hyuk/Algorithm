function solution(n) {
  // 배열의 틀을 잡아둠
  const snail = new Array(n).fill().map((el, i) => new Array(i + 1));
  // 배열 원소에 들어갈 값
  let count = 0;
  // 배열 인덱스
  let x = -1;
  let y = 0;
  
  // 회전하며 값을 채움
  while (n > 0) {
      for (let i=0; i<n; i++){
          snail[++x][y] = ++count;
      }
      n--;
      for (let i=0; i<n; i++){
          snail[x][++y] = ++count;
      }
      n--;
      for (let i=0; i<n; i++){
          snail[--x][--y] = ++count;
      }
      n--;
  }
  const answer = [];
  for (let i=0; i<snail.length; i++){
      for (let j=0; j<snail[i].length; j++){
          answer.push(snail[i][j]);
      }
  }
  return answer;
}