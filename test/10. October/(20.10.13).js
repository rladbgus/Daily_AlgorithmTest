/* 2016년

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요. */

function solution(a, b) {
  //Date 생성자로 날짜 생성
  // ex) Mon Feb 01 2016 00:00:00 GMT+0900 (대한민국 표준시)
  //str으로 변환시키기
  // 앞 3글자 리턴하기
  let newDate = new Date(`2016,${a},${b}`);
  let strDate = newDate.toString().toUpperCase();
  let answer = '';
  return answer += strDate[0] + strDate[1] + strDate[2];
}