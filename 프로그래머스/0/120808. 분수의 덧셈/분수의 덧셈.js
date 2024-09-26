function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    //1 분자와 분모를 더한다.
    const numer = numer1*denom2 +numer2*denom1;
    const denum = denom1*denom2
    
    let minNum;
    //2 작은 숫자를 구한다.
    if(denum > numer ){
        minNum = numer
    } else{
        minNum = denum
    }
    
    while(true){
        // % 는 나머지로 0이면 나눠 떨어진다.
        if(numer % minNum ===0){
            if(denum % minNum ===0){
                //4 최대공약수를 구한다.
                return [numer/minNum ,denum/minNum]
            }
        }
        //3 작은 숫자를 -1 씩 낮춘다.
        minNum = minNum -1
    }
}