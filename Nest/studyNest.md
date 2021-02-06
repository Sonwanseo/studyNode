# 2021-01-29 ~ 2021-02-02

## studyNest

Nest.js는 Expres 위에서 동작하는 Node.js 프레임워크  
기존 Node.js 프레임워크는 구조가 없어서 자유로운 구조를 취할 수 있다는 장점이 있음  
하지만, 이는 규모가 큰 프로젝트나 팀 프로젝트를 할 때 단점으로 작용할 수 있음

Nest.js는 구조가 있음

npm i -g @nestjs/cli  
nest new  
위 명령어로 nest 프로젝트 생성 가능

nest의 구조
- main.ts는 express에서 server.js와 같은 개념  
NestFactory.create(모듈)로 nest 모듈 생성
- 모듈: nest 프로젝트에서 controllers와 services를 모아 NestFactory.create에 전달  
index.js 같은 개념
- 컨트롤러(controllers): url을 받아 함수를 호출하는 로직
- 서비스(services || providers): 비즈니스 로직을 담당하는 파일

데코레이터 바로 아래에 클래스 또는 함수가 존재해야 함  
@Get, @Post와 같이 데코레이터를 이용하여 HTTP 메소드 정의 가능

@Params를 이용하여 파라미터를 가져올 수 있음  
@Body를 이용하여 request.body를 가져올 수 있음  
@Query를 이용하여 쿼리스트링을 가져올 수 있음

~.spec.ts 파일은 테스트를 위한 파일
 
DTO(Data Transfer Object): 비즈니스 모델 객체의 구조를 정의

DTO를 쓰는 이유
- 코드를 더 간결하게 만듦
- NestJS가 들어오는 쿼리에 대해 유효성 검사를 할 수 있게 해줌

파이프: 코드가 지나가는 통로  
Express에서 미들웨어와 비슷한 개념

main.ts에서 new ValidatePipe의 옵션으로 여러 가지를 넣어줄 수 있음  
그 중 하나가 transform  
transform: true를 하면 사용자가 입력한 값을 코드가 원하는 타입으로 변환해줌

DTO 파일에서 프로퍼티에 ?를 붙임으로써 필수 값이 아닌 값으로 만들 수 있음

위 코드를 PartialType으로 대체 가능
DTO를 변환하는 것을 도와줌

app.module.ts는 다른 세부 모듈을 import하는 방식으로 사용  
app.module.ts에 다른 세부 모듈을 import하여 사용하면 Nest가 하나의 큰 모듈로 변환함

Nest는 Express 위에서 작동하기 때문에 controller에서 req, res가 필요하면 사용 가능  
@Req, @Res decorator를 이용하여 접근 가능

Nest는 Express 뿐만 아니라 Fastify 위에서도 작동  
그렇기 때문에 Express의 req, res 등의 객체를 사용하는 것은 좋은 방법이 아님  
Express에서 Fastify로 전환할 때 작동이 멈추게 됨

Nest는 기본적으로 Jest를 테스팅 라이브러리로 채택  
.spec.ts 파일은 Jest가 테스팅을 할 때 찾아볼 수 있도록 설정되어 있음  

테스트 종류
- 유닛테스트: 각각의 함수를 따로 테스트하는 것
- end-to-end(e2e): 모든 시스템을 테스트하는 것

Nest는 테스팅을 할 때마다 애플리케이션을 생성함
