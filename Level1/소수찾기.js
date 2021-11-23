function solution(n) {
    // 해당 인덱스가 소수인지 아닌지 표시해놓은 배열
    const arr = new Array(n).fill(1)
    arr[0] = 0
  
    // 제곱을 이용하여 제곱근까지만 반복
    for (let i=2; i*i<=n; i++){
        for (let j=i*i; j<=n; j+=i){
            arr[j-1] = 0
        }
    }
    return arr.filter((el) => el === 1).length
}
