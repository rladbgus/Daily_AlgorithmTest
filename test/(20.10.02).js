/* sumArray

숫자들의 배열이 주어졌을 때, 배열 안의 "연속되는" 원소들을 더해서 얻을 수 있는 최대 값을 계산하십시오.
단일 배열 원소도 "연속되는" 원소로 간주합니다.
참고로, 구현한 함수의 시간 복잡도는 O(n)이며 공간(메모리) 복잡도는 O(1)입니다.

sumArray([1, 2, 3, -4, 5]); // [1, 2, 3, -4, 5]의 합 === 7
sumArray([4, -1, 5]); // => [4, -1, 5]의 합 === 8 
sumArray([10, -11, 11]); // => 11 (단일 배열 원소)*/

const sumArray = function (array) {
  let curr = 0;
  let sum = 0;

  for(let i = 0; i < array.length; i++){
    curr = Math.max(0, curr + array[i]);
    sum = Math.max(curr, sum);
  }
  return sum;
};
