function solution(str1, str2) {
    var answer = '';
    
    let STR1 = str1.split('');
    let STR2 = str2.split('');
    
    for (i=0; i<STR1.length; i++) {
        answer += STR1[i] + STR2[i];
    }
    
    return answer;
}