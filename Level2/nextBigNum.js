function solution(n) {
		// 이진수로 변환하여 1의 개수를 세는 함수   
    const count = (num) => {
        let bin = num.toString(2);
        let result = 0;
        
        for (let i=0; i<bin.length; i++){
            if (bin[i] === '1'){
                result++;
            }
        }
        return result;
    }
		// n의 이진수일 때 1의 개수를 저장해놓고
    let countN = count(n);
    
		// n을 1씩 증가시키면서 확인한다
    while (true){
        n++;
        if (countN === count(n))
            return n;
    }
}
