---
layout: default
title: StockPrice
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/42584">주식가격</a>


## 풀이시간
- 약 10분
  

## Code

```java
class Solution {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];
        
        for(int i=0; i<prices.length; i++){
            answer[i]= prices.length-1-i;
            for(int j=i+1; j<prices.length; j++){
                
                if(prices[i]>prices[j]){
                    answer[i]= j-i;
                    break;
                }
                
            }
        }
        
        return answer;
    }
}
```

## KEY
- Stack
- brute force


## IDEA
- 배열에는 주식가격이 주어지고, 해당 주식가격보다 떨어지지 않은날, 즉, 해당 가격보다 주식각격이 낮은날이 언제인지와 그 기간을 세는 것이 목표이다.
- 다소, 거칠지만 배열을 배열을 두번 돌려서 문제가 해결가능하다.
- 각 날짜마다, 가까운 날부터 주식가격을 체크하여 당일 보다 가격이 떨어지는 날을 찾아주면 된다. 
- 이러한 방식에도 시간초과가 나지 않는 것은
   1. 애초에 문제의 테스트케이스가 많지 않은것
   2. 또한, 내부 반복문의 시작점이 `i=0` 이 아니기 때문에 순수하게 `n^2` 이 아니라는 것.



## Refer

- 잘 만든 코테문제는 이런식으로 나오지는 않을 것이기에 다른 방식으로 푼 문제를 찾아보았다.
- 날짜가 지날때마다 스택에 인덱스 값을 넣어놓고, 스택에서 하나씩 비교하여 가격이 떨어졌는지를 체크해주면된다.
- 스택에 들어있는 인덱스들은 값이 떨어진 날을 찾지 못한 날짜들이다.
- 마지막 까지 값이 떨어진 날을 찾지 못했다면, 전체기간으로부터 계산해서 값을 넣어주면된다.
- 사실 로직자체는 위의 배열을 두번 돌리는 풀이와는 큰 차이가 없는 것 같다.
- peek을 활용하는 것이 포인트.
```java
import java.util.Stack;

class Solution {
    public int[] solution(int[] prices) {
        Stack<Integer> beginIdxs = new Stack<>();
        int i=0;
        int[] terms = new int[prices.length];

        beginIdxs.push(i);
        for (i=1; i<prices.length; i++) {
            while (!beginIdxs.empty() && prices[i] < prices[beginIdxs.peek()]) {
                int beginIdx = beginIdxs.pop();
                terms[beginIdx] = i - beginIdx;
            }
            beginIdxs.push(i);
        }
        while (!beginIdxs.empty()) {
            int beginIdx = beginIdxs.pop();
            terms[beginIdx] = i - beginIdx - 1;
        }

        return terms;
    }
}
```


