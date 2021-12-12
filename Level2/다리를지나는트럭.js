function solution(bridge_length, weight, truck_weights) {
  // 걸린 시간
  let answer = 0;
  // 다리 위를 나타내는 큐
  const queue = new Array(bridge_length).fill(0);
  // 다리 위 무게
  let kg = 0;
  // 대기 중인 트럭 중 첫 번째를 뽑아서 다리에 올림
  let picked = truck_weights.shift();
  queue.unshift(picked);
  // 다리 길이를 유지하기 위해 0을 빼줌
  queue.pop();
  kg += picked;
  answer++;
  
  while (kg > 0) {
      // 트럭 한 칸씩 이동
      kg -= queue.pop();
      // 다음 차례 트럭
      picked = truck_weights.shift() || 0;
      // 다리 무게 괜찮은지 확인
      if (kg + picked > weight) {
          // 무게가 초과돼서 공백을 만들고 대기열에 다시 넣음
          queue.unshift(0);
          truck_weights.unshift(picked);
      } else {
          // 다리에 올리고 무게 체크
          queue.unshift(picked);
          kg += picked;
      }
      answer++;
  }
  return answer;
}