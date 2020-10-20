/* 자연수 뒤집어 배열로 만들기

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