function solution(word) {
  const vowel = ['A', 'E', 'I', 'O', 'U'];
  const answer = [];
  
  const func = (cur) => {
      // 탈출 조건
      if (cur.length > 5) {
          return ;
      }
      answer.push(cur);
      // 단어를 추가하며 재귀
      for (let i=0; i<vowel.length; i++){
          func(cur + vowel[i]);
      }
  }
  func('');
  
  return answer.indexOf(word);
}