/* evenOccurrence

배열이 주어졌을 때, 값이 같은 원소가 짝수 개수만큼 나오는 첫 번째 원소를 리턴하세요.
개수가 짝수인 원소들이 여러 개면, 그 중 첫 번째 원소를 리턴하세요.
개수가 짝수인 원소가 없으면, null을 리턴하세요.

let onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4
*/

const evenOccurrence = function (arr) {
  //배열 오름차순으로 정렬하기
  //똑같으면 카운트++
  //다르면 빈배열에 [카운트한 숫자, 카운트된수] 로 넣어줌
  //0부터 카운트
  //다르면 넣어준 카운트된 수와 비교
  //더 큰숫자로 교체
  //반복한후 남은 숫자를 리턴
  //없으면 null을 리턴

  let sortArr = arr.sort();
  let resultArr = [];
  let count = 1;
  
  for(let i =0 ; i < sortArr.length; i++){
    if(sortArr[i] === sortArr[i+1]){
      count++
    }else if(sortArr[i] !== sortArr[i+1] && resultArr.length === 0){
      resultArr.push(sortArr[i], count);
      count = 1;
    }else if(sortArr[i] !== sortArr[i+1] && resultArr[1] < count ){
       resultArr.length = 0;
       resultArr.push(sortArr[i + 1], count);
       count = 1;
    }else {
      return resultArr[0];
     }
  }
  return null;
};

//통과 안되서 처음부터 다시 풀어보기 
//문제를 이상하게 이해했음..
//왜 같은 수의 카운트가 젤 큰 수를 리턴하는 걸로 이해했는지...
//원소가 짝수 개수만큼 나오는 첫 번째 원소를 리턴!!!
const evenOccurrence = function (arr) {

  let count = {}; 

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++; 
    } else {
      count[arr[i]] = 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }
  return null; 
} 
