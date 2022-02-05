### 문자열 검색

컴퓨터를 하다보면 웹 브라우저든 워드프로세서든 여러 곳에서 문자열을 편하게 찾기 위해 흔히 ctrl + f 단축키로 지정된 '찾기' 혹은 '검색' 기능을 이용한다. 이렇게 텍스트 속에서 특정한 문자열, 패턴을 찾는 것을 **문자열 검색**이라고 한다.

"전체 문자열에서 문자열 찾기" 라는 텍스트에서 "문자열"이라는 말을 찾는다고 생각해보자. 어떤 방법을 이용해서 찾을 수 있을까?

가장 쉬운 방법으로는 하나하나 비교해서 확인하는 방법이 있을 것이다. 

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|문|자|열|
`같니 ?` => `다르다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
||문|자|열|
`같니 ?` => `다르다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|||문|자|열|
`같니 ?` => `다르다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
||||문|자|열|
`같니 ?` => `같다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|||||문|자|열|
`같니 ?` => `다르다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
||||||문|자|열|
`같니 ?` => `다르다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|||||||문|자|열|
`같니 ?` => `다르다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
||||||||문|자|열|
`같니 ?` => `다르다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|||||||||문|자|열|
`같니 ?` => `다르다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
||||||||||문|자|열|
`같니 ?` => `같다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
|||||||||||문|자|열|
`같니 ?` => `다르다 !`

|전|체| |문|자|열|에|서| |문|자|열|찾|기|
|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|:-|
||||||||||||문|자|열|
`같니 ?` => `다르다 !`

위의 과정을 통해 "전체 문자열에서 문자열 찾기" 라는 텍스트에서 "문자열"이라는 말은 총 두 번 나타난다는 것을 찾을 수 있었다. 이 과정에서는 텍스트의 길이가 N, 문자열의 길이가 M이라면 **O(NM)의 시간복잡도**를 가지게 된다.

### KMP 알고리즘

KMP 알고리즘은 문자열 중에 특정 패턴을 찾아내는 문자열 검색 알고리즘으로 커누스, 모리스, 프랫이란 사람이 만든 알고리즘이라 앞 글자를 따서 지어진 이름이다. KMP 알고리즘을 이해하기 위해서 두 가지 알아야 할 것이 있다.

첫 번째는 접두사(prefix)와 접미사(suffix)이다. 다음 예시로 접두사와 접미사가 무엇인지 알아보자.
> `prefix의 접두사`
p
pr
pre
pref
prefi
prefix

>`suffix의 접미사`
x
ix
fix
ffix
uffix
suffix

두 번째로 알아야 할 것은 LPS(Longest Prefix which is also Suffix)가 담긴 실패 함수 pi 배열이다. pi[i]는 주어진 문자열의 0~i 까지의 부분 문자열 중에서 접두사와 접미사가 같아질 수 있는 부분 문자열의 가장 긴 길이이다. 

`문자열 'ABAABAB'의 pi 배열`

|i|부분 문자열|pi[i]|
|:---:|:--:|:---:|
|0|A|0|
|1|AB|0|
|2|<span style="color:red">A</span>B<span style="color:blue">A</span>|1|
|3|<span style="color:red">A</span>BA<span style="color:blue">A</span>|1|
|4|<span style="color:red">AB</span>A<span style="color:blue">AB</span>|2|
|5|<span style="color:red">ABA</span><span style="color:blue">ABA</span>|3|
|6|<span style="color:red">AB</span>AAB<span style="color:blue">AB</span>|2|

>```javascript
// LPS 배열 구하는 함수 (pi 배열)
const getPiArr = (pattern) => {
  let patternLength = pattern.length;
  let table = Array(patternLength);
  table[0] = 0;
  let j = 0;
  for (let i=1; i<patternLength; i++){
    while(j>0 && pattern[i] !== pattern[j]){
      j = table[j-1];
    }
    if (pattern[i] === pattern[j]){
      table[i] = ++j;
    }
    else {
      table[i] = table[j];
    }
  }
  return table;
}
```

맨 위에서 하나하나 비교하며 확인한 O(NM) 시간복잡도의 방법에서 발생하는 효율성의 낭비를 이 두 가지 개념을 이용하면 해결할 수가 있다.

텍스트 "ABCDABCDABEE"에서 "ABCDABE"를 찾는 상황을 가정해보자.

<table>
  <tr>
    <td>인덱스</td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
  </tr>
  <tr>
    <td>텍스트</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>A</td>
    <td>B</td>
    <td>E</td>
    <td>E</td>
  </tr>
   <tr>
    <td>패턴</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>A</td>
    <td>B</td>
    <td>E</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

비교의 첫 단계에서 ABCDAB까지는 같았지만 마지막 E가 C와 달라 패턴이 문자열의 부분과 일치하지 않는다는 것을 알게 되었다. 여기서 얻을 수 있는 정보는 인덱스 6에서 E와 C가 다르다는 것 뿐만 아니라 그 전까지 0~5의 인덱스가 일치한다는 정보도 있다.

<table>
  <tr>
    <td>인덱스</td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
  </tr>
  <tr>
    <td>텍스트</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>A</td>
    <td>B</td>
    <td>E</td>
    <td>E</td>
  </tr>
   <tr>
    <td>패턴</td>
    <td></td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>A</td>
    <td>B</td>
    <td>E</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

이 정보를 바탕으로 하면 위와 같은 과정을 거치지 않고 아래와 같은 과정으로 바로 지나칠 수가 있다. 

<table>
  <tr>
    <td>인덱스</td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
  </tr>
  <tr>
    <td>텍스트</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>A</td>
    <td>B</td>
    <td>E</td>
    <td>E</td>
  </tr>
   <tr>
    <td>패턴</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>A</td>
    <td>B</td>
    <td>E</td>
    <td></td>
  </tr>
</table>

KMP 알고리즘은 이렇게 틀렸다는 정보에만 집중하는 것이 아니라 조금이라도 일치했다는 정보에 무족하여 미리 알아둔 pi배열을 이용해 중간 시도를 건너뛰어 더 효율적이게 검색을 시도하게 한다. 이렇게 하면 **O(N+M)에 근접하는 시간복잡도**를 얻을 수 있다.

>
```javascript
const KMP = (str, pattern) => {
  const table = getPiArr(pattern);
  const sLen = str.length;
  const pLen = pattern.length;
  let j = 0;
  for (let i=0; i<sLen; i++){
    if (j > 0 && str[i] !== pattern[j]) {
      j = table[j-1];
    }
    if (str[i] === pattern[j]) {
      if(j === pLen -1){
        console.log(i-pLen+2,'에서 찾음');
        j = table[j];
      }
      else {
        j++;
      }
    }
  }
}
```