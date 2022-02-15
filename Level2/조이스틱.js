function solution(name) {
    let answer = 0;
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let target = [];
    
    // A가 아닌 알파벳을 변경했을 때의 카운트를 세고 위치를 타겟에 잡아 놓음.
    for (let i=0; i<name.length; i++){
        target.push(alphabet.indexOf(name[i]));
        let changeCnt = (alphabet.indexOf(name[i]) <= 13) ? alphabet.indexOf(name[i]) : 26 - alphabet.indexOf(name[i]);
        answer += changeCnt;
    }
    
    let move = name.length - 1;
    
    for (let i=0; i<target.length; i++){
        if (target[i] === 0) {
            let cnt = 1;
            for (let j=parseInt(i)+1; j<target.length; j++){
                if (target[j] === 0)
                    cnt++;
                else
                    break;
            }
            let leftMove = (i === 0) ? 0 : (parseInt(i) - 1) * 2;
            let left = leftMove + (target.length - cnt - parseInt(i));
            if (move > left)
                move = left;
        }
    }
    return answer + move;
}