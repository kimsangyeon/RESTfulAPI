# RESTfulAPI

<br>

## REST
REST란 **Representatinal State Transfer**의 약자로 '대표적 상태 전달'로 해석될 수 있습니다. <br>
상태란 전달되는 자원 (Resource)라고 할 수 있겠고, 대표적이라는 것은 자원을 가리키는 이름이라고 할 수 있겠습니다. 간단한 예로 고양이 들의 데이터를 관리한다고 하였을때 자원은 고양이들의 정보가 되고 고양이를 가리키는 Resource cats가 대표적인 이름입니다. Resource 이름은 보통 복수형을 사용하고 추상적인 것보다는 구체적인 이름이 좋다고 합니다. <br>
ex) animals 보다는 cats <br>

<br>

정리를 하자면 위와 같이 이름을 짓고 데이터들의 상태를 전달 하는 것이 REST라고 할 수 있겠습니다. 전달하는 방법은 **CRUD**, Create, Read, Update, Delete 형태로 사용합니다. <br>

<br>

REST는 Resource와 Verbs 자원과 전달로 구성된 형태라고 할 수 있을 것 같습니다. 전달되는 데이터의 형태는 JSON 혹은 XML을 많이 사용합니다.<br>

<br><br>

### REST 특징
- 클라이언트와 서버 구조 : 자원이 있는 곳이 서버이고 이를 요청하는 쪽이 클라이언트 입니다.
- 무상태성 : 서버는 요청에 대한 상태를 기억하지 않습니다. 요청마다 별개의 작업으로 처리합니다. 불필요한 정보를 관리하지 않으므로 구현이 단순해집니다.
- 캐시 : http를 그대로 사용하기 때문에 캐시를 사용할 수 있습니다. Last-Modified, E-Tag를 활용하여 캐시 가능
- 유니폼 인터페이스 : URI에 대한 리소스 처리를 한정된 인터페이스를 사용합니다.
- 계층형 구조 : REST API는 다중계층으로 구성될 수 있다. 보안, 로드 밸런싱, 암호화 계층 등을 추가 사용 가능합니다.
- 자체 표현 : REST API 메세지만 보고도 어떤 동작인지 쉽게 이해 가능합니다.

<br>

#### 한정된 인터페이스
한정된 인터페이스란 규칙된 표현으로 자원에 쉽게 접근 가능하도록 해주는 것을 말합니다. <br>
- 기존 URL : www.github.com?auth=admin
- REST API : www.github.com/admin

<br>

여기서 www.github.com/auth를 Verb 동작을 달리하여 하나의 표현으로 여러 동작 가능
- GET : 관리자 페이지 조회
- POST : 관리자 페이지 생성
- PUT : 관리자 페이지 수정
- DELETE : 관리자 페이지 삭제

<br><br>
 
### RESTful
REST를 정의하는 방식은 따로 가이드라인이 없다고 합니다. RESTful은 REST를 정의하는 비공식적 가이드라고 합니다. 반드시 지켜야 하는 것은 아니지만 여러 의견들을 모아 효율적으로 정의하기위해 만들었다고 합니다. <br>

<br>

RESTful 정의는 명사 복수형을 사용하는 형태로 사용하며 id는 특정 자원을 나타내는 고유 값으로 사용합니다. <br>
- GET : /resource
- GET : /resource/id
- POST : /resource
- PUT : /resource/id
- DELETE : /resource/id

<br>

RESTful은 REST를 정의하는 하나의 수단이지 이를 사용하지 않는다고 해서 틀린 것은 아닙니다. GET은 조회, POST는 생성, PUT은 수정, DELETE는 삭제의 용도로 사용합니다.<br>
간단한 예로 이미지를 조회한다고 했을때

- RESTful : [GET] /images/id
- 비 RESTful : [POST] /getImages

<br>

비 RESTful의 경우 조회하는 동작에서 POST를 사용하여 이미지를 가져오는 방식을 사용할 수 있습니다. <br>

<br>

#### RESTful 특징
- 통일성 : 정해진 규칙으로 api를 작성하기 때문에 통일성 있게 api 작성이 가능해 집니다.
- 확장성 : 한정된 인터페이스로 api를 표현하기 때문에 확장성에 용이 합니다. GET으로 조회만 있는 api에서 같은 표현의 api를 사용하여 수정(PUT), 삭제(DELETE) 등 동작 추가가 용의합니다.

<br><br>
