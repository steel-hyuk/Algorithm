function solution(N, road, K) {
  // 거리를 나타낼 배열
  const distance = new Array(N+1).fill(Number.MAX_SAFE_INTEGER);
  // 그래프를 나타낼 배열
  const adj = new Array(N+1).fill().map((el) => el = []);
  
  // adj 배열에 거리를 넣어줌
  road.forEach(([from, to, dist]) => {
      adj[from].push({ to: to, time: dist });
      adj[to].push({ to: from, time: dist });
  });
  
  // 지나가는 경로를 나타낼 배열
  const path = [{ to: 1, time: 0 }]
  distance[1] = 0;
  
  while (path.length > 0) {
      const { to, time } = path.pop();
      
      adj[to].forEach((next) => {
          if (distance[next.to] > distance[to] + next.time) {
              distance[next.to] = distance[to] + next.time;
              path.push(next);
          }
      });
  }
  let answer = 0;
  for (let i=0; i<distance.length; i++){
      if (distance[i] <= K) answer++;
  }
  return answer;
}