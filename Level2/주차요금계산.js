function solution(fees, records) {
  records = records.map((el) => el.split(' '));
  records = records.sort((a, b) => a[1] - b[1]);
  
  const count = [];
  for (let i=0; i<records.length; i++){
      let idx = count.indexOf(records[i][1]);
      // 차량정보 등록
      if (idx === -1) {
          // 차량넘버
          count.push(records[i][1]);
          // 차량누적주차시간
          count.push(0);
          // 입차시간
          count.push(records[i][0]);
      } else {
          // 출차를 하는지 출차한 차가 또 입차하는지 구분
          if (count[idx+2] !== 'OUT') {
              const outTime = records[i][0].split(':');
              const inTime = count[idx+2].split(':');
              const time = ((Number(outTime[0]) - Number(inTime[0])) * 60 + Number(outTime[1])) - Number(inTime[1]);
              count[idx+1] += time;
              count[idx+2] = 'OUT';
          } else {
              count[idx+2] = records[i][0];
          }
      }
  }
  for (let i=2; i<count.length; i+=3) {
      // 입차만 하고 출차를 하지 않은 경우
      if (count[i] !== 'OUT') {
          const inTime = count[i].split(':');
          const time = ((23 - Number(inTime[0])) * 60 + 59) - Number(inTime[1]);
          count[i-1] += time;
      }
  }
  const answer = [];
  for (let i=1; i<count.length; i+=3) {
      // 기본요금
      if (count[i] < fees[0]) {
          answer.push(fees[1]);
      } else {
          const pay = fees[1] + Math.ceil((count[i]-fees[0]) / fees[2]) * fees[3];
          answer.push(pay);
      }
  }
  return answer;
}