---
layout: default
title: nedb
parent: Javascript
---

# Nedb

## Nedb?

- mysql 과 같이 별도의 서버를 요구하는 database를 사용하기 부담스러운 경우 가볍게 사용가능한 순수 javascript 기반의 database이다.
- 브라우저에 적용시 in-memory-database로 사용가능하며 파일 형태로 데이터를 저장하여 persistant database로도 사용가능하다.

- 설치

```
npm i nedb
```

- 사용법 1 - in memory type

```jsx
var Datastore = require("nedb"),
const  db = new Datastore()
```

- 사용법 2 - persistent type

```jsx
var Datastore = require("nedb")
const db = new Datastore({ filename: "path/to/datafile" })
db.loadDatabase(function (err) {
  // Callback is optional
  // Now commands will be executed
})
```
