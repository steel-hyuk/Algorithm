function solution(begin, target, words) {
  // target 값이 없다면 0을 바로 리턴
  if (words.indexOf(target) === -1) 
      return 0;
  let answer = 0;
  const queue = [begin];
  const visited = [];
  // 한 글자만 다른지 확인
  const checkDiff = (word1, word2) => {
      let count = 0;
      for (let i=0; i<word1.length; i++){
          if (word1[i] !== word2[i]) count++;
      }
      if (count === 1) 
          return true;
      return false;
  }
  
  while (queue.length > 0) {
      const word = queue.shift();
      // 타겟을 찾으면 카운트한 수를 리턴
      if (word === target)
          return answer;
      visited.push(word);
      
      // 현재 뽑은 단어와 한 자리만 다른 단어를 골라 queue에 저장
      for (let i=0; i<words.length; i++){
          if (checkDiff(word, words[i]) && !visited.includes(words[i])) {
              queue.push(words[i]);
          }
      }
      if (queue.length === 0) {
          answer++;
      }
  }
  
  return answer;
}