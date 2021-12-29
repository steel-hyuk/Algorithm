function solution(numbers) {
    const answer = [];
    
    numbers.forEach((number) => {
        let str = '0' + number.toString(2);
        
        if (str[str.length-1] === '0') {
            answer.push(number+1);
        }
        
        else {
            for (let i=str.length-1; i>=0; i--){
                if (str[i] === '0') {
                    answer.push(parseInt(str.substring(0, i) + '10' + str.substring(i+2, str.length), 2));
                    break;
                }
            }
        }
    });
    
    /*
    // 배열의 모든 수를 이진수로 변환
    numbers = numbers.map((el) => ('0' + el.toString(2)).split(''));
    
    for (let i=0; i<numbers.length; i++){
        // 맨 뒤 비트가 0인 경우 1로만 바꿔주면 커짐
        if (numbers[i][numbers[i].length-1] === '0') {
            numbers[i].splice(numbers[i].length-1, 1, '1');
        }
        // 맨 뒤 비트가 0이 아닌 경우
        // 뒤에서부터 가장 가까운 01을 10으로 변경해주면 커짐
        else {
            for (let j=numbers.length-1; j>0; j--){
                if (numbers[i][j] === '1' && numbers[i][j-1] === '0') {
                    numbers[i].splice(j-1, 2, '1', '0');
                    break;
                }
            }
        }
        const num = BigInt(parseInt(numbers[i].join(''), 2));
        answer.push(num);
    }
    */
    return answer;
}