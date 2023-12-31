// 4일차

// 약수의 합

/* 
< 문제설명 >
- 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

- 제한사항
  -n은 0 이상 3000이하인 정수입니다.  */

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer += i;
    }
  }
  return answer;
}



// --------------------------------------------------------------



// 나머지가 1이 되는 수 찾기

/* 
< 문제설명 >
- 자연수 n이 매개변수로 주어집니다.
  n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록
  solution 함수를 완성해주세요.
  답이 항상 존재함은 증명될 수 있습니다.
 
- 제한사항
  -3 ≤ n ≤ 1,000,000  */

function solution(n) {
  for (let x = 1; x <= n; x++) {
    if (n % x == 1) {
      return x;
    }
  }
}