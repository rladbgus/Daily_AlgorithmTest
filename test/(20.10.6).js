/* mergeSort

"합병 정렬" 알고리즘을 사용해 숫자들의 배열을 정렬하는 함수를 작성하세요.

합병 정렬은 다음과 같은 알고리즘을 사용합니다.

N의 길이를 가진 배열 리스트를 1의 길이를 가진 "부분 리스트"가 N개 모인 것으로 취급합니다.
인접한 부분 리스트들을 정렬하여 2의 길이를 가진 부분 리스트로 병합합니다.
2의 길이를 가진 인접한 부분 리스트들을 4의 길이를 가진 부분 리스트로 합칩니다.
하나의 정렬된 리스트가 될 때까지 위 과정을 반복합니다.
N이 홀수라면, 첫 번째 병합 때 1의 길이를 가진 부분 리스트를 남깁니다.
이 알고리즘은 두 가지 방식으로 구현 가능합니다. 재귀적 접근(위->아래) 그리고 반복적 접근(아래->위) */

const mergeSort = function(array) {

  //하나일때 그냥 return
  if (array.length < 2) {
    return array;
   } 

  //반으로 나눌때의 포인터, 왼쪽,오른쪽
  let pointer = Math.floor(array.length / 2);
  let left = array.slice(0, pointer);
  let right = array.slice(pointer, array.length);
  return merge(mergeSort(left), mergeSort(right)); // 재귀적(반복적)으로 쪼개고 합치기
}

//합치는 함수
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) { // 두 배열의 첫 원소를 비교해 더 작은 수를 결과에 넣기
      result.push(left.shift());  
    } else {
      result.push(right.shift());
    }
  }
  // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣기
  while (left.length) 
  { result.push(left.shift()); } 
  while (right.length) 
  { result.push(right.shift()); }
  return result;
};

