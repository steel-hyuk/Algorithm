function solution(m, musicinfos) {
    const music = musicinfos.map((el) => {
        // 노래정보 구분
        const [startTime, endTime, title, melody] = el.split(',');
        const hour = Number(endTime.split(':')[0]) - Number(startTime.split(':')[0]);
        const minute = Number(endTime.split(':')[1]) - Number(startTime.split(':')[1]);
        let playTime = hour * 60 + minute;
        // #이 포함된 2글자 계이름을 소문자 1글자로 변환
        let mel = melody.split('');
        for (let i=1; i<mel.length; i++){
        if (mel[i] === '#'){
                let low = mel[i-1].toLowerCase();
                mel.splice(i-1, 2, low);
            }
        }
        mel = mel.join('');
        // 재생시간에 맞춰 반복된 문자
        while (mel.length < playTime) {
            mel = mel + mel;
        }
        mel = mel.slice(0, playTime);
        return [playTime, title, mel];
    })
    m = m.split('');
    for (let i=1; i<m.length; i++){
        if (m[i] === '#'){
            let low = m[i-1].toLowerCase();
            m.splice(i-1, 2, low);
        }
    }
    m = m.join('');
    
    let answer = '(None)';
    let time = 0;
    for (let i=0; i<music.length; i++){
        if (music[i][2].includes(m) && music[i][0] > time) {
            answer = music[i][1];
            time = music[i][0];
        }
    }
    return answer;
}