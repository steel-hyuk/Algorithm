function solution(m, n, board) {
  let answer = 0;
  
  // 2차원 배열로 변경
  board = board.map((el) => el.split(''));
  
  while (true) {
      // 깨질 블록을 기록할 배열
      const breakList = [];
      // 2x2 크기로 깨지기 때문에 i<m-1까지로 설정
      for (let i=0; i<m-1; i++){
          for (let j=0; j<n-1; j++){
              if (board[i][j] !== 'no' && 
                  board[i][j] === board[i][j+1] &&
                  board[i][j] === board[i+1][j] &&
                  board[i][j] === board[i+1][j+1])
                  breakList.push([i, j]);
          }
      }
      // 깨질 블록이 없는 경우 종료
      if (breakList.length === 0) break;
      // 깨질 블록들을 0으로 바꿈
      for (let i=0; i<breakList.length; i++){
          board[breakList[i][0]][breakList[i][1]] = 'x';
          board[breakList[i][0] + 1][breakList[i][1]] = 'x';
          board[breakList[i][0]][breakList[i][1] + 1] = 'x';
          board[breakList[i][0] + 1][breakList[i][1] + 1] = 'x';
      }
      // 0인 블록들을 없애고 카운트, 위에서 내려줌
      for (let i=0; i<n; i++) {
          for (let j=m-1; j>=0; j--) {
              if (board[i][j] === 'no') 
                  break;
              while (board[i][j] === 'x') {
                  for (let k=j; k>0; k--) {
                      board[i][k] = board[i][k-1];
                  }
                  board[i][0] = 'no';
                  answer++;
              }
          }
      }
  }
  return answer;
}