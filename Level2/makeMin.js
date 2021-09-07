function solution(A,B){
    var answer = 0;
    
    // 곱이기 때문에 큰 수 x 큰 수 조합이 생긴다면 전체의 값이 커짐
    // 때문에 A는 오름차순 정렬, B는 내림차순 정렬을 하고
    // 같은 인덱스끼리 곱하여 더해준다.
    A = A.sort((a, b) => a-b);
    B = B.sort((a, b) => b-a);
    
    for (let i=0; i<A.length; i++){
        answer += A[i] * B[i];
    }

    return answer;
}
