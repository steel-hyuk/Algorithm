function solution(str)
{
  // 문자열이 한 글자면 바로 리턴
  if (str.length < 1)
    return str.length;
  
  // 회문의 최대길이를 저장할 변수
  let max = 1;
  // 찾은 회문을 기록할 배열
  const isPalindrome = [...Array(str.length)].map(() => Array(str.length).fill(false));

  // 길이가 1인 회문
  for (let i=0; i<str.length; i++) {
    isPalindrome[i][i] = true;
  }

  // 길이가 2인 회문
  for (let i=0; i<str.length; i++) {
    if (str[i] === str[i+1]) {
      isPalindrome[i][i+1] = true;
      max = 2;
    }
  }

  // 길이가 3 이상인 회문
  for (let i=3; i<=str.length; i++){
    // j : 시작값
    for (let j=0; j<=str.length-i; j++){
      // k : 끝값
      let k = j+i-1;
      // 시작값과 끝값이 같은지 확인하고 사이에 끼어있는 문자열이 회문인지 확인한다.
      if (isPalindrome[j+1][k-1] === true && str[j] === str[k]) {
        isPalindrome[j][k] = true;
        max = i;
      }
    }
  }
  return max;
}
