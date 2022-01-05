function solution(cacheSize, cities) {
  let answer = 0;
  // 캐시 값 저장을 위한 배열
  const cache = new Array(cacheSize).fill(0);
  
  // 도시 수만큼 반복하며 캐시 갱신
  for (let i=0; i<cities.length; i++){
      // 대소문자를 구분하지 않기 위함
      const city = cities[i].toLowerCase();
      const idx = cache.indexOf(city);
      // 캐시에 없어서 캐시에 추가해야하는 경우
      if (idx === -1 || cacheSize === 0) {
          cache.shift();
          cache.push(city);
          answer += 5;
      } else {
          // 캐시에 존재할 경우
          // LRU 알고리즘에 맞춰 캐시에 최신 순위를 변동
          cache.splice(idx, 1);
          cache.push(city);
          answer += 1;
      }
  }
  return answer;
}