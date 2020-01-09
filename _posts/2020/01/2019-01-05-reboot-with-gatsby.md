---
title: 개츠비로 블로그 추가
date: 2020-01-05
categories:
    - HowTo
tags:
    - gatsby
    - wordpress
    - blog
keywords:
    - gatsby
    - wordpress
    - blog
---

개츠비로 블로그를 추가하기 위한 사전 작업을 진행합니다.

마크다운으로 글을 작성하고, 하나의 소스로 여러 사이트의 게시물을 게시할 수 있을 때까지 진행합니다.

## 코드

```typescript
import React from 'react';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faUserCircle, faAt, faMapMarkerAlt, faLink, faAddressCard, faRss } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './bio.scss';
// const config = require('../../../config');
import { config } from '../../../config';

const Bio = () => {
    const { comment, name, company, location, email, website, linkedin, facebook, instagram, github } = config;

    return (
        <div className="bio">
            {!comment ? null : <span className="comment">{comment}</span>}

            {!name ? null : (
                <div className="bio-item name">
                    <div className="icon-wrap">
                        <Fa icon={faUserCircle} />
                    </div>
                    <span>{name}</span>
                </div>
            )}

            {!company ? null : (
                <div className="bio-item company">
                    <div className="icon-wrap">
                        <Fa icon={faAddressCard} />
                    </div>
                    <span>{company}</span>
                </div>
            )}

            {!location ? null : (
                <div className="bio-item location">
                    <div className="icon-wrap">
                        <Fa icon={faMapMarkerAlt} />
                    </div>
                    <span>{location}</span>
                </div>
            )}

            {!email ? null : (
                <div className="bio-item email">
                    <div className="icon-wrap">
                        <Fa icon={faAt} />
                    </div>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            )}

            {!website ? null : (
                <div className="bio-item website">
                    <div className="icon-wrap">
                        <Fa icon={faLink} />
                    </div>

                    <a href={website} target="_blank" rel="noopener noreferrer">
                        {website}
                    </a>
                </div>
            )}

            <div className="social">
                <a href={`${config.siteUrl}/rss`} target="_blank" rel="noopener noreferrer">
                    <Fa icon={faRss} className="rss" />
                </a>

                {!linkedin ? null : (
                    <a href={`${linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Fa icon={faLinkedin} className="linkedin" />
                    </a>
                )}

                {!facebook ? null : (
                    <a href={facebook} target="_blank" rel="noopener noreferrer">
                        <Fa icon={faFacebook} className="facebook" />
                    </a>
                )}
                {!instagram ? null : (
                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                        <Fa icon={faInstagram} className="instagram" />
                    </a>
                )}
                {!github ? null : (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <Fa icon={faGithub} className="github" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Bio;
```

## 포함

### YouTube

https://youtu.be/b2d_0HSqBMY

➡️ Work

### Twitter

https://twitter.com/bbonkr/status/1209685204509560832

➡️ Work

### Facebook

https://www.facebook.com/photo.php?fbid=2895172780514666&set=a.344637782234858&type=3

➡️ Does not work

### Instagram

https://www.instagram.com/p/B3lws7IAUr-/?utm_source=ig_web_button_share_sheet

➡️ Does not work
