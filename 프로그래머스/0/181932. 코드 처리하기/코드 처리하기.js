function solution(code) {
    let mode = 0;
    const ret = code.split('').filter((x, index) => {
        if (x === '1') {
            mode = mode === 0 ? 1 : 0;
            return false;
        }
        
        if (mode) {
            return index % 2 === 1;
        }
        else {
            return index % 2 === 0;
        }
    }).join('');
    
    const answer =  ret.length !== 0 ? ret : "EMPTY";
    return answer
}