function solution(str1, str2) {
  // 대소문자 구분 x
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  // 두 str의 다중집합을 나타낼 배열
  const arr1 = [];
  const arr2 = [];
  
  for (let i=0; i<str1.length-1; i++){
      // 두 글자씩 끊어 입력하기
      const el = str1.slice(i, i+2);
      // 97 ~ 122 대문자 ASCII 코드 (영문자로 된 글자 쌍만 유효)
      if ((el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) && 
         (el.charCodeAt(1) >= 97 && el.charCodeAt(1) <= 122)) {
          arr1.push(el);
      }
  }
  for (let i=0; i<str2.length-1; i++){
      // 두 글자씩 끊어 입력하기
      const el = str2.slice(i, i+2);
      // 97 ~ 122 대문자 ASCII 코드 (영문자로 된 글자 쌍만 유효)
      if ((el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) && 
         (el.charCodeAt(1) >= 97 && el.charCodeAt(1) <= 122)) {
          arr2.push(el);
      }
  }
  // 집합이 모두 공집합일 경우
  if (arr1.length === 0 && arr2.length === 0) {
      return 65536;
  }
  // 교집합
  const cross = [];
  // 합집합
  const combi = [];
  
  // 반복문을 편의성 있게 하기 위해 길이로 구분
  let longArr, shortArr;
  if (arr1.length > arr2.length) {
      longArr = arr1;
      shortArr = arr2;
  } else {
      longArr = arr2;
      shortArr = arr1;
  }
  while (shortArr.length > 0) {
      const location = longArr.indexOf(shortArr[0]);
      if (location === -1) {
          // 같은 원소가 존재 x (합집합에만 넣음)
          combi.push(shortArr[0]);
          shortArr.splice(0, 1);
      } else {
          // 같은 원소가 존재 (교집합에 넣고 합집합에도 넣음)
          combi.push(shortArr[0]);
          cross.push(shortArr[0]);
          shortArr.splice(0, 1);
          longArr.splice(location, 1);
      }
  }
  // 남은 배열의 원소를 합집합에 넣어줌
  for (let i=0; i<longArr.length; i++){
      combi.push(longArr[i]);
  }
  let percent = cross.length / combi.length;
  
  return Math.floor(percent * 65536);
}