function solution(rows, columns, queries) {
    var answer = [];
    
    // 기본 행렬 만들기
    // 돌리기 위해 temp 행렬도 똑같이 만들어줌
    let count = 0;
    let matrix = [];
    let temp = [];
    for (let i=0; i<rows; i++){
        matrix.push([]);
        temp.push([]);
        for (let j=0; j<columns; j++){
            matrix[i][j] = ++count;
            temp[i][j] = count;
        }
    }
    
    // query 배열만큼 돌리면서 회전시키기
    for (let i=0; i<queries.length; i++){
        let x1 = queries[i][0]-1;
        let y1 = queries[i][1]-1;
        let x2 = queries[i][2]-1;
        let y2 = queries[i][3]-1;
        let min = Number.MAX_SAFE_INTEGER;
        
        // 빙글빙글
        for (let j = y1; j < y2; j++)
        {
            matrix[x1][j+1] = temp[x1][j];
            if (min > temp[x1][j])
                min = temp[x1][j];
        }
        for (let j = x1; j < x2; j++)
        {
            matrix[j+1][y2] = temp[j][y2];
            if (min > temp[j][y2])
                min = temp[j][y2];
        }
        for (let j = y2 - 1; j >= y1; j--)
        {
            matrix[x2][j] = temp[x2][j + 1];
            if (min > temp[x2][j + 1])
                min = temp[x2][j + 1];
        }
        for (let j = x2 - 1; j >= x1; j--)
        {
            matrix[j][y1] = temp[j + 1][y1];
            if (min > temp[j + 1][y1])
                min = temp[j + 1][y1];
        }
        answer.push(min);
        
        // 회전이 끝나면 다음 반복에서 기준이 되는 temp가 현재 matrix와 같아야함.
        for (let j=0; j<rows; j++){
            for (let k=0; k<columns; k++){
                temp[j][k] = matrix[j][k];
            }
        }
    }
    
    return answer;
}
