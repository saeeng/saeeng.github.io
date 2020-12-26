---
layout: default
title: D01
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/42746">가장큰수</a>


## 풀이시간
- 약 25분
  

## Code

```java
import java.util.*;

class Solution {
    public String solution(int[] numbers) {
        String answer = "";
        
        Integer[] arr = new Integer[numbers.length];
        for(int i=0; i<numbers.length; i++){
            arr[i]=numbers[i];
        }
        
        Arrays.sort(arr, new Comparator<Integer>() {
        @Override
        public int compare(Integer s1, Integer s2) {
            return Integer.parseInt(String.valueOf(s2)+String.valueOf(s1)) - Integer.parseInt(String.valueOf(s1)+String.valueOf(s2));
        }
        });
        
         for(int i=0; i<numbers.length; i++){
            answer += arr[i];
        }
    
        
        while(answer.charAt(0)=='0'&& answer.length()!=1){
            answer=answer.substring(1);
        }
        return answer;
    }
}
```

## KEY
- Sort
- Comparator


## IDEA

- 가장 중요한 것은 정렬로 문제가 해결된 다는 것을 파악하는 것.
- int 형태로 들어오는 숫자들을 String 형태로 변환하여 값을 합친 수를 정렬의 기준을 삼으면 된다.
- 내가 못하는 것일 수도 있으나 java의 Comparator에는 `int`를 지원하지 않는다.
- 따라서 `int` 배열을 `Integer` 배열형태로 변환시켜서 해결했다.
- 다 풀고나니, 처음부터 모든 값들을 `String` 형태로 변환시켜 비교를 했으면 조금 더 간결해졌을 것이란 생각이 들었다.


## Refer

```java

  Collections.sort(list, (a, b) -> {
            String as = String.valueOf(a), bs = String.valueOf(b);
            return -Integer.compare(Integer.parseInt(as + bs), Integer.parseInt(bs + as));
        });    

```
- 위와 같이 Collections.sort 를 활용해서 보다 깔끔하게 해결하는 방법도 있는 것 같다.
- 무척 자바스크립트 스러운 풀이다.




