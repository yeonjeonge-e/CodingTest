// 12회차

// 핸드폰 번호 가리기

/* 
< 문제설명 >
- 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
  전화번호가 문자열 phone_number로 주어졌을 때,
  전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수,
  solution을 완성해주세요.

- 제한사항
  - phone_number는 길이 4 이상, 20이하인 문자열입니다. */

function solution(phone_number) {
  var answer = '';
  answer = '*'.repeat((phone_number.length) - 4)
    + phone_number.slice(-4);
  return answer;
}



// --------------------------------------------------------------



// 없는 숫자 더하기

/* 
< 문제설명 >
- 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
  numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록
  solution 함수를 완성해주세요.

- 제한사항
- 1 ≤ numbers의 길이 ≤ 9
  - 0 ≤ numbers의 모든 원소 ≤ 9
  - numbers의 모든 원소는 서로 다릅니다.  */

function solution(numbers) {
  var answer = -1;
  let hap = 0;

  for (let i = 0; i <= 9; i++) {
    hap += i;
  }
  // console.log(a_hap);

  let sum = numbers.reduce((a, b) => a + b, 0);  // 배열의 합

  return hap - sum;
}