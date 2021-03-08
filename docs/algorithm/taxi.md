---
layout: default
title: TAXI
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/72413">합승 택시 요금</a>


## 풀이시간
- 약 45분
  

## Code

```java
function solution(n, s, a, b, fares) {
    var answer = Infinity;
    let map = [[]];
    for(let i =0; i<n+1; i++){
        map[i] = new Array(n+1);
        map[i].fill(Infinity);
    }
    for(let fare of fares){
        let [start,end,fee]=fare
        map[start][end]=fee;
        map[end][start]=fee;
    }
  
    // j 중간지
    for(let j=1; j<n+1; j++){
        for(let i=1; i<map.length; i++){
            for(let k=1; k<map.length; k++){
                if(i==k){
                    map[i][k] = 0;
                }else{
                    map[i][k] = Math.min(map[i][k],map[i][j]+map[j][k]);  
                }
            }

        }
    }
   
    for(let i=1; i<=n; i++) {
        answer = Math.min(answer, map[s][i]+map[i][a]+map[i][b]);
    }
    return answer;
}

```

## KEY
- Floyd-Warshall Algorithm


## IDEA


- n : 지점갯수
- s : 출발점
- a : a 도착지
- b : b 도착지
- fares: 요금표

- 최종 요금 : 같이가는 요금 + 각자 가는요금(a+b)
- 처음 풀이에서는 각 노드간의 거리를 계산하기 위해 dfs 를 사용했다.
- dfs의 경우 각 노드마다 매번 전체 노드를 방문해야 했기 때문에 시간초과 오류.
- 경로 탐색 알고리즘 중 `플로이드-워셜 알고리즘(Floyd-Warshall Algorithm)` 을 사용했다.
- 두 노드간의 최단 거리를 계산함에 있어 다른 노드를 경유지로 택하는 경우와 비교하여 최소값을 판단한다.
- 위 같은 과정을 모드 노드 수만큼 반복해 주면 각 노드간의 최단 비용을 계산할 수 있다.
- 시간복잡도는 `O(n^3)`
- 문제 조건의 n=200 이라는 비교적 적은 숫자로 주어졌기에 사용할 수 있는것 같다.




## Refer




