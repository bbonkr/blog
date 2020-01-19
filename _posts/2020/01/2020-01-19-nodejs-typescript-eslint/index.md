---
title: 노드 타입스크립트 린트 구성
date: 2020-01-19
categories:
    - Configuration
tags:
    - nodejs
    - typescript
    - eslint
keywords:
    - nodejs
    - typescript
    - eslint
---

## 패키지 설치

### NPM

```shell
$ npm install --save-dev @typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint eslint-config-airbnb-base \
eslint-config-prettier \
eslint-plugin-import \
eslint-plugin-prettier \
prettier \
typescript
```

### Yarn

```shell
$ yarn add --dev @typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint eslint-config-airbnb-base \
eslint-config-prettier \
eslint-plugin-import \
eslint-plugin-prettier \
prettier \
typescript
```

## 구성

### .eslintrc

```json
{
    "parser": "@typescript-eslint/parser", // Specifies the ESLint parser
    "plugins": ["@typescript-eslint"],
    "extends": [
        "airbnb-base",
        // "plugin:@typescript-eslint/eslint-recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    "parserOptions": {
        "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
        "sourceType": "module" // Allows for the use of imports
    },
    "rules": {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "no-console": "warn"
    }
}
```

### .prettierrc

```json
{
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 120,
    "tabWidth": 4
}
```

### npm scripts

```json
"scripts": {
    "lint": "tsc --noEmit && eslint ./src/**/*.ts",
    "lint:fix": "tsc --noEmit && eslint ./src/**/*.ts --quiet --fix"
}
```

## lint

### npm

```shell
$ npm run lint
```

### yarn

```shell
$ yarn lint
```

## 규칙 관리

팀에서 필요한 규칙을 지속적으로 관리합니다.
