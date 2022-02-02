function solution(tickets) {
  const answer = [];
  
  const dfs = (list, path, next) => {
      const newPath = [...path, next];
      // 탈출조건 (tickets가 비워지면 탈출)
      if (list.length === 0) {
          answer.push(newPath);
      } else {
          // 행선지와 이어진 곳 티켓을 모두 연결
          list.map((el, i) => {
              if (el[0] === next) {
                  // 복사한 배열을 쓰지 않으면 다음 i에서 꼬임
                  let copy = list.slice();
                  const to = copy.splice(i, 1)[0][1];
                  dfs(copy, newPath, to);
              }
          });
      }
  }
  // 전체 경로, 순서대로 채워질 배열, 다음 행선지
  dfs(tickets, [], 'ICN');
  // 알파벳 순서로 받음
  return answer.sort()[0];
}