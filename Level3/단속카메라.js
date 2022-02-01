function solution(routes) {
  let answer = 0;
  let start = -30001;
  // 진출 지점을 기준으로 카메라를 두고 진입 지점으로 확인
  routes.sort((a, b) => a[1] - b[1]);
  
  for (let i=0; i<routes.length; i++) {
      if (routes[i][0] > start) {
          answer++;
          start = routes[i][1];
      }
  }
  return answer;
}