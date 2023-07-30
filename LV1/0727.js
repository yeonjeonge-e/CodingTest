// 18회차

// 최대공약수와 최소공배수

/* 
< 문제설명 >
- 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
  배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
  예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로
  solution(3, 12)는 [3, 12]를 반환해야 합니다.

- 제한사항
  - 두 수는 1이상 1000000이하의 자연수입니다. */

function solution(n, m) {
  var answer = [];
  let GCD = 1;
  let LCM = 1;

  // 최대공약수
  for (let i = 2; i <= Math.min(n, m); i++) {
    // Math.min() : 숫자 집합중에서 가장 작은 수를 리턴하는 함수
    // i=2로 지정해주는 이유 : 기본값이 1로 설정됨
    if ((n % i == 0) && (m % i == 0)) {
      GCD = i;
    }
    console.log(GCD);
  }

  // 최소공배수
  LCM = (n * m) / GCD;
  console.log(LCM);

  answer.push(GCD);
  answer.push(LCM);

  return answer;
}



// --------------------------------------------------------------



// 같은 숫자는 싫어

/* 
< 문제설명 >
- 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
  이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
  단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
  
  예를 들면,

  arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
  arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
  배열 arr에서 연속적으로 나타나는 숫자는 제거하고
  남은 수들을 return 하는 solution 함수를 완성해 주세요.

- 제한사항
- 배열 arr의 크기 : 1,000,000 이하의 자연수
- 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수 */

function solution(arr) {
  var answer = [];

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  // console.log('Hello Javascript')

  for (let i = 0; i <= arr.length; i++) {
    // arr의 원소 수만큼 i를 반복
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
      // i번째 원소가 그다음 원소와 값이 다를 경우에만 answer에 추가
    }
  }

  return answer;
}