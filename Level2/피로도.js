function solution(k, dungeons) {
  let answer = 0;
  // 방문했는지 확인하는 배열
  const visited = new Array(dungeons.length).fill(false);
  
  // 깊이우선탐색으로 해결
  const dfs = (fatigue, count) => {
      answer = Math.max(count, answer);
      
      for (let i=0; i<dungeons.length; i++) {
          // 최소 피로도를 충족하는지와 이미 방문했는지 확인
          if (fatigue >= dungeons[i][0] && !visited[i]) {
              visited[i] = 1;
              dfs(fatigue - dungeons[i][1], count+1);
              // 반복한 후에는 새로 확인해야하기 때문에 방문 체크 해제
              visited[i] = 0;
          }
      }
  }
  dfs(k, 0);
  
  return answer;
}