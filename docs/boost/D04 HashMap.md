<!-- ---
layout: default
title: D04-01-HASHMAP
parent: Boost
--- -->
# D04-1 : HashMap

## HashMap

- **hashMap 관련 포스팅!**

    [Hashtable의 이해와 구현 #1](https://bcho.tistory.com/1072)

    - hashfunction을 통해서 데이터 조회 및 저장 삭제가 빠르다는 장점이 있다.
    - 근본적인 문제점으로 hash충돌이 발생한다.
        - jdk 에서는 separate chaining 방식을 사용한다.
        - 이번 미션에서는 linear probing을사용했다.
    - Javascript에서는 HashMap이 내장되어있지 않다.
        - 일반적으로 아래 코드와 같이 구현하여 사용한다.

            ```jsx
            Map = function(){
             this.map = new Object();
            };   
            Map.prototype = {   
                put : function(key, value){   
                    this.map[key] = value;
                },   
                get : function(key){   
                    return this.map[key];
                },
                containsKey : function(key){    
                 return key in this.map;
                },
                containsValue : function(value){    
                 for(var prop in this.map){
                  if(this.map[prop] == value) return true;
                 }
                 return false;
                },
                isEmpty : function(key){    
                 return (this.size() == 0);
                },
                clear : function(){   
                 for(var prop in this.map){
                  delete this.map[prop];
                 }
                },
                remove : function(key){    
                 delete this.map[key];
                },
                keys : function(){   
                    var keys = new Array();   
                    for(var prop in this.map){   
                        keys.push(prop);
                    }   
                    return keys;
                },
                values : function(){   
                 var values = new Array();   
                    for(var prop in this.map){   
                     values.push(this.map[prop]);
                    }   
                    return values;
                },
                size : function(){
                  var count = 0;
                  for (var prop in this.map) {
                    count++;
                  }
                  return count;
                }
            };
            ```

- **hashMap vs Map**
    - key : value 형태로 저장된 자료구조를 Map이라고 하며
    - key⇒value 를 찾는 과정에 따라서 hashMap,treeMap등의 이름이 붙는다
    - 즉, HashMap은 hash함수가 적용된 Map일뿐

- **대표적인 hash함수**
    - SHA-256 : SHA(Secure Hash Algorithm) 알고리즘의 한 종류로서 256비트의 해시 값을 생성하는 해시 함수이다. SHA-256은 미국의 국립표준기술연구소(NIST; National Institute of Standards and Technology)에 의해 공표된 표준 해시 알고리즘인 SHA-2 계열 중 하나이며 블록체인에서 가장 많이 채택하여 사용하고 있다.
    - MD5(Message-Digest algorithm 5)는 128비트의 해시 값을 생성하는 해시 함수이다. 주로 프로그램이나 파일이 원본 그대로인지를 확인하는 무결성 검사 등에 사용된다. 이전에 쓰이던 MD4를 대체하기 위해 만들어졌다.
    **문제점이 발견되어 추천되지않는다**
    ~~⇒어.... 나 이걸로 세션키값 만들었던거같은데~~
