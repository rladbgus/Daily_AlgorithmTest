/* 다리를 지나는 트럭

트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다. */

function solution(bridge_length, weight, truck_weights) { 
  var time = 0, truckOnTheBridge = {},finishedTruck = 0; 
  let idx = 0, curWeight=0; 
  // 다리를 지난 트럭과 대기 트럭의 갯수가 같으면 트럭이 모두 지나간 것이기 때문에 끝 
  while(truck_weights.length != finishedTruck){ 
    //경과시간 1추가 
    time++; 
    // 다리 위에 트럭이 있다면 1칸씩 이동 
    for( let key in truckOnTheBridge){ 
      truckOnTheBridge[key]+=1;
       // 다리 위에 트럭이 다리를 지났다면 트럭을 다리에서 삭제 
       if(truckOnTheBridge[key] == bridge_length+1){ 
         delete truckOnTheBridge[key]; 
         let i = Number(key); 
         curWeight -= truck_weights[i]; 
         finishedTruck +=1; 
        } 
      } 
      let curTruckW = truck_weights[idx]; 
       // 현재 다리 위에 있는 트럭의 무게 더하기 현재 추가 할 트럭의 무게가 다리가 버틸 수 있는 무게인지 확인 
       if(curWeight+curTruckW <= weight){ 
         curWeight += curTruckW; 
        // map에 idx를 key로 0은 value    ex) {0:1,} 
        // 후위 연산이기 때문에 map에 값 대입하고 idx+=1이 수행됌 
        truckOnTheBridge[idx++]=1; 
      } 
    } return time; 
  }

