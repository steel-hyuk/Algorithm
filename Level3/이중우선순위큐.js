function solution(operations) {
  let queue = [];
  operations = operations.map((el) => el.split(' '));
  
  for (let i=0; i<operations.length; i++){
      // insert
      if (operations[i][0] === 'I') {
          queue.push(Number(operations[i][1]));
      } else if (operations[i][0] === 'D') {
          if (operations[i][1] === '1') {
              // 최댓값을 제거                
              const max = Math.max(...queue);
              const idx = queue.indexOf(max);
              if (idx !== -1) {
                  // 최댓값이 존재한다면 제거
                  queue.splice(idx, 1);
              }
          } else if (operations[i][1] === '-1') {
              // 최솟값을 제거
              const min = Math.min(...queue);
              const idx = queue.indexOf(min);
              if (idx !== -1) {
                  // 최솟값이 존재한다면 제거
                  queue.splice(idx, 1);
              }
          }
      }
  }
  if (queue.length === 0)
      return [0, 0];
  return [Math.max(...queue), Math.min(...queue)];
}