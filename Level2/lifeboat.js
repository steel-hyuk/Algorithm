function solution(people, limit) {
    // 무게 제한이 있고 무게가 아무리 가벼워도 2명까지밖에 못 탐.
    // 무게순으로 정렬
    people = people.sort((a, b) => a-b);
    // 가장 가벼운 사람의 idx left
    let left = 0;
    // 가장 무거운 사람의 idx right
    let right = people.length - 1;
    let count = 0;
    while (left <= right){
        // 둘의 무게 합이 limit보다 크다면
        if (people[left] + people[right] > limit) {
            // 무게가 많이 나가는 사람만 태운다.
            right--;
        }
        else {
            // 아니라면 두 명을 태운다
            left++;
            right--;
        }
        count++;
    }
    return count;
}
