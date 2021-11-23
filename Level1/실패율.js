function solution(N, stages) {
    var answer = [];
    
    // 스테이지마다 통과한 인원수
    let pass = Array(N+1).fill(0);
    // 스테이지에 도달한 플레이어 수
    let challenger = Array(N+1).fill(0);
    for (let j=0; j<stages.length; j++){
        for (let k=1; k<=stages[j];k++){
            if (k <= N){
                challenger[k]++;    
            }
            if (k !== stages[j]){
                pass[k]++;    
            }
            
        }
    }
    let failRateArr = [];
    for (let i=1; i<=N; i++){
        failRateArr.push((challenger[i]-pass[i]) / challenger[i]);
    }
    let sortedArr = failRateArr.slice().sort((a,b)=>b-a);
    let check = Array(failRateArr.length).fill(false);
    for (let i=0; i<sortedArr.length; i++){
        for (let j=0; j<failRateArr.length; j++){
            if (sortedArr[i] === failRateArr[j] && check[j]===false){
                answer.push(j+1);
                check[j]=true;
                break;
            }
        }
    }
    
    return answer;
}
