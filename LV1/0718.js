// 11회차

// 나누어 떨어지는 숫자 배열

/* 
< 문제설명 >
- array의 각 element 중 divisor로 나누어 떨어지는 값을
  오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
  divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

- 제한사항
  - arr은 자연수를 담은 배열입니다.
  - 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
  - divisor는 자연수입니다.
  - array는 길이 1 이상인 배열입니다. */

function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
      //          arr의 i번째 인덱스를 answer에 push
    }
    answer.sort((a, b) => a - b);
  }
  // console.log(answer);
  if (answer.length == 0) {
    answer.push(-1);
  }
  return answer;
}



// --------------------------------------------------------------



// 음양 더하기

/* 
< 문제설명 >
- 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
  이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
  실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
 
- 제한사항
- absolutes의 길이는 1 이상 1,000 이하입니다.
  - absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
- signs의 길이는 absolutes의 길이와 같습니다.
  - signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.*/

function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      answer += absolutes[i];
      console.log(answer);
    } else {
      answer -= absolutes[i];
      console.log(answer);
    }
  }
  return answer;
}