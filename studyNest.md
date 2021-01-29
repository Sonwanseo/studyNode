# 2021-01-29 ~ 

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
 
