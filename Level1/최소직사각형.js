function solution(sizes) {
  // 가로 세로 방향 전환이 가능하기 때문에 큰 사이즈, 작은 사이즈 분리
  let big = 0;
  let small = 0;
  for (let i=0; i<sizes.length; i++){
      if (sizes[i][0] > sizes[i][1]){
          let tmp = sizes[i][0];
          sizes[i][0] = sizes[i][1];
          sizes[i][1] = tmp;
      }
      if (big < sizes[i][0]) big = sizes[i][0];
      if (small < sizes[i][1]) small = sizes[i][1];
  }
  return big * small;
}