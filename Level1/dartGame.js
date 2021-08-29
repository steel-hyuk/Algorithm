function solution(dartResult) {
    let answer = 0;
    const numbers = '0123456789';
    
    // 다트 결과를 기회 별로 나눔 
    let tempArr = [];
    let temp = 0; // slice하기 위한 변수
    for (let i=2; i<dartResult.length; i++) { 
        // 점수를 만났을 때 앞까지의 문자를 잘라냄.
        // idx 0은 무조건 숫자고 앞에 잘라낼 것이 없기 때문에 2부터 시작
        // idx 1의 값은 문자 혹은 첫 점수가 10점일 때 0이기 때문에 2부터 시작
        if (i === dartResult.length-1) { // 마지막 길이에 달했을 때의 조건
            tempArr.push(dartResult.slice(temp));
        }
        if (numbers.includes(dartResult[i])){
            // 0점일 때와 10점일 때를 구분해줌
            if (dartResult[i] ==='0' && dartResult[i-1] === '1'){ // 10점일 때
                // 10점일 때는 1을 만났을 때 이미 앞의 문자를 잘라냈음.
                continue;
            }
            tempArr.push(dartResult.slice(temp, i));
            temp = i;
        }
    }
    
    let secondRoundScore;
    const bonusStr = 'SDT';
    for (let i=0; i<tempArr.length; i++){
        let bonus;
        for (let j=0; j<bonusStr.length; j++){
            // 같지 않을 때 indexOf는 -1이 나오기 때문에 bonus가 어디있는지 구함
            if (tempArr[i].indexOf(bonusStr[j]) > -1){
                bonus = bonusStr[j];
                break;
            }
        } // 보너스와 보너스 인덱스가 구해짐.
        // 더해야할 값을 정함
        let add = Number(tempArr[i].split(bonus)[0]);
        switch (bonus) {
            case 'S':
                break;
            case 'D':
                add = add * add;
                break;
            case 'T':
                add = add * add * add;
                break;
        }
        if (i === 1)
            secondRoundScore = add;
        // 옵션이 있다면 split idx1에 옵션이 기록됨.
        const option = tempArr[i].split(bonus)[1];
        switch (option) {
            case '*':
                if (i === 0)
                    add = add * 2;
                if (i === 1) {
                    add = answer + (add * 2);
                    secondRoundScore = add - answer;
                }
                if (i === 2)
                    add = secondRoundScore + (add * 2);
                break;
            case '#':
                // 빼는 옵션
                add = add * (-1);
                if (i === 1)
                    secondRoundScore = add;
                break;
        }
        answer += add;
    }
    return answer;
}
