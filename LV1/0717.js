// 10일차

// 콜라츠 추측

/* 
< 문제설명 >
- 1937년 Collatz란 사람에 의해 제기된 이 추측은,
  주어진 수가 1이 될 때까지 다음 작업을 반복하면,
  모든 수를 1로 만들 수 있다는 추측입니다.
  작업은 다음과 같습니다.

  1-1. 입력된 수가 짝수라면 2로 나눕니다. 
  1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
  2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 

  예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어
  총 8번 만에 1이 됩니다.
  위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요.
  단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

- 제한사항
  - 입력된 수, num은 1 이상 8,000,000 미만인 정수입니다. */

  function solution(num) {
    let answer = 0;

    for (let i = 0; i < 500; i++){
        if (num != 1){
            if (num % 2 == 0){
                num /= 2;
            }else {
                num = num * 3+1;
            }
        }else {
            return answer = i;
        }
    }
    return answer = -1;
}



// --------------------------------------------------------------



// 서울에서 김서방 찾기

/* 
< 문제설명 >
- String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
  "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
  seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

- 제한사항
  - seoul은 길이 1 이상, 1000 이하인 배열입니다.
  - seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
  - "Kim"은 반드시 seoul 안에 포함되어 있습니다. */

  function solution(seoul) {
    var answer = seoul.indexOf("Kim")
    return `김서방은 ${answer}에 있다`
}