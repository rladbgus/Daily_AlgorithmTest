/* 모의고사

문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

입출력 예)
answers	       return
[1,2,3,4,5]	    [1]
[1,3,2,4,2]	  [1,2,3]
 */

function solution(answers) {
  let person1=[1, 2, 3, 4, 5];
  let person2=[2, 1, 2, 3, 2, 4, 2, 5];
  let person3=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count=[0, 0, 0];
  
  for(let i = 0; i<answers.length; i++){
    if(person1[i % person1.length] === answers[i]){
        count[0]++;
    };

    if(person2[i % person2.length] === answers[i]){
        count[1]++;
    };

    if(person3[i % person3.length] === answers[i]){
        count[2]++;
    };
  };
    
 let max = Math.max(...count);
    let result=[];
    for(let q = 0; q < count.length; q++){
      if(count[q] === max){
        result.push(q+1);
      };
    };
  return result;
}