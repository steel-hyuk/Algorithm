function solution(maps) {
    
    const MOVES = [
        [0, 1], // 우
        [1, 0], // 하
        [0, -1], // 좌
        [-1, 0] // 상
    ];
    
    const func = (row, col, count) => {
        // 탈출조건
        if (maps[row][col] === 0 || (maps[row][col] !== 1 && maps[row][col] < count))
            return;
        
        maps[row][col] += count;
        
        MOVES.map((move) => func(row + move[0], col + move[1], maps[row][col]));
    }
    func(0, 0, 0);
    
    if (maps[maps.length-1][maps[0].length-1] !== 1)
        return maps[maps.length-1][maps[0].length-1];
    else
        return -1;
}
