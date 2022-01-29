function solution(n, edge) {
  let answer = 0;
  // 방문여부 확인 (0 노드가 없기 때문에 편의상 n+1로 설정)
  const visited = new Array(n+1).fill(false);
  // 1노드와의 거리
  const distance = new Array(n+1).fill(0);
  const queue = [1];
  visited[1] = true;
  
  while (queue.length) {
      const next = queue.shift();
      const dist = distance[next] + 1;
      
      for (let i=0; i<edge.length; i++) {
          // 직전 정점과 연결된 정점을 연결
          if (edge[i][0] === next && !visited[edge[i][1]]) {
              queue.push(edge[i][1]);
              visited[edge[i][1]] = true;
              distance[edge[i][1]] = dist;
          } else if (edge[i][1] === next && !visited[edge[i][0]]) {
              queue.push(edge[i][0]);
              visited[edge[i][0]] = true;
              distance[edge[i][0]] = dist;
          }
      }
  }
  // 내림차순으로 정렬
  distance.sort((a, b) => b - a);
  let max = distance[0];
  // 첫번째 요소(가장 큰 값) 과 비교하며 같지 않다면 인덱스를 리턴
  for (let i=1; i<distance.length; i++){
      if (distance[i] !== max) {
          return i;
      }
  }
}