---
layout: default
title: Failure Rate
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/42889">실패율</a>


## 풀이시간
- 약 40분
  

## Code

```java
import java.util.*;
class Solution {
    public int[] solution(int N, int[] stages) {
        int[] answer = new int[N];
        int[] tries = new int[N+2];
        int[] stay = new int[N+2];
        for(int i=0; i<stages.length; i++){
            stay[stages[i]]++;
            for(int j=1; j<=stages[i];j++){
                tries[j]++;
            }
        }
        Stage[] rates = new Stage[N+1];
        rates[0] = new Stage(0,-1);
        for(int i=1; i<rates.length; i++){
            if(tries[i]==0){
                rates[i] = new Stage(i,(double)0); 
            }else{
                rates[i] = new Stage(i,(double)stay[i]/tries[i]); 
            }
        }
        Arrays.sort(rates);
        for(int i=0; i<answer.length; i++){
            answer[i] = rates[i].num;
        }
        
        return answer;
    }

}

class Stage implements Comparable<Stage> {
    int num; double rate;
    Stage(int num, double rate) {
        this.num = num; this.rate = rate; 
    }
    @Override
    public int compareTo(Stage other) {
        return Double.compare(other.rate, this.rate); 
    }
}
```

## KEY
- 구현
- 카카오


## IDEA

- 게임의 스테이지 별 실패율을 구하고, 실패율별로 정렬을 하는 것이 문제의 목표이다.
- 스테이지의 실패율은 `스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수` 로 쉽게 구할 수 있다.
- 문제의 핵심은 `실패율`로 정렬을하여 `스테이지 번호`를 리턴하는 것.
- 이를 위해서 `Stage`라는 class를 만들고, 내부 변수로 스테이지 번호와 실패율 값을 넣어 주었다.
- 또한  `Stage` class 선언시 `Comparable`을 implements 하여 `compareTo` 함수를 오버라이드 할 수 있게 하였다.
- 이를 통하여 내부적으로 compareTo를 사용하는 `Arrays.sort()` 함수를 사용할 수 있게된다.


## Refer




