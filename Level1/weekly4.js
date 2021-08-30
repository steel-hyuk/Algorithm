function solution(table, languages, preference) {
    var answer = '';
    
    // table을 나눔
    for (let i=0; i<table.length; i++){
        // table[i][5] => 직종, table[i][0] => 1점 ... table[i][4] => 5점
        table[i] = table[i].split(' ').reverse();
    }
    // 선호도 값을 만들 배열 arr
    let arr = [];
    for (let i=0; i<languages.length; i++){
        arr.push([]);
        for (let j=0; j<table.length; j++){
            arr[i].push(table[j].indexOf(languages[i])+1);
        }
        // 각각 항목에 선호도 값을 곱해줌
        arr[i] = arr[i].map(el => el * preference[i]);
    }
    // 언어별 선호도 값의 합을 구할 배열 sum
    let sum = [];
    for (let i=0; i<arr[0].length; i++){
        sum[i] = arr[0][i] + arr[1][i] + arr[2][i];
    }
    let max = Math.max(...sum);
    let maxIdx = sum.indexOf(max);
    
    return table[maxIdx][5];
}

let table = ["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"];
let languages = ["PYTHON", "C++", "SQL"];
let preference = [7, 5, 5];

solution(table, languages, preference);