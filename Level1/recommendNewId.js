function solution(new_id) {
    var answer = '';
    
    // 1단계
    // 소문자로 치환
    new_id = new_id.toLowerCase().split('');
    
    // 2단계
    // 허용 문자 제외하고 제거
    for (let i=0; i<new_id.length; i++){
        let ascii = new_id[i].charCodeAt();
        if ((ascii >= 97 && ascii <= 122) ||
            (ascii >= 48 && ascii <= 57) ||
            ascii === 45 || ascii === 95 || ascii === 46){
            continue;
        }
        new_id.splice(i--, 1);
    }
    // 3단계
    // 이어진 . 제거
    let comma = new_id[0];
    for (let i=1; i<new_id.length; i++){
        if (comma === new_id[i] && comma === '.'){
            new_id.splice(i--, 1);
        }
        else {
            comma = new_id[i];
        }
    }
    
    // 4단계
    // 처음이나 끝의 점 제거
    if (new_id[0] === '.')
        new_id.splice(0, 1);
    if (new_id[new_id.length-1] === '.')
        new_id.splice(new_id.length-1, 1);
    
    // 5단계
    // 빈 문자일 때
    if (new_id.length === 0)
        new_id = 'a';
    
    // 6단계
    // 16자 제한
    if (new_id.length > 15)
        new_id = new_id.slice(0, 15);
    if (new_id[new_id.length-1] === '.')
        new_id.splice(new_id.length-1, 1);
    
    // 7단계
    // 최소 길이 제한
    new_id = new_id.join('');
    let lastChar = new_id[new_id.length-1];
    if (new_id.length < 3){
        while (new_id.length < 3){
            new_id += lastChar;
        }
    }
    return new_id;
}
