function solution(arr) {
  // 계속 나누어져야하기 때문에 재귀함수 사용
  const divideFunc = (rowS, rowE, colS, colE) => {
      // 탈출 조건
      if (rowS === rowE && colS === colE) {
          return String(arr[rowS][colS]);
      }
      
      // 영역을 4등분으로 구분하기 위한 기준점
      const halfRow = parseInt((rowS + rowE) / 2);
      const halfCol = parseInt((colS + colE) / 2);
      // 나눠진 각 부분
      const one = divideFunc(rowS, halfRow, colS, halfCol);
      const two = divideFunc(rowS, halfRow, halfCol + 1, colE);
      const three = divideFunc(halfRow + 1, rowE, colS, halfCol);
      const four = divideFunc(halfRow + 1, rowE, halfCol + 1, colE);
      
      const sum = one + two + three + four;
      
      if (sum === '1111') {
          return '1';
      } else if (sum === '0000') {
          return '0';
      } else {
          return sum;
      }
  }
  const tree = divideFunc(0, arr.length-1, 0, arr[0].length-1);
  const answer = [0, 0];
  for (let i=0; i<tree.length; i++){
      if (tree[i] === '0') {
          answer[0]++;
      } else if (tree[i] === '1') {
          answer[1]++;
      }
  }
  return answer;
}