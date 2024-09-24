function solution(arr) {
    let arr_num = arr.sort((a, b) => a-b);
    let mid_arr = Math.floor(arr_num.length / 2);
    return arr_num[mid_arr]
}