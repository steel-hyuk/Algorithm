function solution(skill, skill_trees) {

    const isCorrect = (str, el) => {
        for (let i=0; i<el.length; i++){
            // 선행 스킬트리를 배울 수 있음
            if (str.indexOf(el[i]) === 0){
                str = str.slice(1);
            }
            // 선행 스킬트리 없이 고급 스킬트리가 나옴
            else if (str.indexOf(el[i]) > 0){
                return false;
            }
        }
        return true;
    }
    
    let result = 0;
    
    for (let i=0; i<skill_trees.length; i++){
        if (isCorrect(skill, skill_trees[i]))
            result++;
    }
    return result;
}
