---
layout: default
title: Ranking
parent: Algorithm
---

# <a href="https://programmers.co.kr/learn/courses/30/lessons/49191">순위</a>


## 풀이시간
- 약 30분
  

## Code

```java
import java.util.*;

class Solution {
    int compete[] ;
    public int solution(int n, int[][] results) {
        int answer = 0;
        compete = new int[n+1];
        for(int i=1; i<compete.length; i++){
            boolean visited[] = new boolean[compete.length];
            visited[i]=true;
            //나에게 진 친구들
            findLoser(i, i, visited, results);
            //나를 이긴 친구들
            findWinner(i, i, visited, results);
        }
        for(int i=1; i<compete.length; i++){
            if(compete[i]==n-1){
                answer++;
            }
        }
        return answer;
    }
    
    public void findLoser(int origin, int cur, boolean visited[],  int[][] results){
        for(int i=0; i<results.length; i++){
            if(results[i][0]==cur && !visited[results[i][1]]){
                compete[origin]++;
                visited[results[i][1]]= true;
                findLoser(origin, results[i][1], visited, results);
            }
        }
    }
    
    public void findWinner(int origin, int cur, boolean visited[],  int[][] results){
        for(int i=0; i<results.length; i++){
            if(results[i][1]==cur && !visited[results[i][0]]){
                compete[origin]++;
                visited[results[i][0]]= true;
                findWinner(origin, results[i][0], visited, results);
            }
        }
    }
}
```

## KEY
- Graph


## IDEA
- `경기 결과에는 모순이 없다` 라는 말을 잘 이해하는 것이 핵심인 것 같다.
- 포켓몬 마냥 리아코는 브케인을 이기고 브케인은 치코리타를 이기고 치코리타는 리아코를 이기는 상성이 없다는 의미. (사실 치코리타는 모두 패배한다)
- 순위를 찾는 문제가 아니라 순위가 결정되었는지를 묻는 문제이기 때문에, 누구에게 이겼는지 졌는지보다 누구와 상대 전적을 구할 수 있는지를 찾는 문제이다.
- 따라서 나에게 진,이긴 선수들의 진,이긴 선수를 찾아나가는 형식으로 해결 가능하다.
- compete 배열을 생성 후, 상대 전적이 구해지는 선수가 생길때마다 1씩 늘려주었다.
- 해당 값이 전체 선수-1(본인)이 될 경우 모든 선수로부터 상대전적이 생기기 때문에 순위를 결정할 수 있다.

- 풀고나서 생각이 난건데 한번 탐색으로 인해서 진사람 수, 이긴 사람 수 가 정해진 경우에는 그 값이 변하지 않는다.
- 따라서, 매 선수 마다 해당 값들을 구해줄 필요가 없기에 처음 진사람,이긴사람 수를 구해주고 그 값을 저장해 두고 나중에도 사용한다면 속도를 확연하게 개선할 수 있을 것 같다. 

