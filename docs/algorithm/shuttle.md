---
layout: default
title: SHUTTLE
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/17678?language=javascript">2018 KAKAO BLIND RECRUITMENT[1차] 셔틀버스
</a>


## 풀이시간
- 약 50분
  

## Code

```jSX

function solution(n, t, m, timetable) {
    let answer = '';
    let clock = getTime("09:00");
    timetable.sort();
    
    for(let nth =1; nth <= n; nth++){
        let isLastBus = nth === n?true:false;
        for(let cth=1; cth <= m; cth++){
            let isLastSeat = cth === m?true:false;
          
            if(timetable.length === 0 )break;
            if(getTime(timetable[0]) <=clock ){
                if(isLastSeat & isLastBus) return getHHMM(getTime(timetable[0])-60000);
                timetable.splice(0,1)
            }else{
                break;
            }
            
        } 
        if(isLastBus){
            return getHHMM(clock);
        }
      clock =clock +  t * 60000;  
    }
    return answer;
}

function getTime(hhmm){
    const reg = /([0-2][0-9])|([0-5][0-9])/g;
    let time = hhmm.match(reg);
    return time[0]*3600000 + time[1]*60000;
}

function getHHMM(time){
    let d = new Date(time);
    let h = (time/3600000<10?'0':'')+parseInt((time/3600000));
    let m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    return h+":"+m
}


```

## KEY
- TIME


## IDEA



- 운행횟수 n
- 운행간격 t
- 셔틀 수용 인원 m

- 시간 계산을 밀리세컨드로 바꾸어서 해주는 것이 조금 더 편하게 접근 할 수 있었다.
- 마지막 셔틀버스에 대한 경우를 나누어 주는 것이 문제의 포인트인 것 같다.
- 1. 크루의 도착 타임으로 정렬
- 2. 출발 시간 까지 도착한 크루 셔틀 태우기
- 3.1 마지막 셔틀의 마지막 승객이 있다면 => (줄서있던)마지막 승객보다 1분 빠르게 도착하면 된다.
- 3.2 마지막 셔틀이 남는 경우 => 마지막 셔틀 출발시간에 도착하면된다.




## Refer




