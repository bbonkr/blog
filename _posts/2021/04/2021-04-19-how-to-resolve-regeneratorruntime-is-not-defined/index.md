---
title: How to resolve regeneratorRuntime is not defined
date: 2021-04-19
categories:
    - HowTo
tags:
    - babel
    - react
    - typescript
    - webpack
keywords:
    - babel
    - react
    - typescript
    - webpack
---

## 개요

React 를 사용해서 작성된 잘 동작하던 웹 응용프로그램이 아래와 같은 메시지를 출력하고, 멈춰버렸습니다.

```plaintext
regeneratorRuntime is not defined
```

## 환경

### 개발환경

* **node.js** `v14.16.0`
* **npm** `v.7.6.3`

### 패키지

* @babel/core v7.13.15

## 해결

[babel-plugin-transform-runtime#why](https://babeljs.io/docs/en/babel-plugin-transform-runtime#why) 페이지에서 이유와 어떻게 해야되는지 설명하고 있습니다.

[babel-plugin-transform-runtime#technical-details](https://babeljs.io/docs/en/babel-plugin-transform-runtime#technical-details) 페이지에서 자세한 기술적 설명을 제공합니다.

### 패키지 설치

```bash
$ npm install --save-dev @babel/plugin-transform-runtime
```

```bash
$ npm install --save @babel/runtime
```

설치된 패키지 버전은 아래와 같습니다.

```json
{
	// 생략
    "dependencies": {
        "@babel/runtime": "^7.13.10",
		// 생략
	},
	"devDependencies": {
        "@babel/core": "^7.13.15",
        "@babel/plugin-syntax-dynamic-import": "^7.8.3",		
	},
	// 생략
}
```

### Babel 구성 변경 

`.Babelrc` 의 예제입니다.

```json
{
	// 생략
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "regenerator": true
            }
        ],
		// 생략
	],
	// 생략
}
```

## 참조

[GitHub: cc248e6c492b6e7cc785ae48df0ecef70cc53248](https://github.com/bbonkr/apps.bbon.me/commit/cc248e6c492b6e7cc785ae48df0ecef70cc53248) 커밋에서 해결된 코드를 확인하실 수 있습니다.