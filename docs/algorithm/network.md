---
layout: default
title: Network
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/43162">네트워크</a>


## 풀이시간
- 약 25분
  

## Code

```java
class Solution {
    public static int[][] map;
    public static int nn;
    public static boolean visited[];
    public int solution(int n, int[][] computers) {
       
        int answer = 0;
        this.map = computers;
        this.nn = n;
        
        visited = new boolean[n];
    
        for(int i=0; i<n; i++){
          
            if(!visited[i]){
                  answer++;
                dfs(i);
            }
        }
        return answer;
    }
    
    public  void dfs(int start){
        visited[start] = true;
        for(int i=0; i<nn; i++){
            if(!visited[i]&&map[start][i]==1){
                dfs(i);
            }
        }
    }
}
```

## KEY
- DFS/BFS


## IDEA

- 언제나 그렇듯 핵심은 DFS/BFS로 문제로 해결된다는 것을 파악하는 것.
- DFS의 정석과도 같은 문제
- 초기 지점에서의 시작 = 새로운 네트워크의 연결
- 이라는 생각만 갖고 있다면 쉽게 해결 


## Refer




