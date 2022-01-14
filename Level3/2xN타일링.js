function solution(n) {
  let memo = [1, 2];
  
  for (let i=2; i<n; i++){
      const next = (memo[i-2] + memo[i-1]) % 1000000007;
      memo.push(next);
  }
  return memo[n-1];
}