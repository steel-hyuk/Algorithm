function solution(n, arr1, arr2) {
    var answer = [];
    
    // arr1과 arr2의 길이도 n이기 때문에 n만큼 반복
    for (let i=0; i<n; i++){
        // arr에 담긴 수를 이진수로 변환하고 배열로 바꿈.
        arr1[i] = arr1[i].toString(2).split('');
        // 배열의 자릿수를 n에 맞추기 위해 부족한 공간을 0으로 채움
        while (arr1[i].length !== n){
            arr1[i].unshift('0');
        }
        arr2[i] = arr2[i].toString(2).split('');
        while (arr2[i].length !== n){
            arr2[i].unshift('0');
        }
        // 결과에 넣어줄 변수 str
        let str = '';
        // 반복하면서 한 곳에라도 1이 채워진 곳은 #으로, 아닌 곳은 공백으로 채움
        for (let j=0; j<n; j++){
            if (arr1[i][j] === '1' || arr2[i][j] === '1')
                str += '#';
            else
                str += ' ';
        }
        // str을 결과에 푸시
        answer.push(str);
    }
    return answer;
}
