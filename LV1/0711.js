// 자연수 뒤집어 배열로 만들기

/* 
< 문제설명 >
- 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
  예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

- 제한사항
  -n은 10,000,000,000이하인 자연수입니다. */

function solution(n) {
  var answer = [];

  answer = n.toString().split("").reverse().map(Number);

  return answer;
}

// array.toString()
// toString()함수는 배열의 값들을 ','로 연결한 문자열을 리턴한다.

// split(seperator, limit) 인자필수아님
// 특정 구분자를 기준으로 문자열을 분리하여 결과를 배열로 반환

// arr.reverse()
// 배열의 원소의 순서를 반대로 만드는 메서드



// --------------------------------------------------------------



// 정수 제곱근 판별

/* 
< 문제설명 >
- 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

- 제한사항
-n은 1이상, 50000000000000 이하인 양의 정수입니다. */

function solution(n) {
  var answer = 0;
  let x = Math.sqrt(n);


  if (Math.pow(x, 2) == n) {
    return Math.pow((x + 1), 2);
  } else {
    return -1;
  }
  return answer;
}
//  n   x
//  121 11


// 코드 실행 결과는 맞았지만 채점 결과 83.3점으로 탈락함