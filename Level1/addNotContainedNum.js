function solution(numbers) {
    let num = [0,1,2,3,4,5,6,7,8,9];
    let answer = 0;
    for (let i=0; i<numbers.length; i++){
        let idx = num.indexOf(numbers[i]);
        num.splice(idx, 1);
    }
    for (let i=0; i<num.length; i++){
        answer += num[i];
    }
    return answer;
}
