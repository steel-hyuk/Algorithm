function solution(land) {
  // land와 같은 크기의 0으로 채워진 배열 생성
  const answer = Array.from(Array(land.length), () => new Array(land[0].length).fill(0));
  // 첫 번째 행에 land 값 할당
  for (let i=0; i<land[0].length; i++){
      answer[0][i] = land[0][i];
  }
  // 반복하면서 전에 밟은 행을 제외한 행 중 최대값을 더하면서 진행
  for (let i=1; i<land.length; i++){
      answer[i][0] = land[i][0] + Math.max(answer[i-1][1], answer[i-1][2], answer[i-1][3]);
      answer[i][1] = land[i][1] + Math.max(answer[i-1][0], answer[i-1][2], answer[i-1][3]);
      answer[i][2] = land[i][2] + Math.max(answer[i-1][0], answer[i-1][1], answer[i-1][3]);
      answer[i][3] = land[i][3] + Math.max(answer[i-1][0], answer[i-1][1], answer[i-1][2]);
  }
  // 마지막 행 값 중 최대값 리턴
  return Math.max(...answer[land.length-1]);
}