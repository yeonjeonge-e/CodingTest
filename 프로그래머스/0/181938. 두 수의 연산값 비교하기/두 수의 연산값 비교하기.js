function solution(a, b) {
    let AB = Number(String(a) + String(b));
    let C = 2 * a * b;
    
    return AB >= C ? AB : C;
}