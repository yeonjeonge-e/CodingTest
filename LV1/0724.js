// 15회차

// 약수의 개수와 덧셈

/* 
< 문제설명 >
- 두 정수 left와 right가 매개변수로 주어집니다.
  left부터 right까지의 모든 수들 중에서,
  약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록
  solution 함수를 완성해주세요.

- 제한사항
  - 1 ≤ left ≤ right ≤ 1,000 */

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}



// --------------------------------------------------------------



// 문자열 내림차순으로 배치하기

/* 
< 문제설명 >
- 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수,
solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

- 제한사항
- str은 길이 1 이상인 문자열입니다. */

function solution(s) {
  var answer = '';
  return s.split('').sort().reverse().join('');
}