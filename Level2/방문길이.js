function solution(dirs) {
  // 좌표 안에서 움직인 수
  let answer = 0;
  // 현재 위치
  let location = [0, 0];
  // 지나온 길
  let road = {};
  
  for (let i=0; i<dirs.length; i++){
      // 객체에 넣기 위해 현재 위치와 옮겨질 위치 표시
      let pre = String(location[0]) + String(location[1]);
      let cur = String(location[0]) + String(location[1]);
      switch (dirs[i]) {
          // URDL에 맞춰 이동
          // 위치는 작은 숫자를 앞에 둬서 겹치는 구간 구분
          case 'U':
              if (location[0] === 5) continue;
              location[0]++;
              cur = String(location[0]) + String(location[1]);
              break;
          case 'R':
              if (location[1] === 5) continue;
              location[1]++;
              cur = String(location[0]) + String(location[1]);
              break;
          case 'D':
              if (location[0] === -5) continue;
              location[0]--;
              pre = String(location[0]) + String(location[1]);
              break;
          case 'L':
              if (location[1] === -5) continue;
              location[1]--;
              pre = String(location[0]) + String(location[1]);
              break;
      }
      road[pre+cur] = 1;
  }

  for (let el in road){
      answer++;
  }
  
  return answer;
}