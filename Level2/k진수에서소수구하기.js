function solution(n, k) {
  let answer = 0;
  // k진수로 변환된 n
  const strN = n.toString(k);
  // 소수인지 확인하는 함수
  const check = (num) => {
      if (num === 0 || num === 1) 
          return false;
      let sqrt = Math.sqrt(num);
      for (let i=2; i<=sqrt; i++){
          if(num % i === 0)
              return false;
      }
      return true;
  }
  // 0의 위치를 기억하면서 0 사이에 값들이 소수인지 확인
  let zeroIdx = -1;
  for (let i=0; i<strN.length; i++){
      if (strN[i] === '0') {
          let num = Number(strN.slice(zeroIdx + 1, i));
          zeroIdx = i;
          if (num === 1) continue;
          if (check(num) === true) answer++;
      }
  }
  if (strN[strN.length-1] !== '0') {
      let num = Number(strN.slice(zeroIdx + 1));
      if (check(num) === true) answer++;
  }
  return answer;
}