## 비동기 처리

- 강의 : 드림코딩 엘리
- 목표
  - 콜백이 무엇인지, 콜백을 어떤 경우에 사용하는지 어떻게 사용하면 안되는지.
  - 비동기 프로그래밍은 무엇인지, 어떻게 사용하는 것이 더 좋은지.
  - 현업에서는 어떤 경우에 어떻게 사용하는 것이 맞는지.

### callback

> - 강의 주소 : [비동기 처리의 시작 콜백 이해하기, 콜백 지옥 체험 😱 JavaScript Callback](https://youtu.be/s1vpVCrT8f4)
> - 실습 파일 : [callback](./callback.html)

1. 동기와 비동기

- 동기 : 정해진 순서에 맞게 코드가 실행되는 것
- 비동기 : 비동기적으로 언제 코드가 실행될지 예측할 수 없는 것.

2. 콜백 마지막 정리

- 콜백 : 지금 당장 실행하지 않고, 전달해준 함수를 나중에 불러달라고 하는 개념
- 콜백 개념
  - 동기 콜백 : 즉각 실행
  - 비동기 콜백 : 언제 실행될지 알 수 없음

### promise

> - 강의 주소 : [프로미스 개념부터 활용까지 JavaScript Promise](https://youtu.be/JB_yU6Oe2eE)
> - 실습 파일 : [promise](./promise.html)

- 프로미스 : 어떤 기능을 수행하고, 성공했다면 처리된 결과 전달, 문제가 발생했다면 에러를 전달한다.

  > ex. 강의 예약 시스템
  >
  > - 강의 오픈 전 예약하면 오픈 후 메세지가 감.
  > - 강의 오픈 후 실행하는 것은 기다릴 필요 없이 바로 메세지.

- 프로미스 포인트
  1. state(상태) : 기능 수행 중 / 성공 / 실패
  2. producer(제공자)와 consumer(사용자) 차이

### async await

> - 강의 주소 : [비동기의 꽃 JavaScript async 와 await 그리고 유용한 Promise APIs](https://youtu.be/aoQSOZfz3vQ)
> - 실습파일 : [async await](./async-await.html)

- async, await
  - promise대신 async 키워드를 사용할 수 있고.
  - then 대신 await 키워드를 사용할 수 있다.

> syntactic sugar : 새로운 것이 아닌, 덧붙여진 문법

- [숙제(async awit사용해보기)](./homework-async-await.html)
