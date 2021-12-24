function solution(info, query) {
  const answer = [];
  
  // info의 내용을 사용하기 편하게 구분
  info = info.map((el) => el.split(' '));
  // query 역시 구분
  query = query.map((el) => el.split(' and '));
  for (let i=0; i<query.length; i++){
      query[i][query[i].length-1] = query[i][query[i].length-1].split(' ');
  }
  // query 마다 해가 필요하기 때문에 query의 길이만큼 반복
  for (let i=0; i<query.length; i++){
      // 조건에 충족하는 인원을 카운트
      let count = 0;
      for (let j=0; j<info.length; j++){
          if ((query[i][0] === info[j][0] || query[i][0] === '-') &&
             (query[i][1] === info[j][1] || query[i][1] === '-') &&
             (query[i][2] === info[j][2] || query[i][2] === '-') &&
             (query[i][3][0] === info[j][3] || query[i][3][0] === '-') &&
             (Number(query[i][3][1]) <= Number(info[j][4])))
              count++;
      }
      answer.push(count);
  }
  return answer;
}