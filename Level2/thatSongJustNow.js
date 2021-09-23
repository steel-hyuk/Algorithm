function solution(m, musicinfos) {
    m = m.split('');
    // m 배열에서 # 치환
    for (let i=1; i<m.length; i++){
        if (m[i] === '#'){
                let low = m[i-1].toLowerCase();
                m.splice(i-1, 2, low);
            }
    }
    m = m.join('');
    
    let playList = [];
    
    // musicinfos 배열에 정보를 사용할 수 있게 분리
    for (let i=0; i<musicinfos.length; i++){
        musicinfos[i] = musicinfos[i].split(',');
        // 시간 정보를 사용할 수 있게 분리
        let hour;   // 시 단위가 바뀌었을 때를 대비한 변수
        for (let j=0; j<2; j++){
            musicinfos[i][j] = musicinfos[i][j].split(':');
            // 시작 시간의 시를 담아준다
            if (j===0)
                hour = musicinfos[i][j][0];
            // 종료 시간의 시와 비교해서 시가 바뀌었다면 분에 60을 증가
            if (j===1){
                // 시가 다름
                if (hour !== musicinfos[i][j][0])
                    musicinfos[i][j][1] = Number(musicinfos[i][j][1])+60;
                // 이제 시는 사용하지 않고 분만 사용
                musicinfos[i][j] = Number(musicinfos[i][j][1]);
            }
        }
        // #을 구분하기 위함
        musicinfos[i][3] = musicinfos[i][3].split('');
        for (let j=1; j<musicinfos[i][3].length; j++){
            // #이 있는 경우 소문자로 치환 (ex : C# === c)
            if (musicinfos[i][3][j] === '#'){
                let low = musicinfos[i][3][j-1].toLowerCase();
                musicinfos[i][3].splice(j-1, 2, low);
            }
        }
        musicinfos[i][3] = musicinfos[i][3].join('');
        
        // 노래재생
        let str = '';
        let idx = 0;
        let count = musicinfos[i][1];
        while (count > 0){
            str += musicinfos[i][3][idx++];
            count--;
            if (idx === musicinfos[i][3].length)
                idx = 0;
        }
        // 재생했을 때 기록과 재생시간, 노래제목을 playList에 담아둠.
        playList.push([str, musicinfos[i][1], musicinfos[i][2]]);
    }
    // 일치하는 조건이 없을 때
    let result = '(None)';
    let playTime = 0;
    for (let i=0; i<playList.length; i++){
        // 조건이 일치하면 result를 바꿔줌.
        // 여러 개가 일치할 때 playTime이 높은 것을 리턴해야한다는 조건.
        // >=가 아니라 > 이기 때문에 같더라도 먼저 나온 것이 리턴됨.
        if (playList[i][0].includes(m) && playList[i][1] > playTime){
            result = playList[i][2];
            playTime = playList[i][1];
        }
    }
    return result;
}
