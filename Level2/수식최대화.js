function solution(expression) {
  // 6가지 우선순위
  const priority = [['+', '*', '-'], ['+', '-', '*'], ['*', '+', '-'], ['*', '-', '+'], ['-', '*', '+'], ['-', '+', '*']];
  // 우선순위 각각에 맞는 값을 담아둘 배열
  const result = [];
  // 표현식의 피연산자들을 순서대로 모아둘 배열
  const expNum = [];
  // 표현식의 연산자들을 순서대로 모아둘 배열
  const expOpe = [];
  // 연산
  const calculation = (a, b, ope) => {
      if (ope === '+') {
          return a + b;
      } else if (ope === '*') {
          return a * b;
      } else if (ope === '-') {
          return a - b;
      }
  }
  
  let idx = -1;
  for (let i=1; i<expression.length; i++){
      // 연산자와 피연산자를 구분하여 배열에 담아줌
      if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
          expOpe.push(expression[i]);
          expNum.push(Number(expression.slice(idx + 1, i)));
          idx = i;
      }
      if (i === expression.length - 1) {
          expNum.push(expression.slice(idx + 1));
      }
  }
  for (let i=0; i<priority.length; i++) {
      // 여러 개의 값을 만들기 위해 배열을 복사해서 사용
      const numArr = expNum.slice();
      const opeArr = expOpe.slice();
      
      for (let j=0; j<priority[i].length; j++) {
          for (let k=0; k<opeArr.length; k++) {
              if (opeArr[k] === priority[i][j]) {
                  const cal = calculation(numArr[k], numArr[k+1], opeArr[k]);
                  opeArr.splice(i, 1);
                  numArr.splice(i, 2, cal);
                  k--;
              }
          }
      }
      result.push(Math.abs(numArr[0]));
  }
  return Math.max(...result);
}