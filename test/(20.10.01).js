/*asyncMap

asyncMap 함수를 작성하세요
하나는 비동기 함수로 이루어진 배열, 하나는 콜백함수를 받는다. */

asyncMap(
  [
    function (cb) {
      setTimeout(function () {
        cb('one');
      }, 200);
    },
    function (cb) {
      setTimeout(function () {
        cb('two');
      }, 100);
    },
  ],
  function (results) {
    console.log(results); // ['one', 'two']
  }
);

const asyncMap = function (tasks, callback) {
  //promose all로 비동기 처리하기
  tasks = tasks.map(cb => new Promise(cb))
  return Promise.all(tasks)
    .then(callback);
};