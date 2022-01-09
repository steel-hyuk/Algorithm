function solution(places) {
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  const answer = [];
  
  for (let i=0; i<places.length; i++){
      for (let j=0; j<places[i].length; j++){
          for (let k=2; k<places[i][j].length; k++) {
              if (j === places[i].length-1 && k === places[i][j].length -1) {
                  arr1.push(1);
                  break;
              }
              if (places[i][j][k] !== 'P')
                  continue;
              else {
                  if (places[i][j][k-1] === 'P' ||
                     (places[i][j][k-1] === 'O' && places[i][j][k-2] === 'P')) {
                      arr1.push(0);
                      j = places[i].length-1;
                      break;
                  }
              }
          }
      }
  }
  for (let i=0; i<places.length; i++){
      for (let j=2; j<places[i].length; j++){
          for (let k=0; k<places[i][j].length; k++) {
              if (j === places[i].length-1 && k === places[i][j].length -1) {
                  arr2.push(1);
                  break;
              }
              if (places[i][j][k] !== 'P')
                  continue;
              else {
                  if (places[i][j-1][k] === 'P' ||
                     (places[i][j-1][k] === 'O' && places[i][j-2][k] === 'P')) {
                      arr2.push(0);
                      j = places[i].length-1;
                      break;
                  }
              }
          }
      }
  }
  for (let i=0; i<places.length; i++){
      for (let j=1; j<places[i].length; j++){
          for (let k=1; k<places[i][j].length; k++) {
              if (j === places[i].length-1 && k === places[i][j].length -1) {
                  arr3.push(1);
                  break;
              }
              if (places[i][j][k] !== 'P')
                  continue;
              else {
                  if (places[i][j-1][k-1] === 'P' && 
                      (places[i][j-1][k] === 'O' || places[i][j][k-1]) === 'O') {
                      arr3.push(0);
                      j = places[i].length-1;
                      break;
                  }
              }
          }
      }
  }
  
  for (let i=0; i<arr1.length; i++) {
      if (arr1[i] === 0 || arr2[i] === 0 || arr3[i] === 0) {
          answer.push(0);
      } else {
          answer.push(1);
      }
  }
  return answer;
}