function solution(n, m) {
    var answer = [];
    let GCD = 1;
    let LCM = 1;
    
    // 최대공약수
    for (let i=2; i<=Math.min(n,m); i++) {
        // Math.min() : 숫자 집합중에서 가장 작은 수를 리턴하는 함수
        // i=2로 지정해주는 이유 : 기본값이 1로 설정됨
        if ((n % i == 0) && (m % i == 0)) {
            GCD = i;
        }
        console.log(GCD);
    }
    
    // 최소공배수
    LCM = (n*m) / GCD;
    console.log(LCM);
    
    answer.push(GCD);
    answer.push(LCM);
    
    return answer;
}