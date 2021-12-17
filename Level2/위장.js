function solution(clothes) {
  var answer = 1;
  const obj = {};
  for (let i=0; i<clothes.length; i++){
      // 키가 있으면 키에 1을 더해줌
      // 없으면 값을 1로 지정하고 1을 더함
      obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }
  for (let key in obj) {
      answer *= obj[key];
  }
  return answer-1;
}