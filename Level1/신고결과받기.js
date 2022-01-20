function solution(id_list, report, k) {
  // 중복제거
  report.sort();
  for (let i=1; i<report.length; i++){
      if (report[i-1] === report[i]) {
          report.splice(i, 1);
          i--;
      }
  }
  const answer = new Array(id_list.length).fill(0);
  // report[i][0] => 신고자 / report[i][1] => 불량이용자
  report = report.map((el) => el.split(' '));
  // 신고당한 횟수를 기록하는 객체
  const count = {};
  for (let i=0; i<report.length; i++){
      if (Object.keys(count).includes(report[i][1])){
          count[report[i][1]][0]++;
          count[report[i][1]].push(report[i][0]);
      } else {
          count[report[i][1]] = [1, report[i][0]];
      }
  }
  const callList = [];
  for (let key in count) {
      if (count[key][0] >= k) {
          for (let i=1; i<count[key].length; i++){
              callList.push(count[key][i]);
          }
      }
  }
  for (let i=0; i<callList.length; i++){
      const idx = id_list.indexOf(callList[i]);
      answer[idx]++;
  }
  
  return answer;
}