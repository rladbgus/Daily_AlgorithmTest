/* linkedList

연결 리스트를 pseudoclassical 방식으로 구현하세요.
연결 리스트는 "addToTail", "removeHead", "contains" 메소드를 가져야 합니다. */

/* pseudoclassical 방식 복습!
-> new operator 사용 

var Level = function (newLevl) {
  this.newLevl = newLevl;
};

Level.prototype.up = function () {
  this.newLevl += 1;
};

var myLevel = new Level(10);
console.log(myLevel);  // Level {newLevl: 10}
*/

const LinkedList = function () {
  this.head = null;
  this.tail = null;
};

// 메소드
LinkedList.prototype.addToTail = function (num) {
  let newNode = this.makeNode(num); 
  if(!this.head){
    this.head = newNode;
  }if(this.tail){
    this.tail.next = newNode;
  }
    this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  let currHead = this.head;
  if (!this.head) {
    return null;
  }
  if (this.head === this.tail) {
    this.head = this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return currHead.value;
};

LinkedList.prototype.contains = function (num) {
  var node = this.head;
  while(node){
    if(node.value === num){
      return true;
    } 
    node = node.next;
  }
   return false;
};

LinkedList.prototype.makeNode = function (num) {
  let node = {};
  node.num = num;
  node.next = null;
  return node;
};


//왜 안되냐 ~~~~~~~~~