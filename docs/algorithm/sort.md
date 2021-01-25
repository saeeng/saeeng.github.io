---
layout: default
title: Sort
parent: Algorithm
---

# 정렬 알고리즘 비교 및 코드 정리
- ![async](https://gmlwjd9405.github.io/images/algorithm-insertion-sort/sort-time-complexity.png)
## quick sort
- O(NlogN)
- 빠르다. 같은 nlogn 알고리즘들에 비해서도 일반적으로 빠르다.
- 운이 안좋아서 pivot을 항상 가장 큰 수, 작은 수 를 고르는 경우 O(n^2)의 성능을 보인다.
- divide - conquer
- `1` : `pivot`을 하나 정하고, pivot을 기준으로 작은 수들은 왼쪽, 큰 수들은 오른쪽으로 옮긴다.
- `2` : 오른쪽 왼쪽으로 나뉘어진 배열에 대하여 `1` 을 반복하여 실행한다.

``` jsx
var partition = function(array, left, right, pivotIndex) { // 정렬하는 부분
  var temp;
  var pivot = array[pivotIndex];
  while (left <= right) { // 왼쪽, 오른쪽 수를 규칙과 비교해 다음 수로 넘어갑니다.
    while (array[left] < pivot)
      left++;
    while (array[right] > pivot)
      right--;
    if (left <= right) { // 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면
      temp = array[left];
      array[left] = array[right];
      array[right] = temp; // 서로 바꿔줍니다.
      left++;
      right--;
    }
  }
  temp = array[left];
  array[left] = array[pivotIndex];
  array[pivotIndex] = temp; // 마지막으로 기준과 만난 수를 바꿔줍니다. 기준의 위치는 이제 i입니다.
  return left;
};

var quickSort = function(array, left, right) { // 재귀하는 부분
  if (!left) left = 0;
  if (!right) right = array.length - 1;
  var pivotIndex = right; // 배열 가장 오른쪽의 수를 기준으로 뽑습니다.
  pivotIndex = partition(array, left, right - 1, pivotIndex); // right - 1을 하는 이유는 기준(현재 right)을 제외하고 정렬하기 위함입니다.
  if (left < pivotIndex - 1)
    quickSort(array, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
  if (pivotIndex + 1 < right)
    quickSort(array, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀
  return array;
};

quickSort([4,1,7,6,3,8,2,5]); // [1,2,3,4,5,6,7,8]
```



## select sort
- O(N^2)
- 전체 배열을 N회 순회하면서, 매 순회마다 가장 작은값을 가장 앞으로 가져다 놓는 방법.
  
```jsx
var selectionSort = function(array) {
var length = array.length;
var minIndex, temp, i, j;
for (i = 0; i < length - 1; i++) { // 처음부터 훑으면서
    minIndex = i;
    for (j = i + 1; j < length; j++) { // 최솟값의 위치를 찾음
    if (array[j] < array[minIndex]) {
        minIndex = j;
    }
    }
    temp = array[minIndex]; // 최솟값을 저장
    array[minIndex] = array[i];
    array[i] = temp; // 최솟값을 제일 앞으로 보냄
}
return array;
};

selectionSort([5,1,4,7,2,6,8,3]); // [1,2,3,4,5,6,7,8]
```

## merge sort
- O(NlogN)
- divide - conquer
- `1` : 배열을 절반으로 나눈다.
- `2` : 계속 나눈다. 원소 갯수가 한개일 때 까지.
- `3` : 나누어준 배열을 합치는 과정이다. 두 개로 나누어진 배열에서, 가장 앞의 수를 비교해가며 둘 중 작은 수를 새로운 배열에 넣어 정렬된 배열을 만든다.
- `4` : `3`의 과정을 반복하여 전체 배열을 정렬한다.

```jsx
var mergeSort = function(array) {
  if (array.length < 2) return array; // 원소가 하나일 때는 그대로 내보냅니다.
  var pivot = Math.floor(array.length / 2); // 대략 반으로 쪼개는 코드
  var left = array.slice(0, pivot); // 쪼갠 왼쪽
  var right = array.slice(pivot, array.length); // 쪼갠 오른쪽
  return merge(mergeSort(left), mergeSort(right)); // 재귀적으로 쪼개고 합칩니다.
}
function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) { // 두 배열의 첫 원소를 비교하여
      result.push(left.shift()); // 더 작은 수를 결과에 넣어줍니다.
    } else {
      result.push(right.shift()); // 오른쪽도 마찬가지
    }
  }
  while (left.length) result.push(left.shift()); // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
  while (right.length) result.push(right.shift()); // 오른쪽도 마찬가지
  return result;
};

mergeSort([5,2,4,7,6,1,3,8]); // [1, 2, 3, 4, 5, 6, 7, 8]
```

### insertion sort
- O(N^2)
- 흔히 손에든 카드를 정렬하는 방법과 유사하다고 하는듯 하다.
- `1` : 첫 번째 카드는 정렬되어있다고 가정한다.
- `2` : 다음 카드부터 시작하여 앞의 카드 배열을 순회하며 비교하여 적절한 위치에 찾아 넣는다.
- `3` : `2`를 배열의 마직막 수 까지 반복한다. 
  
```jsx
var insertionSort = function(array) {
  var i = 1, j, temp;
  for (i; i < array.length; i++) {
    temp = array[i]; // 새로운 숫자를 선택함
    for (j = i - 1; j >= 0 && temp < array[j]; j--) { // 선택한 숫자를 이미 정렬된 숫자들과 비교하며 넣을 위치를 찾는 과정, 선택한 숫자가 정렬된 숫자보다 작으면
      array[j + 1] = array[j]; // 한 칸씩 뒤로 밀어낸다
    }
    array[j + 1] = temp; // 마지막 빈 칸에 선택한 숫자를 넣어준다.
  }
  return array;
};
insertionSort([5, 6, 1, 2, 4, 3]); // [1, 2, 3, 4, 5, 6]
```

## refer
- https://www.zerocho.com/category/Algorithm/post/57f728c85141fc5fe4f4ca89