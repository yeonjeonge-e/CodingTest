// 2일차

// 각도기

/* 
< 문제설명 >
- 각에서 0도 초과 90도 미만은 예각, 90도는 직각,
  90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다.
  각 angle이 매개변수로 주어질 때
  예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

  예각 : 0 < angle < 90
  직각 : angle = 90
  둔각 : 90 < angle < 180
  평각 : angle = 180

- 제한사항
  0 < angle ≤ 180
  angle은 정수입니다.                          */


function solution(angle) {
  var answer = 0;

  if ((angle > 0) && (angle < 90)) {
    return 1;
  } else if (angle == 90) {
    return 2;
  } else if ((angle > 90) && (angle < 180)) {
    return 3;
  } else {
    return 4;
  }

  return answer;
}



// --------------------------------------------------------------



// 짝수의 합

/* 
< 문제설명 >
- 정수 n이 주어질 때 ,
  n이하의 짝수를 모두 더한 값을 return 하도록
  solution 함수를 작성해주세요.

- 제한사항
  0 < n <= 1000                           */


function solution(n) {
  var hap = 0;

  for (let i = 2; i <= n; i += 2)
    hap += i;

  return hap;
}



// 두번째 방법
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n / 2; i++) {
    answer += 2 * i;
  }

  return answer;
}

// n이하의 짝수는 n/2 이하의 숫자들에 2를 곱해준 것과 같다
// 1부터 시작해서 n/2까지 1씩 증가하는 반복문을 돌려준다
// 반복할때마다 나오는 짝수의 값을 변수에 누적으로 더해준다