/* longestRun

문자열을 받아, 그 안에서 같은 문자들이 반복되는 가장 긴 값을 찾고
그 중 첫 번째와 마지막 번째 문자의 인덱스 번호가 담긴 배열을 리턴하세요.
만약 똑같은 길이를 가진 2개의 값이 있다면, 첫 번째 값으로 리턴하세요. */

const longestRun = function(string) {
  let result = [0,0];
    let longest = 1;
    let start = 0;
    let streak = 1;
    let current;
    for (let i=0; i<string.length; i++) {
      if (string[i] !== current) {
        if (streak > longest) {
          longest = streak;
          result = [start,i-1];
        }
        current = string[i]
        start = i;
        streak = 1;
      } else {
        streak++
        if (i === string.length-1) {
          if (streak>longest) {
            result = [start,i];
          }
        }
      }
    }
    return result;
  }