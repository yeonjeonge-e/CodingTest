function solution(my_string, overwrite_string, s) {
    var answer = [];
    
    str = my_string.split("");
    str.splice(s, overwrite_string.length, overwrite_string)
    
    return str.join("");
}