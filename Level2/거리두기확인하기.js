function solution(places) {
    const answer = [];
    
    // 교실 안의 영역인지 확인
    const isVaild = (location) => location >= 0 && location < 5;
    // 사람이 있는 자리인지 확인
    const isPerson = (location) => location === 'P';
    // 빈 테이블인지 확인
    const isTable = (location) => location === 'O';
    
    for (let place of places) {
        // 배열로 구분
        place.map((el, idx) => {
            place[idx] = el.split('');
        });
        let ok = 1;
        for (let i=0; i<5; i++){
            for (let j=0; j<5; j++){
                // 사람이 있는 자리에서 맨해튼 거리를 확인
                if (isPerson(place[i][j])){
                    // 상하좌우를 확인
                    if (isVaild(i+1)) { // 하
                        if (isPerson(place[i+1][j])) {
                            ok = 0;
                            break;
                        }
                        if (isTable(place[i+1][j])) {
                            if (isVaild(i+2) && isPerson(place[i+2][j])){
                                ok = 0;
                                break;
                            }
                            if (isVaild(j+1) && isPerson(place[i+1][j+1])){
                                ok = 0;
                                break;
                            }
                            if (isVaild(j-1) && isPerson(place[i+1][j-1])){
                                ok = 0;
                                break;
                            }
                        }
                    }
                    if (isVaild(i-1)) { // 상
                        if (isPerson(place[i-1][j])){
                            ok = 0;
                            break;   
                        }
                        if (isTable(place[i-1][j])) {
                            if (isVaild(i-2) && isPerson(place[i-2][j])) {
                                ok = 0;
                                break;
                            }
                            if (isVaild(j+1) && isPerson(place[i-1][j+1])){
                                ok = 0;
                                break;
                            }
                            if (isVaild(j-1) && isPerson(place[i-1][j-1])) {
                                ok = 0;
                                break;
                            }
                        }
                    }
                    if (isVaild(j+1)) { // 우
                        if (isPerson(place[i][j+1])){
                            ok = 0;
                            break;
                        }
                        if (isTable(place[i][j+1]) && isVaild(j+2) && isPerson(place[i][j+2])){
                            ok = 0;
                            break;
                        }
                    }
                    if (isVaild(j-1)) { // 좌
                        if (isPerson(place[i][j-1])) {
                            ok = 0;
                            break;
                        }
                        if (isTable(place[i][j-1]) && isVaild(j-2) && isPerson(place[i][j-2])){
                            ok = 0;
                            break;
                        }
                    }               
                }
            }
            if (ok === 0) break;
        }
        answer.push(ok);
    }
    
    return answer;
}