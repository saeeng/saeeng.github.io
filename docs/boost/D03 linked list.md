<!-- ---
layout: default
title: D03-LINKED LIST
parent: Boost
--- -->
# D03 : linked list

### 자바스크립트 class 생성 및 getter&setter

```jsx
class Video {
    //constructor
    constructor(id, title, time) {
        this.id = id;
        this.title = title;
        this.time = time;
        this.next = null;
    }

    //getter
    get getInfo() {
        return {
            id: this.id,
            title: this.title,
            time: this.time,
            next: this.next,
        }
    }
}
```

## 스스로 확인할 사항

### 알고리즘 효율성

- 빅오(Big-O) : 최악
- 빅오메가(big-Ω) : 최선
- 빅세타(big-**Θ**) :

    [Big-θ (빅 세타) 표기법 (개념 이해하기) | 알고리즘 | 칸아카데미](https://ko.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation)

    - 주요 알고리즘 복잡도
        1. $O(1)$ : stack에서의 push,pop
        2. $O(logn)$ : binary tree
        3. $O(n)$ : for문, 링크드리스트의 검색
        4. $O(nlogn)$ : 퀵소트,머지소트,힙소트
        5. $O(2^n)$ : 피보나치

### 배열과 링크드 리스트의 차이

- 배열 : 초기 생성시 메모리 사이즈를 할당해 두고 사용한다. 이때문에 사이즈 변환이 어렵지만, index를 통하여 빠르게 검색 가능하다
- 링크드 리스트 :  리스트 자체에 데이터를 저장하지 않으며 인덱스 값만을 포함한다. 각 각의 노드가 연결된 노드의 주소값을 통하여 연결되어 있기 때문에 검색시 O(N)의 시간이 소모되지만, 크기 등이 유동적이다.

![D03%20linked%20list%2097a970e6ca334a6ca8f6f6d964dd7595/Untitled.png](D03%20linked%20list%2097a970e6ca334a6ca8f6f6d964dd7595/Untitled.png)

## 다같이 확인할 사항

### queue

- 리스트의 한쪽에서 삽입 / 반대쪽에서 출력되는 형태 (FIFO)
- 링크드리스트에 header 에서는 get, tail 에서는 put 형태로 구현 가능

### deque (Double End Queue)

- 큐의 양쪽 끝에서 모두 삽입/출력 가능
- 링크드 리스트의 노드에 prev,next 를 추가하여 Doubly linked list 를 만들어 구현가능