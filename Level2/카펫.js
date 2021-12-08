function solution(brown, yellow) {
  let centers = [];
  let answer = [];

  function makeCenter(y, i) {
      const root = Math.ceil(Math.sqrt(y));
      if (i === root+1) 
          return;
      if (y % i === 0 && y / i >= i) 
          centers.push([y/i, i]);
      i++;
      makeCenter(y, i);  
  }

  makeCenter(yellow, 1);

  for (let i=0; i<centers.length; i++) {
      if (centers[i][0] * 2 + centers[i][1] * 2 + 4 === brown) 
          answer.push(centers[i][0] + 2, centers[i][1] + 2);
      if(i === centers.length-1 && centers.length === 0) 
          answer.push(0, 0);
  }
  return answer;
}