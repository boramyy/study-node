
# DAY 1

## node 란
- 브라우저가 아닌 운영체제 상에서도 사용하고 싶어서 만들어짐
- v8엔진을 사용하는 운영체제에서의 자바스크립트 런타임
- es6 문법을 사용할 수 있다

<small>런타임 === 실행중인 환경 === 인터프리터가 실행중인 상황</small>

### 싱글쓰레드
- 하나의 쓰레드(이벤트 루프)에서 일들을 처리한다.
- 이벤트 기반의 개발방식(EDD)

### 비동기

node js 공식 사이트 - https://nodejs.org/ko


## node의 실행
### 파일 실행 명령 - node
``` shell
$ node src/index.js

또는

$ node src

```
index 는 기본으로 실행되는 파일 이름이니까 생략하고 실행해도 index.js가 실행됨

실행할 때 파라미터로 값을 전달할 수 있다
``` shell
$ node src name=hoho text=안녕 name=yaya
```

## node 에서의 global 객체: process

### 파라미터를 확인할 수 있는 프로퍼티: argv
``` javascript
console.log(process.argv)
```
콘솔로 `process.argv`에 어떤 데이터가 있는지 확인해본다 <br>
<small>argv는 argument values 아규먼트 밸류즈 줄임말</small>

## 예제
- 파라미터를 받아서 어떤 키값에 어떤 값이 들어왔는지 출력해보자

### 필요한 함수
1. `argv`를 `key`와 `value`로 분리하는 함수
2. 원하는 `key`를 입력하면 그 키에 해당하는 `value`를 리턴해주는 함수