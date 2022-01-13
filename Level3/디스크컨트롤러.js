function solution(jobs) {
  let answer = 0;
  jobs = jobs.sort((a, b) => a[0] - b[0]);
  
  const queue = [];
  let time = 0;
  let idx = 0;
  
  while (idx < jobs.length || queue.length > 0) {
      // 우선순위 큐에 넣는 작업
      if (idx < jobs.length && jobs[idx][0] <= time) {
          queue.push(jobs[idx++]);
          // 실행시간이 적어야 평균이 작아지기 때문에 매번 정렬
          queue.sort((a, b) => a[1] - b[1]);
          continue;
      }
      
      if (queue.length === 0) {
          time = jobs[idx][0];
      } else {
          const [s, t] = queue.shift();
          answer += time + t - s;
          time += t;
      }
  }
  
  return parseInt(answer / jobs.length);
}