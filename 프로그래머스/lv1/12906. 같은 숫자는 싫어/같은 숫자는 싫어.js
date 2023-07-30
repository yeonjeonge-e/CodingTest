function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log('Hello Javascript')
    
    for(let i=0; i<=arr.length; i++) {
        // arr의 원소 수만큼 i를 반복
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
            // i번째 원소가 그다음 원소와 값이 다를 경우에만 answer에 추가
        }        
    }
    
    return answer;
}