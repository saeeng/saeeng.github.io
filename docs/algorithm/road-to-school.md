---
layout: default
title: Road-To-School
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/42898">등굣길</a>


## 풀이시간
- 약 45분
  

## Code

```java
import java.util.*;

class Solution {
    int map[][];
    int _puddles[][];
    public int solution(int m, int n, int[][] puddles) {
        int answer = 0;
        _puddles=puddles;
        map = new int[n+1][m+1];
         for (int[] puddle : puddles) {
            map[puddle[1]][puddle[0]] = -1;
        }
        map[1][1]=1;
        for(int i=1; i<map.length; i++){
            for(int j=1; j<map[i].length; j++){
                if(i==1 && j==1){
                    continue;
                }
               if(map[i][j]==-1){
                    map[i][j]=0;
                }else{
                        map[i][j] =( map[i][j-1] + map[i-1][j])% 1000000007;
               }
            }
        }
        return map[n][m];
    }
}
```

## KEY
- DP


## IDEA

- m * n 배열에 특정 지점 까지 가는 경우의 수를 구하는 문제
- 특정 지점까지의 경로는 해당지점 위쪽 + 해당지점 왼쪽 경로를 더한 경우의 수가 된다.
- 위쪽,왼쪽에 웅덩이가 있는 경우 경우의 수를 0으로 생각하면 편하다.
  
- 처음 풀었을 때 정확도 테스트는 모두 통과했지만, 효율성 테스트에서 0점이 나와서 이유를 찾느라 고생했던 문제.
- 처음에는 `return` 에서 1000000007로 나눈 나머지를 리턴 했는데, 맵 계산 중간에서 1000000007을 넘어가버리는 경우 계산이 터져버리는 듯 했다.
- `map[i][j] =( map[i][j-1] + map[i-1][j])% 1000000007;` 에서 1000000007로 나눈 나머지를 넣어주는 것이 효율성 해결의 핵심이었다.

## Refer




