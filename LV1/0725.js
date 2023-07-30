// 16회차

// 부족한 금액 계산하기

/* 
< 문제설명 >
- 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.
  이 놀이기구의 원래 이용료는 price원 인데, 
  놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다.\
  즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
  놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서
  얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
  단, 금액이 부족하지 않으면 0을 return 하세요.

- 제한사항
  - 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
  - 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
  - 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수 */

function solution(price, money, count) {

  let totalprice = 0;
  for (let i = 1; i <= count; i++) {
    totalprice += price * i;
  }
  if (money < totalprice) {
    totalprice -= money;
  } else {
    return 0;
  }
  return totalprice;
}



// --------------------------------------------------------------



// 문자열 다루기 기본

/* 
< 문제설명 >
- 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.   예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

- 제한사항
- s는 길이 1 이상, 길이 8 이하인 문자열입니다.
- s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다. */

function solution(s) {
  return (s.length == 4 || s.length == 6)
    && (s == parseInt(s));
}