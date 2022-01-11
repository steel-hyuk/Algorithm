function solution(n, works) {
  // 가장 큰 수를 빼야 총합이 작아진다. => 내림차순으로 정렬
  works = works.sort((a, b) => b - a);
  let max = works[0];
  
  while (n > 0) {
      for (let i=0; i<works.length; i++) {
          if (works[i] === max) {
              works[i]--;
              n--;
          }
          if (n === 0)
              break;
      }
      max--;
      if (max === 0)
          break;
  }
  return works.reduce((pre, cur) => pre + Math.pow(cur, 2), 0);
}