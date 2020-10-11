/*두 정수 사이의 합

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
-a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
-a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
-a와 b의 대소관계는 정해져있지 않습니다. */

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