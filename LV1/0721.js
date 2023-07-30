// 14회차

// 수박수박수박수박수박수?

/* 
< 문제설명 >
- 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는
  문자열을 리턴하는 함수, solution을 완성하세요.
  예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

- 제한사항
  - n은 길이 10,000이하인 자연수입니다. */

function solution(n) {
  var answer = '';

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      answer += '박';

    } else {
      answer += '수';
    }
    // console.log(answer);
  }

  return answer;
}



// --------------------------------------------------------------



// 내적

/* 
< 문제설명 >
- 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다.
a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다.
(n은 a, b의 길이)

- 제한사항
- a, b의 길이는 1 이상 1,000 이하입니다.
- a, b의 모든 수는 -1,000 이상 1,000 이하입니다. */

function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}