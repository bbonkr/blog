---
title: Windows 10 WSL 2 에서 Git 문제
date: 2020-01-16
categories:
    - Configuration
tags:
    - windows-10
    - wsl-2
    - git
keywords:
    - "windows 10"
    - "wsl 2"
    - git
---

Windows 10 에서 WSL2 를 활성화한 후 Ubuntu 18.04 에서 Git 로컬 저장소로 이동하면 우선 응답이 느립니다.

느린 것은 큰 문제가 아닌데, 저장소 상태를 확인하니, 모두 변경된 상태로 출력됩니다.

![변경사항이 없는 로컬 저장소인데 ...](./001.png)

```shell
$ git status
현재 브랜치 master
브랜치가 'origin/master'에 맞게 업데이트된 상태입니다.

커밋하도록 정하지 않은 변경 사항:
  (무엇을 커밋할지 바꾸려면 "git add <파일>..."을 사용하십시오)
  (작업 폴더의 변경 사항을 버리려면 "git checkout -- <파일>..."을 사용하십시오)
        수정함:        README.md
        수정함:        _styles/style.css

커밋할 변경 사항을 추가하지 않았습니다 ("git add" 및/또는 "git commit -a"를
사용하십시오)
```

[Git status shows files as modified #2900
](https://github.com/microsoft/WSL/issues/2900) 이슈 페이지의 해결방법을 보니, 줄바꿈 문자 처리 때문으로 보입니다. 

```shell
$ git config --global core.autocrlf true
$ git config --global core.filemode false
```

![정상적으로 상태가 출력](./002.png)

