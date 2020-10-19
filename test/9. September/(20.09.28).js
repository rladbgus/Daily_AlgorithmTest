/* binarySearchArray

정렬된 배열이 주어졌을때, 이진 탐색 알고리즘을 이용하여 특정 요소의 인덱스값을 return하는 함수를 작성하세요.

let index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // [3] */

const binarySearch = function (array, target) {
  let start = 0;
  let end = array.length - 1;
 
 while(start <= end){
   //중간점 선언해주기
   let mid = Math.floor((start + end ) / 2);
   //타겟과 비교해줄 해당imdex의 값
   let sameTaget = array[mid];
    if(sameTaget === target){
      return mid;
      //타켓보다 크면 왼쪽으로
    }else if(sameTaget > target ){
      end = mid - 1;
      //타켓보다 작으면 오른쪽으로
    }else {
      start = mid + 1;
    }
  }
  return undefined;
 };