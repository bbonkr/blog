# 개요

워드프레스로 동작하고 있는 [bbon.kr](https://bbon.kr) 블로그를 Gatsby로 정적 사이트로 게시하기 위한 프로젝트를 시작합니다.

[![Netlify Status](https://api.netlify.com/api/v1/badges/a02674d9-dde8-433d-b41b-bf4ab0cd2046/deploy-status)](https://app.netlify.com/sites/ecstatic-ptolemy-fdde61/deploys)

네트리파이에서 파일을 제공합니다.

[dev.bbon.kr](https://dev.bbon.kr) 에서 확인할 수 있습니다.

# 구성

## 원본

[@junhobaik](https://github.com/junhobaik) 님께서 공개하신 [**Borderless**](<https://github.com/junhobaik/junhobaik.github.io/wiki/Document-(Borderless)>)에서 시작합니다.

## 게시

빌드를 확인하고, master 브랜치로 병합하면 네트리파이에서 빌드가 시작됩니다.

```
yarn build
```

> yarn deploy 를 사용하지 마세요.
>
> github pages 를 사용하지 않습니다.

## 작업

### 아이콘

2010-01-10

사이트 아이콘이 출력되지 않아 아이콘 파일을 `static/` 으로 이동하고, Layout 컴포넌트를 변경합니다.

### 태그 목록

2020-01-05

태그 목록에서 게시물 목록의 태그를 클릭했을 때, 위쪽의 태그목록이 변경되도록 합니다.

[gatsby-remark-embedder](https://www.gatsbyjs.org/packages/gatsby-remark-embedder/?=embeded) 추가합니다.
