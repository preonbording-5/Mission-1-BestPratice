# Getting Started with Create React App

> 빠른 개발환경 셋팅을 위한 보일러플레이트입니다

## Start

```
npm install
npm prepare
```

## Available Scripts

> 프로젝트안에서 다음과 같은 스크립트를 실행할 수 있습니다.

### `npm prepare`

:: husky를 설치합니다

### `npm start`

:: dev server를 실행합니다

### `npm test`

:: 작성된 테스트를 실행합니다

### `npm run build`

::: build를 실행합니다

### `npm run lint`

:: src/ 이하에 존재하는js,jsx,ts,tsx의 확장자를 가진 파일의 lint check 합니다.

### `npm run lint:fix`

:: src/ 이하에 존재하는 js,jsx,ts,tsx의 확장자를 가진 파일을 lint check하고 fix 합니다.

### `npm run format`

:: src/ 이하에 존재하는 js,jsx,ts,tsx,css,md,json 확장자를 가진 파일을 prettierrc의 config에 맞게 수정합니다

## husky

### pre-push

> 해당 프로젝트는 push하기전 build를 진행합니다.

```
npm run build
```

### pre-commit

> 해당 프로젝트는 commit을 하기전 lint, format script를 실행합니다.

```
npm run lint
npm run format
```

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
