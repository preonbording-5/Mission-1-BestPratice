# 🚀 원티드 프리온보딩 WEEK 1-1 과제 (수정 중)


## 과제 소개 및 목적  
<hr/>  

## 🖥️ 배포 링크
<hr/>   


## 👨‍👩‍👧‍👦 팀 소개
<hr/>   

## ✨ 프로젝트 실행방법

```
npm install
npm start
```
<hr/>  
## src 폴더 구조

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
### commit msg

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
|          |                                                                                                        |
