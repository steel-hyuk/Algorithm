function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    // 중복제거
    report = [...new Set(report)];
    // report[i][0] => 신고자 / report[i][1] => 불량이용자
    report = report.map((el) => el.split(' '));
    
    // 신고당한 횟수를 기록하는 배열
    // [0] 신고당한 사람 [1] 신고한 사람 배열
    const count = new Array(id_list.length * 2).fill();
    for (let i=1; i<count.length; i+=2){
        count[i-1] = id_list[(i-1)/2];
        count[i] = new Array();
    }
    for (let i=0; i<report.length; i++){
        const idx = count.indexOf(report[i][1]);
        count[idx+1].push(report[i][0]);
    }
    const callList = [];
    for (let i=1; i<count.length; i+=2) {
        if (count[i].length >= k) {
            callList.push(...count[i]);
        }
    }
    for (let i=0; i<callList.length; i++){
        const idx = id_list.indexOf(callList[i]);
        answer[idx]++;
    }
    
    return answer;
}