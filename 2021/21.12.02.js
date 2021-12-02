/* 
두 개 뽑아서 더하기

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요. 
*/

function solution(numbers) {
    let answer = [];
    // 이중 for문으로 각각 더하기
    for(let i = 0; i<numbers.length-1; i++){
      for(let q = i+1; q<numbers.length; q++){
        let sum = numbers[i] + numbers[q]; 
        answer.push(sum);
      }
    }
    // 중복값 제거, 오름차순 정렬
    answer = [...new Set(answer)];
    answer.sort((a,b) => a-b);
    return answer;
}