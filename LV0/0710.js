// 나머지 구하기

/* 
< 문제설명 >
- 정수 num1, num2가 매개변수로 주어질 때,
  num1를 num2로 나눈 나머지를 return 하도록
  solution 함수를 완성해주세요.

- 제한사항
  -0 < num1 ≤ 100
  -0 < num2 ≤ 100  */

function solution(num1, num2) {
  return num1 % num2;
}



// --------------------------------------------------------------



// 두 수의 나눗셈

/* 
< 문제설명 >
- 정수 num1과 num2가 매개변수로 주어질 때,
  num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록
  soltuion 함수를 완성해주세요.
 
- 제한사항
  -0 < num1 ≤ 100
  -0 < num2 ≤ 100  */

function solution(num1, num2) {
  var answer = 0;

  answer = Math.floor((num1 / num2) * 1000);
  return answer;
}

/*
  두 숫자를 나눈 몫의 정수 값 구하는 것? -- /(몫) 사용

  소수점 올림     Math.ceil(num1 / num2)
  소수점 버림     Math.floor(num1 / num2)
  소수점 반올림   Math.round(num1 / num2)
*/



// --------------------------------------------------------------



// 숫자 비교하기

/* 
< 문제설명 >
- 정수 num1과 num2가 매개변수로 주어집니다.
  두 수가 같으면 1 다르면 -1을 retrun하도록
  solution 함수를 완성해주세요.
 
- 제한사항
  0 ≤ num1 ≤ 10,000
  0 ≤ num2 ≤ 10,000  */

function solution(num1, num2) {
  if (num1 == num2) {
    return 1;
  } else
    return -1;
}



// --------------------------------------------------------------



// 분수의 덧셈

/*
< 문제설명 >
- 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1,
  두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
  두 분수를 더한 값을 기약 분수로 나타냈을 때
  분자와 분모를 순서대로 담은 배열을 return 하도록
  solution 함수를 완성해보세요.

- 제한사항
  0 <numer1, denom1, numer2, denom2 < 1,000  */

// 아직 못풀었음