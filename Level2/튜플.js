function solution(s) {
  let answer = [];
  // s를 길이 순서에 맞는 배열로 변환해줌
  s = s.slice(2, s.length-2);
  s = s.split('},{');
  s = s.map((el) => el.split(','));
  let arr = new Array(s.length).fill().map((el) => new Array());
  for (let i=0; i<s.length; i++){
      arr[s[i].length-1] = s[i];
  }
  
  answer.push(arr[0][0]);
  for (let i=1; i<arr.length; i++){
      let copy = answer.slice();
      for (let j=0; j<arr[i].length; j++){
          let location = copy.indexOf(arr[i][j]);
          if (location !== -1) {
              copy.splice(location, 1);
          } else {
              answer.push(arr[i][j]);
          }
      }
  }
  answer = answer.map((el) => Number(el));
  
  return answer;
}