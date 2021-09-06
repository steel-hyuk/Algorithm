function solution(arr) {
    const gcd = (m, n) => {
        if (m % n === 0) 
            return n;
        return gcd(n, m % n);
    }
    const lcm = (m, n) => {
        n = n || 1;
        return m * n / gcd(m, n);
    }
    let answer = lcm(arr[0], arr[1]);
    for (let i=2; i<arr.length; i++){
        answer = lcm(answer, arr[i]);
    }
    return answer;
}
