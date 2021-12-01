function solution(numbers, hand) {
    var answer = '';
    
    // 거리 구하기
    // 좌표로 구하면 대각선의 경우 문제가 생김
    const getDistance = (x, y) => {
        return Math.abs(x[0]-y[0]) + Math.abs(x[1]-y[1]);
    }
    let leftLocation = [3, 0];
    let rightLocation = [3, 2];
    
    for (let i=0; i<numbers.length; i++){
        // 왼쪽 자판일 때
        if (numbers[i] % 3 === 1) {
            leftLocation[1] = 0;
            switch (numbers[i]){
                case 1 :
                    leftLocation[0] = 0;
                    break;
                case 4 :
                    leftLocation[0] = 1;
                    break;
                case 7 :
                    leftLocation[0] = 2;
                    break;
            }
            answer += 'L';
        }
        // 가운데 자판일 때
        else if (numbers[i] % 3 === 2 || numbers[i] === 0) {
            let location;
            switch (numbers[i]){
                case 2 :
                    location = [0, 1];
                    break;
                case 5 :
                    location = [1, 1];
                    break;
                case 8 :
                    location = [2, 1];
                    break;
                case 0 : 
                    location = [3, 1];
                    break;
            }
            let leftDis = getDistance(location, leftLocation);
            let rightDis = getDistance(location, rightLocation);
            
            // 오른쪽이 가까울 때
            if (leftDis > rightDis) {
                rightLocation = location;
                answer += 'R';
            }
            // 왼쪽이 가까울 때
            else if (leftDis < rightDis) {
                leftLocation = location;
                answer += 'L';
            }
            // 거리가 같을 때
            else {
                if (hand === 'left'){
                    leftLocation = location;
                    answer += 'L';
                }
                else if (hand === 'right'){
                    rightLocation = location;
                    answer += 'R';
                }
            }
        }
        // 오른쪽 자판일 때
        else if (numbers[i] % 3 === 0) {
            rightLocation[1] = 2;
            switch (numbers[i]){
                case 3 :
                    rightLocation[0] = 0;
                    break;
                case 6 :
                    rightLocation[0] = 1;
                    break;
                case 9 :
                    rightLocation[0] = 2;
                    break;
            }
            answer += 'R';
        }
    }
    return answer;
}