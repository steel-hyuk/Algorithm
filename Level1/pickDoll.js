function solution(board, moves) {
    var answer = 0;
    
    // 뽑는 인형을 담을 배열
    let stack = [];
    
    // 집게를 내릴 동작만큼 반복
    for (let i=0; i<moves.length; i++){
        // 뽑은 인형
        let pick = moves[i]-1;
        // 인형뽑기기계 안에 집게 넣기
        for (let j=0; j<board.length; j++){
            // 인형이 뽑힌 경우
            if (board[j][pick] !== 0){
                // 같은 인형 뽑아서 터트린 경우
                if (stack[stack.length-1] === board[j][pick]){
                    stack.pop();
                    answer += 2;
                }
                else {
                    stack.push(board[j][pick]);
                }
                board[j][pick] = 0;
                break;
            }
        }
    }
    return answer;
}
