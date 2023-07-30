// 17회차

// 행렬의 덧셈

/* 
< 문제설명 >
- 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
  2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

- 제한사항
  - 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다. */

function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j])
    }
    answer.push(sum)
  }
  return answer;
}



// --------------------------------------------------------------



// 직사각형 별찍기

/* 
< 문제설명 >
- 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
  별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

- 제한사항
- n과 m은 각각 1000 이하인 자연수입니다. */

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  //입력받은 숫자를 'data에 받는다'
  const n = data.split(" ");
  // data(입력받은 숫자)를 배열로 변경
  const a = Number(n[0]), b = Number(n[1]);
  //a는 한줄에대한 별의 갯수, b는 몇줄 출력

  for (let i = 0; i < b; i++) {
    //i을 선언해주고 몇줄(b)만큼 반복
    let str = "";
    //출력할 변수 선언
    for (let j = 0; j < a; j++) {
      // j선언후 별을 한줄에 몇개 찍을지 반복
      str = str + "*";
      //출력할 변수에 별을 담는다
    }
    console.log(str);
    // 출력
  }
});