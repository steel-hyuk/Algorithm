function solution(n,a,b)
{
		// 첫 매칭된 경기를 카운트하고 시작
    var answer = 1;
		
		// 트리로 생각을 해보면 같은 부모를 가지게 됨 = 매칭됨
    while (parseInt((a-1)/2) !== parseInt((b-1)/2)){
				// 그전까진 모두 이기니까 노드를 줄여나감.
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
				// 라운드 수를 늘려줌.
        answer++;
    }
		
    return answer;
}
