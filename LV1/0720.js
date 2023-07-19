// 13회차

// 제일 작은 수 제거하기

/* 
< 문제설명 >
- 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수,
  solution을 완성해주세요.
  단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
  예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

- 제한사항
  - arr은 길이 1 이상인 배열입니다.
  - 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다. */

function solution(arr) {
  var answer = [];

  if (arr.length <= 1) {
    return [-1];
  } else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    answer = arr;
  }

  return answer;
}

// 4321 입력 시 제일 작은 수인 1을 제외한 나머지 432가 출력이므로 sort() 해주면 안됨 - 문제 잘 읽기 !

//  1.  spread (...) 연산자
//      spread 연산자 사용하여 배열의 요소들을 분리하면 NaN이 출력되지 않음

//  예시   const arr = [1, 2, 3, 4, 5];

// console.log(arr);                [ 1, 2, 3, 4, 5 ]
// console.log(...arr);             1, 2, 3, 4, 5
// console.log(1, 2, 3, 4, 5);      1, 2, 3, 4, 5

//  예시들을 보면 arr, spread 연산자 사용했을 때는 배열이 아닌 개별적인 요소로 출력됨



//  2. indexOf() 함수
//      (특정 문자 위치 찾는 함수)
//    - string.indexOf(searchValue, position)
//      1)  문자열(string)에서 특정 문자열(searchValue)를 찾고,
//          검색된 문자열이 첫번째로 나타나는 위치 index를 리턴
//      2)  파라미터 - searchValue : 필수입력값, 찾을 문자열
//                  - position : 선택입력값, string에서 searchValue를 찾기 시작할 위치
//                  - 찾는 문자열이 없으면 -1을 리턴한다. 문자열을 찾을 때 대소문자를 구분



//  3. splice() 함수
//      (배열의 원소 추가, 삭제 가능)
//     - array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

//      <파라미터>
//     - start          변경을 시작할 배열의 시작 index
//     - deleteCount    start index부터 deleteCount 갯수만큼 원소 삭제
//                       deleteCount가 입력되지 않으면, start index 이후의 모든 값 삭제됨
//     - items          배열의 start index에 item들을 추가

//      <리턴값>
//     - 삭제된 원소 (element)의 배열을 리턴

//      arr.splice(         arr.indexOf              (Math.min(...arr),     1));
//                 변경 시작할 배열의 시작 index          삭제할 index          갯수

// https://hianna.tistory.com/396   블로그 참고함



// --------------------------------------------------------------



// 가운데 글자 가져오기

/* 
< 문제설명 >
- 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
  단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 
- 제한사항
- s는 길이가 1 이상, 100이하인 스트링입니다.  */

function solution(s) {
  return s.length % 2 === 0 ? s.substr(s.length / 2 - 1, 2) : s.substr(parseInt(s.length / 2), 1);
}

// https://minzz.tistory.com/54     블로그 참고