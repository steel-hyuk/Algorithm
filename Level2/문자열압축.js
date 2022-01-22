function solution(s) {
  if (s.length === 1)
      return 1;
  const strings = [];
  let answer = 0;
  
  for (let i=1; i<=parseInt(s.length/2); i++){
      let count = 1;
      let string = '';
      for (let j=0; j<s.length; j+=i) {
          const cur = s.substr(j, i);
          const pre = s.substr(j+i, i);
          if (cur === pre) {
              count++;
          } else {
              string = count > 1 ? string + count + cur : string + cur;
              count = 1;
          }
      }
      strings.push(string.length);
  }
  
  return Math.min(...strings);
}