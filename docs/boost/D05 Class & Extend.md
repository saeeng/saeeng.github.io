---
layout: default
title: D05-CLASS
parent: Boost
---
# D05 : Class & Prototype

## Class  vs  Object  vs  Instance

- class\
-연관되어 있는 변수와 메소드의 집합
- instance\
-class를 통하여 구체화된 것
- object\
-정의에 논란이 있음, 일반적으로 instance와 혼동하여 사용.

## Class in Javascript ES6

- es6의 class는 프로토타입의 형태만 변형시켜놓은것일 뿐
- 아무리 정리해도 prototype에 대해서는 정리가 잘안되니... 링크를 참고하자\
    [[Javascript ] 프로토타입 이해하기](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
- class 선언은 두 가지 형태로 가능하다.
 ```jsx
 const Shape = class {
     constructor(name) {
        this.name = name;
    }
 }
 class Shape {
    constructor(name) {
        this.name = name;
    }
}
 ```

- instance 선언
    ```jsx
    const shape = new Shape('triangle');
    ```

- new 명령어를 사용할 경우 Shape.prototype.constructor 가 호출 되는 구조이다.
즉, new 연산자는 실제로 Instance를 생성하는 것이 아닌 constructor를 호출하고 parameter를 전달하는 역할을 수행한다.
- 실제로 constructor 함수가 실행되기 이전에 빈 object 를 형성시키기 때문에 constructor에서 `this.name` 과 같이 this를 통해 object를 참조 할 수 있다.

## Class 상속
- class의 상속역시 내부적으로는 prototype을 통해 이루어진다.
```jsx
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName(){
        console.log(this.name)
    }
}
class Square extends Shape{
    constructor(name) {
            super(name,name)
        }
    getName(){
        super.getName()
        console.log("square")
    }
}
 ```

- **super()** : 서브 클래스에 슈퍼 클래스의 함수를 overide 하면 슈퍼 클래스의 메서드는 호출되지 않는다. 이때 `super.function()` 키워드를 사용해서 슈퍼 클래스의 메서드를 호출할 수 있다. (서브 클래스의 constructor에 super()를 작성하면 슈퍼 클래스의 constructor가 호출됩니다.)

## static function
- `static` 키워드를 통해 정적 메소드를 정의할 수 있다.
- static function 은 prototype에 연결되지 않고, class에 직접 연결되기 때문에 객체 선언 없이 직접 호출 가능하다. 인스턴스에서는 호출 불가능하다.
    ```jsx
    class Shape {
        constructor(name) {
            this.name = name;
        }
        static test(){
            console.log("this is static fucntion")
        }
    }
    Shape.test()
    //this is static fucntion
    ```

## SOLID 원칙
- SRP (Single Responsibility Principle), 단일 책임 원칙\
    : 객체는 단 하나의 책임만 가져야 한다.
    - 응집도 : 프로그램 요소의 응집력
    - 겹합도 : 프로그램 구성요소들간의 의존도
    - srp에 따르면 응집도는 높게 결합도는 낮게
- LSP ( Liskov Substitution Principle ), 리스코프 치환 원칙\
: 자식 클래스는 최소 부모 클래스에서 가능한 행위는 수행할 수 있어야 한다.
    - 오버라이드는 최대한 피하도록 한다.
    (*오버라이드 : 부모 클래스의 함수를 재정의하여 자식 클래스가 사용하는는 것,
    오버로딩 : 클래스 내 동일 함수명으로 인자를 다르게해서 여러개 정의하는것)



## ETC

- 삼각형 넓이 구하기 
```jsx
let a = this.calDistance(this.points[0], this.points[1])
        let b = this.calDistance(this.points[1], this.points[2])
        let c = this.calDistance(this.points[2], this.points[0])
        let s = (a + b + c) / 2;
        let S = Math.sqrt(s * (s - a) * (s - b) * (s - c))
```

- javascript 실력향상을 위해서 prototype을 이해하자.