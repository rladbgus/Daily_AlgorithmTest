/* 1. 내적

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이) */

function solution(a, b) {
    let answer = 0;
    for(let i=0; i<a.length; i++ ){
        answer += a[i] * b[i];
    }
    return answer;
}

/* 2. 음양 더하기

어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요. */

function solution(absolutes, signs) {
    let answer = 0;
    for(let i=0; i<absolutes.length; i++){
        if(signs[i] === false){
            answer += -absolutes[i];
        }else{
            answer += absolutes[i];
        }
    }
    return answer;
}

// 삼항 연산자 사용
function solution(absolutes, signs) {
    let answer = 0;
    for(let i=0; i<absolutes.length; i++){
      signs[i] ? answer += absolutes[i] : answer += -absolutes[i]
    }
    return answer;
}

// 출처 프로그래머스