// 5일차

// 평균 구하기

/* 
< 문제설명 >
- 정수를 담고 있는 배열 arr의 평균값을 return하는 함수,
  solution을 완성해보세요.

- 제한사항
  -arr은 길이 1 이상, 100 이하인 배열입니다.
  -arr의 원소는 -10,000 이상 10,000 이하인 정수입니다. */

function solution(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}



// --------------------------------------------------------------



// 짝수와 홀수

/* 
< 문제설명 >
- 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수,
solution을 완성해주세요.

- 제한사항
-num은 int 범위의 정수입니다.
-0은 짝수입니다.  */

function solution(num) {
  var answer = '';

  if (num % 2 == 0) {
    return ("Even");
  } else {
    return ("Odd");
  }

  return answer;
}