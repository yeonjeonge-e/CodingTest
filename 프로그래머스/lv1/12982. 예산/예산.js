function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    
//    let a = d.join();
    // console.log(a);              1,3,2,5,4
//    let b = d.sort();
    // console.log(b);              [ 1, 2, 3, 4, 5 ]
    
    d.sort((a, b) => a - b);
    
    for (let i=0; i<d.length; i++) {
        sum += d[i];
        // console.log(sum);        1 3 6 10 15
        if (sum <= budget) {
            answer ++;
        } else {
            return answer;
        }
    }
    return answer;
}


// 질문하기 참고함 !
// 자바스크립트 5, 7번 ~ 16번 오류 발생 하면 ?
// d.sort((a, b) => a - b)를 사용해 보세요.
// d.sort()를 사용하면 [1, 2, 10, 30]가 [1, 10, 2, 30]로 됩니다.