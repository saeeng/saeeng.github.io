<!-- ---
layout: default
title: D05-CLASS
parent: Boost
--- -->
# D05 : Class & Extend

# Class  vs  Object  vs  Instance

- class
-연관되어 있는 변수와 메소드의 집합
- instance
-class를 통하여 구체화된 것
- object
-정의에 논란이 있음, 일반적으로 instance와 혼동하여 사용.
- 붕어빵틀(class)에서 슈크림 붕어빵(instance) 를 하나 찍어낸다(instantiation). 만들어진 붕어빵을 객체

# Class in Javascript

- es6의 class는 프로토타입의 형태만 변형시켜놓은것일 뿐

[[Javascript ] 프로토타입 이해하기](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)

![D05%20Class%20&%20Extend%20b4aee8f3193f43bf8c51b47b19790905/Untitled.png](D05%20Class%20&%20Extend%20b4aee8f3193f43bf8c51b47b19790905/Untitled.png)

# super()

- 서브 클래스와 슈퍼 클래스에 같은 이름의 메서드가 존재하면 슈퍼 클래스의 메서드는 호출되지 않습니다. **이때 super 키워드를 사용해서 슈퍼 클래스의 메서드를 호출할 수 있습니다.** (서브 클래스의 constructor에 super()를 작성하면 슈퍼 클래스의 constructor가 호출됩니다.)

# SOLID 원칙

- **SRP (Single Responsibility Principle), 단일 책임 원칙** : 객체는 단 하나의 책임만 가져야 한다.
    - 응집도 : 프로그램 요소의 응집력
    - 겹합도 : 프로그램 구성요소들간의 의존도
    - srp에 따르면 응집도는 높게 결합도는 낮게
- **LSP ( Liskov Substitution Principle ), 리스코프 치환 원칙
:** 자식 클래스는 최소 부모 클래스에서 가능한 행위는 수행할 수 있어야 한다.
    - 오버라이드는 최대한 피하도록 한다.
    (*오버라이드 : 부모 클래스의 함수를 재정의하여 자식 클래스가 사용하는는 것,
    오버로딩 : 클래스 내 동일 함수명으로 인자를 다르게해서 여러개 정의하는것)

    # 도형 관련

    삼각형 넓이 구하기

    ```jsx
    let a = this.calDistance(this.points[0], this.points[1])
            let b = this.calDistance(this.points[1], this.points[2])
            let c = this.calDistance(this.points[2], this.points[0])
            let s = (a + b + c) / 2;
            let S = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    ```