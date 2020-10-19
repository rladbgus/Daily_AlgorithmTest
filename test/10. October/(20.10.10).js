/* rotatedArraySearch

정렬되어 있는 배열 중 일부를 왼쪽 혹은 오른쪽으로 회전시킨 배열이 주어졌을때,
어떻게 특정 element를 효율적으로 찾을 수 있을까요?

작성한 함수는 target의 index값을 return하고, 없으면 null을 return해야 합니다. */

const rotatedArraySearch = function (rotated, target) {
  for(let i = 0; i < rotated.length; i++){
      if(rotated[i] === target){
        return i;
      }
  } return null;
};
