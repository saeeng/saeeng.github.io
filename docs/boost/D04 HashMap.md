---
layout: default
title: D04-01-HASHMAP
parent: Boost
---
# D04-1 : HashMap

## HashMap

- hashMap vs Map
    - key : value 형태로 저장된 자료구조를 **Map**이라고 부른다.
    - key ⇒ value 를 찾는 과정에 따라서 hashMap,treeMap등의 이름이 붙는다
    - 즉, HashMap은 hash function이 적용된 Map


- hashMap 의 특징

  <img width="615" alt="hashmap1" src="https://user-images.githubusercontent.com/41819176/91639023-91a3c800-ea4e-11ea-8232-8d7671d84342.png">
    - key ⇒ value 를 찾는 과정에 hash function이 사용된다. 
    - value 값을 찾을 때 hashfunction을 한 번씩만 수행하면 되기 때무에 데이터 조회 및 저장 삭제가 빠르다는 장점이 있다.
    - 근본적인 문제점으로 hash충돌이 발생하며, 이에 대비한 몇가지 해결책이 제시되어있다.
        -  **separate chaining** : jdk 에서 사용하는 방식으로 각 bucket이 linked list 구조를 갖고 data를 이어서 저장해나간다.
        -  **linear probing** : index에 충돌이 발생했을 때 탐색을 통해 빈 index bucket에 데이터를 저장하는 방식이다. 최초 index에 저장된 데이터가 삭제되었을 경우 충돌에 의해서 다른 곳에 저장된 데이터의 검색이 어렵다는 한계점이 있으며, 추가적인 데이터 공간을 사용하기 때문에 태생적인 한계점을 갖는다. 따라서, resizing 작업이 필요하다.
    - Javascript에서는 HashMap이 내장되어있지 않다.


- 대표적인 hash함수
    - **SHA-256** : SHA(Secure Hash Algorithm) 알고리즘의 한 종류로서 256비트의 해시 값을 생성하는 해시 함수이다. SHA-256은 미국의 국립표준기술연구소(NIST; National Institute of Standards and Technology)에 의해 공표된 표준 해시 알고리즘인 SHA-2 계열 중 하나이며 블록체인에서 가장 많이 채택하여 사용하고 있다.
    - **MD5**(Message-Digest algorithm 5) : 128비트의 해시 값을 생성하는 해시 함수이다. 주로 프로그램이나 파일이 원본 그대로인지를 확인하는 무결성 검사 등에 사용된다. 이전에 쓰이던 MD4를 대체하기 위해 만들어졌다.
    **문제점이 발견되어 추천되지않는다**

- hashmap 관련 참고자료\
  [Hashtable의 이해와 구현 #1](https://bcho.tistory.com/1072)