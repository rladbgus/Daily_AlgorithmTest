/* 수박수박수박수박수박수?

길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다 */

function solution(n) {
  var answer = '';
  //n을 짝수인지 홀수인지를 판별
  //n이 짝수면 '수'
  //n이 홀수면 '박'
  
  for(let i = 0; i < n; i++ ){
      n % 0 === 0 ? answer += '수' : answer += '박'
  }
  return answer;
}


//출처 프로그래머스 : https://programmers.co.kr/learn/courses/30/lessons/12922