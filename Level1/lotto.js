function solution(lottos, win_nums) {
    var answer = [];
    
    // 0이 다 다르다 => 최악의 경우
    // 0이 다 같다 => 최선의 경우
    // 0의 개수를 세고 0이 아닌 수 중 일치하는 것의 개수에 더하여 판단.
    
    let countZero = 0;
    let countSame = 7;
    for (let i=0; i<lottos.length; i++){
        if (lottos[i] === 0){
            countZero++;
        }
        else if (win_nums.indexOf(lottos[i]) !== -1) {
            countSame--;
        }
    }
    if (countZero === 6){
        return [1, 6];
    }
    if (countZero === 0 && countSame === 7){
        return [6, 6];
    }
    return [countSame-countZero, countSame];
}
