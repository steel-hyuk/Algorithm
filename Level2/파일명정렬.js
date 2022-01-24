function solution(files) {
    return files.sort((a, b) => {
        // ^ 시작부분에 대응
        // \D 숫자 문자가 아닌 문자에 대응 == ^0-9
        // + 앞의 표현식이 1회 이상 연속으로 반복되는 부분과 대응
        // 대소문자 구분 x 소문자로 통일
        const aHead = a.match(/^\D+/)[0].toLowerCase();
        const bHead = b.match(/^\D+/)[0].toLowerCase();
        
        // else로 묶으면 다른 조건에 정렬이 안 되기 때문에 각각 if
        if (aHead < bHead)
            return -1;
        if (aHead > bHead)
            return 1;
        
        // \d 숫자 문자에 대응
        // 0으로 시작하는 부분을 공백으로 대체
        const aNum = a.match(/\d+/)[0].replace(/^0+/, "");
        const bNum = b.match(/\d+/)[0].replace(/^0+/, "");
        
        return aNum - bNum;
    });
}