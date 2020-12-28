---
layout: default
title: BOAT
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/42885">구명보트</a>


## 풀이시간
- 약 25분
  

## Code

```java
import java.util.*;

class Solution {
    public int solution(int[] people, int limit) {
        Arrays.sort(people);
        int answer = 0, light=0;
        int i;
        for(i=people.length-1; i>light; i--){
            if(people[i]+people[light]<=limit){
                light++;
                answer++;
            }else{
                answer++;
            }
        }
        if(i==light) answer++;
        return answer;
    }
}
```

## KEY
- sort
- greedy


## IDEA

- 보트에는 최대한 많은 인원(2)을 태우는것이 목적이기 때문에
- 가장 무거운 사람과 가장 가벼운 사람을 함께 태워야한다.
- 가장 무거운 사람은 가장 가벼운 사람하고도 같이 못타면 그 누구와도 같이 탈 수 없다.
- 때문에, 문제의 핵심은 누가 가장 무거운지, 가벼운지를 파악해야하는 것이고
- 대기열을 정렬하면 쉽게 해결 가능 하다.


## Refer




