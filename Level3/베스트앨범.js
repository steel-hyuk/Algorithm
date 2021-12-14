function solution(genres, plays) {
  // 장르별 총 재생 횟수
  let count = {};
  for (let i=0; i<genres.length; i++){
      if (count[genres[i]] !== undefined) {
          count[genres[i]] += plays[i];
      } else {
          count[genres[i]] = plays[i];
      }
  }
  // 노래별로 장르, 고유번호, 재생횟수 구분
  genres = genres.map((el, i) => {
      return { genre: el, idx: i, count: plays[i] }
  })
  .sort((a, b) => {
      // 장르가 다르다면 장르별 총 재생횟수로 구분
      if (a.genre !== b.genre)
          return count[b.genre] - count[a.genre];
      // 장르가 같다면 노래별 재생횟수로 구분
      else if (a.count !== b.count)
          return b.count - a.count;
      // 장르가 같고 재생횟수가 같으면 고유번호로 구분
      else
          return a.idx- b.idx;
  })
  const answer = [];
  // 장르별로 2개만을 담기 위한 카운트
  let onetwo = -1;
  let genre = genres[0].genre;
  for (let i=0; i<genres.length; i++){
      if (genres[i].genre === genre){
          onetwo++;
      } else {
          onetwo = 0;
          genre = genres[i].genre;
      }
      if (onetwo > 1) {
          continue;
      }
      answer.push(genres[i].idx);    
  }
  return answer;
}