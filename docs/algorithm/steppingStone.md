---
layout: default
title: SteppingStone
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/43236#">징검다리</a>


## 풀이시간
- 약 55분
  

## Code

```java
import java.util.Arrays;
class Solution {
    public int solution(int distance, int[] rocks, int n) {
        int max = 0;
        // 이분탐색을 위한 정렬
        Arrays.sort(rocks);
        int left = 0;
        int right = distance;
        int mid = 0;
        while(left <= right) {
             
        	int cnt = 0, prev = 0, minStoneToStone = distance;
        	mid = (left + right) / 2;
        	
            // 각 돌의 위치별 이전돌과의 거리를 확인해 준다
        	for(int i = 0; i < rocks.length; i++) {
        		if(rocks[i] - prev <= mid ) {
                    cnt++;
                }else {
        			minStoneToStone = Math.min(min, rocks[i] - prev);
        			prev = rocks[i];
        		}
        	}

            // 마지막 돌 확인용
        	if(distance - prev <= mid) cnt++;
        	else minStoneToStone = Math.min(minStoneToStone, distance - prev);
        	
            // 제거된 돌의 갯수가 부족,적당한 경우
        	if(cnt <= n) {
        		max = Math.max(max, minStoneToStone);
        		left = mid + 1;
        	}else {
            // 제거된 돌의 갯수가 너무 많을 경우
            // 
                right = mid - 1;
                }
        }
        
        return max;
    }
}
```

## KEY
- sort
- binary search


## IDEA

- 이분탐색이라는 것을 알고 시작했지만, 많이 난해했던 문제.
- 최종 반환값은 `돌들사이 거리의 최솟값의 최댓값` 이라는 말을 이해하는 것이 중요할 듯 하다.
- 돌을 n개 제거할 수 있는 여러 경우를 실행했을 때, 돌들간 거리의 최솟값`(minStoneToStone)`을 구하고,
- 그들중 최댓값`(max)`을 구해야 한다.
- 처음 돌들의 위치를 이분탐색을 stone 배열의 index가 아닌 돌들사이의 거리로 실행해주는 것이 문제의 핵심.
- 시작점~최대거리 의 값 중에서 목표(제거된 돌의 수가 부족, 적당)를 이분탐색의 방식으로 찾아나서면 된다.


## Refer




