function solution(numbers) {
  let answer = 0;
  
  // 순열 알고리즘
    // 하나를 선택하고 나머지 중 조합을 구한다
  const getPermutations = (arr, num) => {
      const result = [];
      
      // 1개씩 선택할 때 바로 모든 배열의 원소 리턴
      if (num === 1)
          return arr.map((value) => [value]);
      
      arr.forEach((fixed, index, origin) => {
          const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
          const permutations = getPermutations(rest, num -1);
          const attached = permutations.map((permutation) => [fixed, ...permutation]);
          result.push(...attached);
      });
      return result;
  }
  
  // 수를 배열에 담는다
  numbers = numbers.split('');
  let arr = [];
  for (let i=0; i<numbers.length; i++){
      arr.push(...getPermutations(numbers, i+1).map((el) => Number(el.join(''))));
  }
  // 중복을 제거해서 배열로 만듦
  let numArr = [...new Set(arr)];
  
  for (let i=0; i<numArr.length; i++){
      if (primeNumber(numArr[i])) {
          answer++;
      }
  }
                                     
  return answer;
}

// 소수인지 확인하는 함수
function primeNumber(num){
  if (num === 0 || num === 1) return false;
  
  let sqrt = Math.sqrt(num);
  for (let i=2; i<=sqrt; i++){
      if(num % i === 0)
          return false;
  }
  return true;
}