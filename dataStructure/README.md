# 데이터 스트럭쳐란? (Data Structure)

- 강좌 주소 : https://www.youtube.com/watch?v=bj2F0hTiTtw&list=PLuHgQVnccGMDsWOOn_P0EmAWB8DArS3Fk

- 특징
  - 현실을 프로그래밍적으로 표현하는 것

    > ex . 
    >
    > - SET (집합) : 중복 동아리 구하기
    > - GRAPH : 최단거리 구하기

  - 큰 데이터를 효율적으로 관리하는 것

    > ex.
    >
    > - 책 분류하기 → 책을 빠르게 찾을 수 있다.

    - 컴퓨터의 도약점 : 정리 정돈의 진화 (자료 구조는 정리 정돈을 위함이다.)

## 1. Array 배열

- 많은 데이터 스트럭쳐들이 부품으로 사용

  > 데이터가 적을 땐 사용할 필요가 없지만, 데이터가 많아지면 배열을 사용한다.
  >
  > ex. 학교의 학생의 반과 학년으로 분류

  - 데이터가 많아지면, **그룹 관리**의 필요성이 생긴다.

- 여러 데이터를 하나의 이름으로 그룹핑해서 관리하기 위한 **데이터 스트럭쳐**

  ```javascript
  let student= []; // 배열 생성;
  student[0] = '최진혁';
  student[1] = '한아람';
  student[2] = '최유빈';
  ```

  - `value` : 값
  - `index` : 값의 식별자
  - `element` : index와 value의 결합

- 장점

  - 데이터를 그룹으로 관리할 수 있다.
    - 이 때 사용하는 기법 : **반복**

## 2. List 리스트

- 주의 사항
  - 순서대로 저장
  - 중복 허용
- 💣Array 와 List의 차이점
  - Array는 index가 중요하다. (index로 위치를 찾을 수 있다.)
  - List는 데이터가 저장되어 있는 순서가 중요하다.
    - 추가
      - 배열 : 기존 index의 값을 덮어쓰기
      - 리스트 : 원래 있던 자리의 순서가 밀려남
    - 삭제 
      - 배열 : 삭제된 데이터의 index는 유지됨
      - 리스트 : 데이터의 순서가 바뀜
- 리스트 기능 
  - 처음, 끝, 중간에 엘리먼트를 추가/삭제하는 기능
  - 리스트에 데이터가 있는지 체크하는 기능
  - 리스트의 모든 데이터에 접근할 수 있는 기능

### 언어별 비교

> 데이터 스트럭쳐는 언어마다 다르다.

- C

  리스트를 지원하지 않는다.

- javascript

  ```javascript
  let numbers = [10,20,30,40,50];
  numbers.splice(3,1);
  for(let i = 0; i<numbers.length; i++){
  	console.log(numbers[i]);
  }
  ```

  - `splice`로 리스트의 기능을 지원하고 있다.
  - 자바스크립트에서는 **배열이 리스트**이기도 하다.

- 파이썬

  ```python
  numbers = [10,20,30,40,50];
  numbers.pop(3);
  for number in numbers :
      print(number);
  ```

- 자바에선 배열과 리스트를 구분한다. (각각의 장점이 있기 때문)

## 2-1. Array List

- 리스트를 만들 때 내부적으로 배열을 사용하는 것

---

- 내부적 동작 방식
  - 추가 : `[10,20,30,40]`의 index1에 `50`을 추가하려고 할 때 ?
    1. `20, 30, 40`을 한칸씩 뒤로 밀린다.
    2. 그 자리에 `50`을 추가한다.
  - 삭제 : `[10,20,30,40,50]`에서 index 2의 `30`을 삭제하려고 할 때
    1. 우선 `30`을 삭제한 뒤
    2. 그 뒤에 있는 데이터를 한칸씩 앞으로 채워넣는다.
- 단점 : 데이터를 추가, 삭제할 때 시간이 오래 걸린다.
- ✨장점 : 데이터를 읽는 속도가 빠르다. (index를 이용하여 데이터를 빠르게 가져옴)

---

- 데이터의 size : 데이터를 추가하고 삭제할 때 마다 바뀜

## 2-2. Linked List

- Linked List를 이해하는 KEY : 연결

- 그 전에 알아야 할 것

  - 메모리 (memory) : 컴퓨터의 기억을 담당
  - 데이터 스트럭쳐의 대상이 **메모리**
  - 데이터 스트럭쳐의 미션은 메모리의 효율적 사용
  - Random Access Memory : 주소를 알고 있다면, 각 데이터의 접근 하는 속도는 같다.

  ---

  - 컴퓨터의 부품
    - CPU : 연산
      - 특징 : 속도가 가장 빠르다.
      - 메모리를 통해서만 데이터를 처리한다.
    - MEMORY : RAM
      - 특징 : 가격이 비싸고, 용량이 적다. (컴퓨터를 종료하면 데이터가 사라짐), 속도가 빠름
    - STORAGE : 저장 장치 (HDD/SSD)
      - 특징 : 저렴하고, 용량이 크다.

- Array List와 Linked List의 차이

  - Array List : 서로 붙어있음
  - Linked List : 서로 떨어져 있지만 연결되어 있음

### Linked List의 구성

- HEAD, node Vertex, Data field, Link field

### 데이터 추가

### 중간에 추가

### 삭제

### Array List VS Linked List

## 2-3. Doubly Linked List