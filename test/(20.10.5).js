/* largestProductOfThree

배열이 주어졌을 때, 이 중 3개의 숫자를 곱하여 나올 수 있는 최대값을 return하는 함수를 작성하세요.

largestProductOfThree([2, 1, 3, 7]) === 42; */

const largestProductOfThree = function(array) {
  //음수 양수 나누기
  //큰수 맨뒤로 가게 정렬
  //양수 : 뒤의 세 숫자 곱하기
  //음수 : 앞으 두 숫자와 맨 뒤숫자 곱하기

  array.sort( (a, b) => {
    return a-b
    });
    
  var prod1 = array[array.length - 3] * array[array.length - 2] * array[array.length - 1];
  var prod2 = array[0] * array[1] * array[array.length - 1];
  
  return Math.max(prod1, prod2);
}
