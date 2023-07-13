// 문자열을 정수로 바꾸기

/* 
< 문제설명 >
- 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

- 제한사항
  - s의 길이는 1 이상 5이하입니다.
  - s의 맨앞에는 부호(+, -)가 올 수 있습니다.
  - s는 부호와 숫자로만 이루어져있습니다.
  - s는 "0"으로 시작하지 않습니다. */

  function solution(s) {
    let str = parseInt(s);
    return str;
}



  // --------------------------------------------------------------
  
  
  
  // 정수 내림차순으로 배치하기
  
  /* 
  < 문제설명 >
  - 함수 solution은 정수 n을 매개변수로 입력받습니다.
    n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
    예를들어 n이 118372면 873211을 리턴하면 됩니다.
  
  - 제한사항
  - n은 1이상 8000000000 이하인 자연수입니다. */
  
function solution(n) {
    
    let answer = n.toString().split('').sort().reverse().join('');
    
    return parseInt(answer);
}

// --------------------------------------------------------------

// function solution(n) {
    
//     // let answer = 0;
    
//     let a = n.toString();
//         //  118372  (문자열)
//     let b = a.split('');
//         //  [ '1', '1', '8', '3', '7', '2' ]
//     let c = b.sort();
//         //  [ '1', '1', '2', '3', '7', '8' ]
//     let d = c.reverse();
//         //  [ '8', '7', '3', '2', '1', '1' ]
//     let answer = d.join('');
//         //  873211
//     return parseInt(answer);
//     // console.log(answer);
// }
// solution(118372);


// array.toString()
// 배열을 포함하는 문자열 반환

// split(seperator, limit) 인자필수아님
// 특정 구분자를 기준으로 문자열을 분리하여 결과를 배열로 반환

// arr.reverse()
// 배열의 원소의 순서를 반대로 만드는 메서드

// arr.join() 
// 배열의 모든 요소를 연결해 하나의 문자열로 만듦
//  - 괄호에 아무것도 넣지 않으면 쉼표(,)로 구분됨
//  - 괄호에 ('')를 넣으면 구분없이 이어서 출력

// -------------------------------------

// 스터디 서동현님이 알려주신 방법

// function solution(n){
//   var arr = Array.from(n.toString()).sort().reverse();
//   console.log(arr);
// }
// solution(115489);

// 
// function solution(n){
//   var arr = Array.from(n.toString()).sort().reverse();
//   var answer = arr.toString();
//   console.log(answer)
// }
// solution(115489);