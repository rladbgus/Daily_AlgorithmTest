/* 두 정수 사이의 합

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다. */


function solution(a, b) {
  var answer = 0;
  //1. a <= b
  //2. a > b
  //3. a === b
  if(a < b) {
      for(let i = a; i <= b; i++ ){
      answer += i;
  }
            }
  else if(a > b){
      // 새로운변수로 두 수를 바꿔주기
      let c = b;
      let d = a;
      for(let i = c; i <= d; i++ ){
          answer += i;
      }
  }
      else{
          answer = a;
      }
  return answer;
}