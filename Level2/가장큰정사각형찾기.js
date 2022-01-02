function solution(board) {
  let max = 0;
  // 보드의 크기가 작은 경우 DP 해결 안 됨.
  if (board.length < 2 && board[0][0] === 1)
      return 1;
  for (let i=1; i<board.length; i++){
      for (let j=1; j<board[i].length; j++){
          // 해당 자리가 0보다 클 때 왼쪽, 위, 대각선의 값 중 최솟값을 더해줌
          // 누적되며 변의 길이가 정해짐
          if (board[i][j] > 0){
              board[i][j] += Math.min(board[i-1][j-1], board[i][j-1], board[i-1][j]);
          }
          if (board[i][j] > max)
              max = board[i][j];
      }
  }
  return max * max;
}