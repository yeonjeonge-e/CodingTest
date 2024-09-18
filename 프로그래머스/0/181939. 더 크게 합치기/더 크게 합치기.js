function solution(a, b) {
    let A = a.toString();
    let B = b.toString();
    
    let AB = parseInt(A + B);
    let BA = parseInt(B + A);
    
    if (AB < BA) {
        return BA;
    } else {
        return AB;
    }
}