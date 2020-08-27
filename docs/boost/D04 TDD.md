<!-- ---
layout: default
title: D04-02-TDD
parent: Boost
--- -->
# D04-2 : TDD

## TDD(**Test Driven Developmet)**

- **테스트를 선 작성후 ⇒ 테스트를 통과하기 위한 프로그램을 작성한다.**
- **테스트의 종류**
    - 유닛테스트 : 함수 하나하나 갈기갈기 쪼개서 테스트
    - 통합테스트 : 서로 다른 시스템의 상호작용을 테스트
    - 기능테스트 : 전체 프로그램 및 사용자외의 상호작용까지 테스트
    - ~~(유닛 테스트를 지향했지만, 결과적으로 통합테스트가 되어버린듯하다)~~

    ![D04%20HashMap%20,%20TDD%206e17958be6004664a9ac29ab60f1c830/Untitled.png](D04%20HashMap%20,%20TDD%206e17958be6004664a9ac29ab60f1c830/Untitled.png)

- M**ocha 
node.js 에서 사용되는 테스트 프레임워크**

    ```jsx
    //일반적으로 테스트 프레임워크는 dev환경에 설치한다.
    $npm install mocha --save-dev 

    //사용법
    // describe를 통하여 환ㄱ
    describe('clear Test',()=>{
            it('전체 hashmap 초기화 => isEmpty() True', () => {
                let hm = new HashMap(100);
                let key = "a-key"
                let value = "a-value"
                
                hm.put(key, value)
                hm.clear()
                assert.equal(true,hm.isEmpty())
            })
        })
    ```

- **GWT Pattern**
    - 많이 사용되는 테스트 스타일 중 하나
    - given : 테스트 실행전의 상태
    - when : 구체화하고자 하는 행동, 미션의 경우 유닛테스트
    - then : 예상결과 와 실행결과

        [[번역] Given When Then - martin fowler](https://velog.io/@pop8682/%EB%B2%88%EC%97%AD-Given-When-Then-martin-fowler)

- **UnitTest 의 F.I.R.S.T principle**
    - Fast : 빠르게
    - **Isolated/Independent : 독립적으로**
    - Repeatable : 반복가능하게
    - Self-validating : 자가 검증
    - thorough : 모든 부분을
    - time : 필요할때

    자바스크립트 맵 객체 인덱싱