---
layout: default
title: MULTILEVEL
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/77486">[2021 Dev-Matching: 웹 백엔드 개발자(상반기)]다단계 칫솔 판매

</a>


## 풀이시간
- 약 150+분
  
## IDEA
- 2021 Dev-Matching: 웹 백엔드 개발자(상반기)
- 다단계 회사의 이익 구조를 파악하는 문제이다.
- 판매자는 수입의 0.9를 챙기고 0.1은 추천해준 사람에게 넘겨준다.
- 0.1을 받은 직원도 0.1의 0.9만 챙기고 0.1은 자신을 추천해준 사람에게 넘겨주게된다.
- 

## Code1

```jsx
class Person {
    constructor(name) {
        this.name = name;
        this.income_fee=0;
        this.parent=undefined;
  }
    setParent(parent){
        this.parent=parent;
    }
    calFee(fee){
        const parent_fee = parseInt(fee/10);
        if(this.parent){
            this.parent.calFee(parent_fee);
        }
        this.income_fee+=(fee-parent_fee);    
    }
}

function solution(enroll, referral, seller, amount) {
    var answer = [];
    const enroll_map ={};
    
    enroll.forEach((name,idx)=>{
        enroll_map[name]=new Person(name);
        enroll_map[name].setParent(referral[idx]!=='-'?enroll_map[referral[idx]]:undefined)
    });

    seller.forEach((name,idx)=>{
        enroll_map[name].calFee(amount[idx]*100);
    })
    
    answer = enroll.map(name=>enroll_map[name].income_fee)
    return answer;
}
```

## IDEA
- Class를 통해 사람들의 객체를 만들고, 돈이 들어오면 본인 몫을 챙기고 수수료를 추천인에 넘겨주는 함수를 재귀로 구현했다.
- 20일 기준 정답.
- 21일에 블로그를 정리하면서 다시 돌렸더니 새로 추가된 테스트케이스 때문에 시간초과 오류가 발생했다.

## Code2
```jsx
function solution(enroll, referral, seller, amount) {
    
    let answer = Array(enroll.length).fill(0);;

    seller.map((name,idx)=>{
        let target = name;
        let fee =amount[idx]*100;
        
        while(target!="-"){
            let idx = enroll.indexOf(target);
            let parent_fee =  parseInt(fee*0.1);;            
            answer[idx]+=fee - parent_fee ;
            
            if(fee < 10) break;
            target = referral[idx];
            fee=parent_fee;

            // let parent_fee =  parseInt(fee*0.1);;            
            // answer[enroll.indexOf(target)]+=fee - parent_fee ;
            
            // if(fee < 10) break;
            // target = referral[enroll.indexOf(target)];
            // fee=parent_fee;
        }
    })
    return answer;
}
```

## IDEA
- 다른사람들의 풀이를 보니 객체를 구현하지않고 단순 반복문으로 해결한 풀이가 많아서 callstack이 터진것이라 판단했다.
- 사용자 객체를 저장하는 map을 없애고 변수 할당및 검색을 매번 진행해 주는 방식으로 뜯어고쳤다.
- 그럼에도 불구하고 시간초과.
- 프로그래머스의 시간초과는 10초로 알고있는데 `enroll.indexOf(target)` 과정을 변수를 사용하여 한번으로 줄이니 아슬아슬하게 통과했다.
- 
## Code3
```jsx
class Person {
    constructor(name) {
        this.name = name;
        this.income_fee=0;
        this.parent=undefined;
  }
    setParent(parent){
        this.parent=parent;
    }
    calFee(fee){
        const parent_fee = parseInt(fee/10);
        this.income_fee+=(fee-parent_fee);    
         if(fee < 10) return
        if(this.parent){
            this.parent.calFee(parent_fee);
        }
        
    }
}

function solution(enroll, referral, seller, amount) {
    var answer = [];
    const enroll_map ={};
    
    enroll.forEach((name,idx)=>{
        enroll_map[name]=new Person(name);
        enroll_map[name].setParent(referral[idx]!=='-'?enroll_map[referral[idx]]:undefined)
    });

    seller.forEach((name,idx)=>{
        enroll_map[name].calFee(amount[idx]*100);
    })
    
    answer = enroll.map(name=>enroll_map[name].income_fee)
    return answer;
}
```

## IDEA
- 2번 시도를 하면서 추천인에게 넘겨줄 비용이 10 이하일 경우에는 반복문을 끝내는 코드를 추가했는데 이를 첫번째 코드에 적용해 보았다.
- 매우매우 빠른시간으로 통과.




## Refer




