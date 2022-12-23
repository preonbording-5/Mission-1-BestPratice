# 🚀 원티드 프리온보딩 WEEK 1-1 과제 (수정중)


## 📚 과제 소개 및 목적  
>1차 과제 : Best Practice

> 🙌 목적 : 완벽한 코드를 짜는 것 보다는 협업하여 동료 학습하면서 커뮤니케이션 능력을 기르자



> 🗣️ 토론 방법
- 각자의 코드를 노션에 정리해 발표
  -  디렉토리 구조와 본인이 중요하게 생각하는 포인트, 논의 사항
- 논의 주제를 과제 수행 시 나누어진 5개의 주제로 정함
- 각 주제 별 best practice에 대해 논의
   - 한 명의 코드를 베이스로 진행하기 보다 모두가 생각하는 최적의 방향을 도출하고자 함    

> ➰ 과제 진행 방법
- 팀장 정하기, 레포 생성
- 커밋 메시지 규칙 논의
- eslint, prettier 설정
- 공유 노션 페이지 개설
- 과제 진행 스케줄 정하기
- 과제 역할 분담
   - apis - 오신정, 황성택
   - 회원가입/로그인 - 김은정, 박인
   - 투두리스트 - 이민지, 최영수
   - 라우터 및 기타 업무 - 이정우
- organization 생성 후 미션 별 repository 등록
    <br/>

> 🤔 과제 수행 시 고려 사항
- 모든 팀원이 동일한 배경 지식과 코드 수준을 가지고 있는 것이 아니기 때문에, 다같이 협동하며 팀워크를 기르는 것에 집중했다.
    - pr을 이용해 보지 않은 팀원들의 위해 스터디 진행
    - cra - typescript 사용
      - export 설정 : export default 밑 
      - 함수 작성법 설정 : 화살표 함수
    - 서로 좋은 강의, 문서 자료 공유
- 커밋 메시지, 디스코드 회의 등 문서를 이용한 비동기적 소통을 꾸준히 활용했다.
- - 그 외 고려 사항 
  - `commit msg rule` 을 팀원들이 잘 지켰는지 확인
  - `README` 에 팀원들과 토론하고 고민한 내용이 잘 담겼는지 확인
  - `branch`를 `pr`로 올리는 과정들이 잘 진행이 되는지 확인


## 🖥️ 배포 링크


## 👨‍👩‍👧‍👦 팀 소개

| 이름      | 개인 Repository 주소                             |
| -------- | ---------------------------------------------- |
| 김은정     | https://github.com/eunjung0613                 |
| 박인      | https://github.com/innie0526                   |
| 오신정     | https://github.com/ShinjungOh                  |
| 이민지     | https://github.com/vanillovin                  |
| 이정우     | https://github.com/azerose                     |
| 최영수     | https://github.com/InvincibleGaren             |
| 황성택     | https://github.com/Seongtaek-H                 |

  

## ✨ 프로젝트 실행방법

```
npm install
npm start
```
 
 ## 📌 요구 사항
---

### 1. 로그인 / 회원가입

#### ✅ Assignment1

- 이메일과 비밀번호의 유효성 검사기능
  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상
  - 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 

#### ✅ Assignment2

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동
  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답
  - 응답받은 JWT는 로컬 스토리지에 저장

####  ✅ Assignment3

- 로그인 여부에 따른 리다이렉트 처리를 구현
  - 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트 

---

### 2. 투두 리스트


####  ✅ Assignment4

- `/todo`경로에 접속하면 투두 리스트의 목록 조회
- 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시
- 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가

####  ✅ Assignment5

- 투두 리스트의 수정, 삭제 기능을 구현
  - 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정
  - 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소
  - 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제

 
## 🎄 src 폴더 구조

```
📦 src
┣ 📂components
┃ ┣ 📂 register
┃ ┃ ┣ 📄 SignIn.tsx
┃ ┃ ┗ 📄 SignUp.tsx
┃ ┣ 📂 todo
┃ ┃ ┣ 📄 TodoForm.tsx
┃ ┃ ┣ 📄 TodoItem.tsx
┃ ┃ ┗ 📄 TodoList.tsx
┃ ┗ 📄 Navbar.tsx
┣ 📂 lib
┃ ┣ 📂 apis
┃ ┃ ┣ 📄 authApi.ts
┃ ┃ ┣ 📄 axiosInstance.ts
┃ ┃ ┣ 📄 axiosInterceptors.ts
┃ ┃ ┗ 📄 tokenStore.ts
┃ ┣ 📂 types
┃ ┃ ┣ 📄 index.tsx
┃ ┃ ┗ 📄 User.interface.tsx
┃ ┗ 📂 utils
┃   ┣ 📄 AcessTokenStore.tsx
┃   ┣ 📄 Getregex.tsx
┃   ┗ 📄 index.tsx
┣ 📂pages
┃ ┣ 📄 Register.tsx
┃ ┗ 📄 Todo.tsx 
┣ 📄 App.tsx
┗ 📄 index.tsx
```

<hr/>  

### ✔️commit msg

> 해당 프로젝트는 comitlint를 활용하여 다음과 같은 commit convention prefix를 가집니다.

| Prefix   | Description                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------ |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)    |
| ci       | Changes to our CI configuration files and scripts                                                      |
| docs     | Documentation only changes                                                                             |
| feat     | A new feature                                                                                          |
| fix      | A bug fix                                                                                              |
| perf     | A code change that improves performance                                                                |
| refactor | A code change that neither fixes a bug nor adds a feature                                              |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| test     | Adding missing tests or correcting existing tests                                                      |

### 📌 기술 스택 및 라이브러리
```
typescript, axios, styled-components, react-router-dom, ESLint, Prettier, Husky
```
