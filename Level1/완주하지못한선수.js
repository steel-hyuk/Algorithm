function solution(participant, completion) {
  let answer = '';
  // 두 배열의 원소가 하나 빼고 모두 같기 때문에 두 배열을 정렬한다.
  let part = participant.sort();
  let comp = completion.sort();
  // 반복하면서 같은 인덱스의 원소를 비교하고 다르다면 참여 선수배열의 해당 인덱스의 원소값이 완주하지 못한 선수이다.
  for (let i=0; i<part.length; i++) {
      if (part[i] !== comp[i]){
          answer = part[i];
          break;
      }
  }
  return answer;
}