
# D04-2 : TDD

## **TDD**(Test Driven Developmet)

- **테스트 코드를 선 작성후 ⇒ 테스트를 통과하기 위한 프로그램을 작성한다.**
- **테스트의 종류**
    - 유닛테스트 : 함수 하나하나 갈기갈기 쪼개서 테스트
    - 통합테스트 : 서로 다른 시스템의 상호작용을 테스트
    - 기능테스트 : 전체 프로그램 및 사용자외의 상호작용까지 테스트

    ![Untitled](https://user-images.githubusercontent.com/41819176/91639046-b4ce7780-ea4e-11ea-86c3-47412ac0875d.png)

## Mocha 
- node.js 에서 대표적으로 사용되는 테스트 프레임워크
- 설치 
    -  일반적으로 테스트 프레임워크는 `--save-dev` 명령어를 통해 dev에 설치한다.
    ```
    $npm install mocha --save-dev 
    ```

- 사용법
    ```jsx
    describe('clear Test',()=>{
            it('전체 hashmap 초기화 => isEmpty() True', () => {
                //given
                let hm = new HashMap(100);
                let key = "a-key"
                let value = "a-value"
                
                //when
                hm.put(key, value)
                hm.clear()

                //then
                assert.equal(true,hm.isEmpty())
            })
        })
    ```

- GWT Pattern
    - 많이 사용되는 테스트 스타일 중 하나
    - given : 테스트 실행전의 상태
    - when : 구체화하고자 하는 행동, 미션의 경우 유닛테스트
    - then : 예상결과 와 실행결과
    - [[번역] Given When Then - martin fowler](https://velog.io/@pop8682/%EB%B2%88%EC%97%AD-Given-When-Then-martin-fowler)

- UnitTest 의 F.I.R.S.T principle
    - Fast : 빠르게
    - **Isolated/Independent : 독립적으로**
    - Repeatable : 반복가능하게
    - Self-validating : 자가 검증
    - thorough : 모든 부분을
    - time : 필요할때
