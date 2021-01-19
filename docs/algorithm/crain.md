---
layout: default
title: 크레인 인형뽑기 게임
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/64061">[2019 카카오 개발자 겨울인턴십] 크레인 인형뽑기 게임</a>


## 풀이시간
- 약 40분
  

## Code

```java
import java.util.*;
class Solution {
    int[][] _board;
    Stack<Integer> basket;
    public int solution(int[][] board, int[] moves) {
        _board=board;
        int answer = 0;
        basket = new Stack<>();
        for(int i=0; i<moves.length; i++){
            grab(moves[i]-1);
           
            if(!basket.empty()){
                int temp = basket.pop();
                
                if(!basket.empty() ){
                    int temp2 = basket.pop();
                    if(temp==temp2){
                        answer=answer+2;
                    }else{
                        basket.push(temp2);
                        basket.push(temp);
                    }
                }else{
                    basket.push(temp);
                }
            }
        }
       
        return answer;
    }
    public void grab(int move){
        for(int i=0; i<_board.length; i++){
            if(_board[i][move]!=0){
                basket.push(_board[i][move]);
                _board[i][move]=0;
                break;
            }
        }
    }
}
```

## KEY
- 구현
- 카카오


## IDEA

- 2차원 배열기반의 인형뽑기를 구현하면 되는 문제이다.
- 특별한 알고리즘이 사용되는 것이 아닌, 문제를 잘 읽고 이해한 형태를 코드로 풀어낼 수 있는지를 확인 하는 문제인것 같다.
- 크레인의 동작에 따르는 각 행동들을 함수형태로 만들면 깔끔한 문제풀이가 가능해질 것이라 생각했다.
- 옮겨진 인형들을 담는 곳을 스택형태로 구현했는데, arraylist형태로 구현했다면 스택이 비어있는 경우에대한 처리를 해주지 않아도 되기 때문에 코드가 조금 더 간결해지지 않았을까 싶다.
## Refer




