/* rockPaperScissors

세 판의 가위바위보를 할 동안 낼 수 있는 모든 경우의 수를 return하는 함수를 작성하세요.

결과는 다음과 같을 것입니다.

[
  ['rock', 'rock', 'rock'],
  ['rock', 'rock', 'paper'],
  ['rock', 'rock', 'scissors'],
  ['rock', 'paper', 'rock'],
  // ...etc ...
]; */

const rockPaperScissors = function() {
  let list = ['rock', 'paper', 'scissors'];
  let resultArray = [];;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      for (let k = 0; k < list.length; k++) {
        var result = [];
        result.push(list[i], list[j], list[k]);
        resultArray.push(result);
      }
    }
  }
    return resultArray;
};
