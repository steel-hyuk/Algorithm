function solution(N, stages) {
    const answer = [];
    const failRatio = [];
    // 총 플레이어 수
    let totalPlayer = stages.length;
    // 스테이지 별로 실패율 계산
    for (let i=1; i<=N; i++) {
        // 실패한 사람 수
        const failplayer = stages.filter((el) => el === i).length;
        const ratio = failplayer / totalPlayer;
        answer.push({ i, ratio });
        totalPlayer -= failplayer;
    }
    answer.sort((a, b) => {
        if (a.ratio > b.ratio) return -1;
        else if (a.ratio < b.ratio) return 1;
        else {
            if (a.i > b.i) return 1;
            else return -1;
        }
    })
    return answer.map((el) => el.i);
}
