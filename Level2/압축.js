function solution(msg) {
  const answer = [];
  // 사전 (indexOf로 색인 번호 접근 가능)
  const dictionary = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                     'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
                     'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let idx = 0;
  while (idx < msg.length) {
      for (let i=msg.length; i>idx; i--){
          let word = dictionary.indexOf(msg.substring(idx, i));
          // 긴 글자가 사전에 있는지 확인
          // 사전에 없다면 글자수를 줄여서 확인해본다
          if (word === -1) {
              continue;
          } else {
              // 사전에 있다면 결과 배열에 넣고 한 글자 추가된 단어를 사전에 등록
              answer.push(word);
              dictionary.push(msg.substring(idx, i+1));
              idx += i - idx;
          }
      }
  }
  return answer;
}