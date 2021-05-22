---
layout: default
title: LOTTO
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/77484">[2021 Dev-Matching: 웹 백엔드 개발자(상반기)]로또의 최고 순위와 최저 순위
</a>


## 풀이시간
- 약 10분
  

## Code

```jsx
function solution(lottos, win_nums) {
    var answer = [];
   
    let win_cnt=0;
    lottos.forEach(num =>{
        if(win_nums.includes(num)){
            win_cnt++;
        }
    })
  
    let zero_cnt = lottos.filter(num=>num==0).length;
    
    answer[1]=win_cnt;
    answer[0]=(win_cnt+zero_cnt);
    
    let ans = answer.map(cnt=>{
        if(cnt<2)return 6;
        else return 7-cnt
    })
    
    return ans;
}
```

## KEY
- 


## IDEA
- 2021 Dev-Matching: 웹 백엔드 개발자(상반기)
- 몇개의 지워진 번호를 통해 최고 등수와 최저 등수를 맞추는 문제
- 철수가 매번 잉크를 엎지르던 중학교 수학문제를 떠올리게 하는 문제
- 특별히 고려할 부분은 없고, js에서 배열의 특정 원소를 카운트하는 코드 트릭
- `let zero_cnt = lottos.filter(num=>num==0).length;`


## Refer




