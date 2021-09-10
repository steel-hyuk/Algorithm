function solution(n) {
    
    const memo = [0, 1];
    
		// 재귀적으로 풀면 함수가 계속 실행돼서 런타임이 길어짐
		// 배열로 기록해가면서 해결함.

    for (let i=2; i<=n; i++){
				// maxInteger를 넘지 않게 나눈 수를 계속 담아줌.
        memo[i] = (memo[i-1] + memo[i-2]) % 1234567;
    }
    return memo[n] % 1234567;
}
