function solution(priorities, location) {
  // 우선순위가 큰 숫자가 가장 먼저 빠져나와야함.
  let max = Math.max(...priorities);
  let answer = 0;
  
  while (true){
      // 우선순위가 출력 순서에 맞는 경우
      if (max === priorities[0]) {
          // 대기목록에서 제거
          priorities.shift();
          // 원하는 출력물 위치 땡김
          location--;
          // 출력물이 몇 번째로 출력되는지 카운트
          answer++;
          // 다음 출력순서를 위한 최댓값 변경
          max = Math.max(...priorities);
          // 출력된다면 반복 종료
          if (location === -1) {
              break;
          }
      } else {
          // 우선순위가 출력순서에 맞지 않을 경우
          // 순서를 맨뒤로 보냄
          let tmp = priorities[0];
          priorities.shift();
          priorities.push(tmp);
          // 위치를 땡기고 맨앞에 있었다면 위치를 맨뒤로 조정
          location--;
          if (location === -1) {
              location = priorities.length - 1;
          }
      }
  }
  return answer;
}