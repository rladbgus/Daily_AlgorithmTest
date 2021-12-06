/**
 * 없는 숫자 더하기

0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
 */

//reduce 사용
function solution(numbers) {
    // 1~10까지 더한 값
    const totalSum = 45;
    let answer = totalSum - numbers.reduce((acc, cur) => acc+cur, 0);
    return answer;
}

// for문
function solution(numbers){
    let answer = 0;
    for (let i=0; i<10; i++){
        if(!numbers.includes(i)){
            answer += i;
        }
    }
    return answer;
}

