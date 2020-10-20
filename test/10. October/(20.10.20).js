/* 2. 구명보트

문제 설명
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요. */

function solution(people, limit) {
  var answer = 0;
  var start = 0;
  //오름차순으로 배열 정렬
  let sortPeople = people.sort();
    //최대 몸무게의 사람부터 차례대로 for문 돌리기
  for(let i = sortPeople.length-1; i >= start; i--){
      //최소 + 최대 몸무게의 합이 무게제한보다 큰 경우
      if(sortPeople[start] + sortPeople[i] > limit){
      //최대 몸무게인 사람 먼저 한 보트에 태워 보내기
          answer++;
      //최소 + 최대 몸무게의 합이 무제게한보다 같거나 작은 경우
      }else{
      //두명을 한 보트에 태워 보내기
          answer++;
      //그 다음 몸무게가 작은 사람을 기준으로 삼기
          start++;
      }
  }
  return answer;
}
//위의 코드가 런타임 에러가 떠서 새로운 로직으로!
function solution(people, limit) {
  people.sort((a, b) => {return a-b});
  for(var i=0, j=people.length-1; i < j; j--) {
      if( people[i] + people[j] <= limit ) i++;
  }    
  return people.length-i;
}


/*  1. 자연수 뒤집어 배열로 만들기

문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다. */

function solution(n) {
  //문자열로 변환
  //배열로 쪼개기
  //거꾸로 반전시키기
  let strArrN = n.toString().split('').reverse();
  //배열안 문자열을 숫자로 변환
  let result = strArrN.map((i) => {return Number(i)});
     return result;
 }