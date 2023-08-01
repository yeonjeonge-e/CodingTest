function solution(n) {
    var answer = 0;
    
    // 방법 1
//    answer = n.toString(3);
    // console.log(answer);         1200
//    let a = answer.split("");
    // console.log(a);              [ '1', '2', '0', '0' ]
//    let b = a.reverse();
    // console.log(b);              [ '0', '0', '2', '1' ]
//    let c = b.join('');
    // console.log(c);              0021
//    let d = parseInt(c,3);
//    console.log(d);
    
    
    // 방법 2
    // let temp = 0;
    // temp = n.toString(3).split("").reverse().join('');
    // console.log(answer);         0021
    // answer = parseInt(temp, 3);
    
    
    // 방법 3
    answer = parseInt(n.toString(3).split("").reverse().join(''),3);
    
    return answer;
}