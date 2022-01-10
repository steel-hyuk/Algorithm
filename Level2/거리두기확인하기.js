function solution(places) {
    const pLocation = new Array(5).fill().map((el) => new Array());
    
    // P의 위치를 배열에 담아줌
    for (let i=0; i<places.length; i++) {
        for (let j=0; j<places[i].length; j++){
            for (let k=0; k<places[i][j].length; k++){
                if (places[i][j][k] === 'P') {
                    pLocation[i].push([j, k]);
                }
            }
        }
    }
    
    const checkManhattonDistance = (place, location) => {
        const x = location[0];
        const y = location[1];
        
        if (place[x+1][y] === 'P' || place[x-1][y] === 'P'
            || place[x][y+1] === 'P' || place[x][y-1] === 'P'
            || place[x+1][y+1] === 'P' || place[x+1][y-1] === 'P'
            || place[x-1][y+1] === 'P' || place[x-1][y-1] === 'P'
            || (place[x+1][y] === 'O' && place[x+2][y] === 'P')
            || (place[x-1][y] === 'O' && place[x-2][y] === 'P')
            || (place[x][y+1] === 'O' && place[x][y+2] === 'P')
            || (place[x][y-1] === 'O' && place[x][y-2] === 'P')) {
            return false;
        }
        return true;
    }
    const answer = [];
    for (let i=0; i<pLocation.length; i++){
        for (let j=0; j<pLocation[i].length; j++) {
            if (checkManhattonDistance(places[i], pLocation[i][j]) === false) {
                answer.push(0);
                break;
            }
        }
        if (answer[i] !== 0) {
            answer.push(1);
        }
    }
    return answer;
}