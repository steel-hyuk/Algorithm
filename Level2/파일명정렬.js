function solution(files) {
  return files.sort((a, b) => {
      // Head가 어디까지인지 구분
      let aHeadIdx, bHeadIdx;
      for (let i=0; i<a.length; i++){
          if (typeof a[i] === 'number') {
              aHeadIdx = i;
              break;
          }
      }
      for (let i=0; i<b.length; i++){
          if (typeof b[i] === 'number') {
              bHeadIdx = i;
              break;
          }
      }
      // Head를 기준으로 1차 정렬
      const aHead = a.slice(0, aHeadIdx).toLowerCase();
      const bHead = b.slice(0, bHeadIdx).toLowerCase();
      if (aHead !== bHead) {
          if (aHead > bHead) return 1;
          else return -1;
      } else {
          // Head가 같다면 Number가 어디까지인지를 구분
          let aNumberIdx, bNumberIdx;
          for (let i=aHeadIdx; i<a.length; i++){
              if (typeof a[i] !== 'number') {
                  aNumberIdx = i;
                  break;
              }
          }
          for (let i=bHeadIdx; i<b.length; i++){
              if (typeof b[i] !== 'number') {
                  bNumberIdx = i;
                  break;
              }
          }
          // Number를 기준으로 2차 정렬  
          const aNumber = Number(a.slice(aHeadIdx, aNumberIdx));
          const bNumber = Number(b.slice(bHeadIdx, bNumberIdx));
          if (aNumber !== bNumber) {
              if (a < b) return aNumber - bNumber;
              else return bNumber - aNumber;
          } else {
              // Number가 같다면 입력 시에 주어진 순서 유지
              /*
              return 0;
              */
          }
      }
  });
}