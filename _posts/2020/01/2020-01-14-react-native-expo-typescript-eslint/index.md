---
title: 엑스포 타입스크립트 린트 구성
date: 2020-01-14
categories:
    - Configuration
tags:
    - react-native
    - expo
    - typescript
    - eslint
keywords:
    - react-native
    - expo
    - typescript
    - eslint
---

## 패키지 설치

### npm

```shell
$ npm install --save-dev eslint prettier eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-prettier @react-native-community/eslint-config @react-native-community/eslint-plugin
```

### yarn

```
$ yarn add eslint prettier eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-prettier @react-native-community/eslint-config @react-native-community/eslint-plugin --dev
```

## 구성

### .eslintrc

```json
{
    "root": true,
    "extends": [
        "@react-native-community",
        "airbnb-typescript",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react"
    ],
    "rules": {
        "@typescript-eslint/no-use-before-define": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": "off",
        "react-hooks/exhaustive-deps": "off"
    }
}
```

### .prettierrc

```json
{
    "singleQuote": true,
    "trailingComma": "all",
    "tabWidth": 4,
    "semi": true,
    "printWidth": 80
}
```

### npm scripts

```json
"scripts" : {
	// 중략
    "lint": "tsc --noEmit && eslint --ext .js,.jsx,.ts,.tsx ./",
    "prettier": "npx prettier --write **/*.{js,jsx,ts,tsx,json} && npx prettier --write *.{js,jsx,ts,tsx,json}"
	// 중략
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
