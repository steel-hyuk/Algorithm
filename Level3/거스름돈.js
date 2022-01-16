function solution(n, money) {
  let check = [];
  // 금액 i를 채울 수 있는 경우의 수 (coins[j]~coins[coins.length-1])
  for (let i=0; i<n+1; i++){
    check.push(Array(money.length).fill(-1));
  }
  const func = (index, remain) => {
    // 남은 게 없는 경우 (가지 수 하나를 늘려줌.)
    if (remain === 0) 
      return 1;
    // 금액이 음수가 안되므로 0으로 리턴한다는 조건.
    // 재귀적으로 remain을 빼주면서 호출하기 때문에 탈출 조건의 의미.
    if (remain < 0)
      return 0;
    // index 역시도 증가하면서 재귀호출하기 때문에 탈출 조건
    if (index >= money.length)
      return 0;
    
    // 모든 경우의 수를 채우기 위해선 한 동전을 계속 쓰든지 다른 동전으로 채우든지 하는 방법
    // 그러기 위해선 두 가지 경우를 모두 호출해준다. 
    check[remain][index] = func(index+1, remain) + func(index, remain-money[index]);
    return check[remain][index];
  }
  return func(0, n);
}