function solution(n, words) {
    
    // 나온 단어를 저장할 배열
    let record = [words[0]];
    let lastWord = words[0][words[0].length-1];
    
    for (let i=1; i<words.length; i++){
        // 이미 나온 단어를 입력하거나 끝말이 이어지지 않은 경우
        if (record.includes(words[i]) || words[i][0] !== lastWord){
            let round = parseInt(i / n) + 1;
            let player = (i % n) + 1;
            return [player, round];
        }
        lastWord = words[i][words[i].length-1];
        record.push(words[i]);
    }
    return [0, 0];
}
