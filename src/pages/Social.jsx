import React from 'react';
import { Codepen, Twitter, Linkedin, GitHub, Dribbble } from 'react-feather';

import styles from './Social.module.css';

const Social = ({ mouseEnter, mouseLeave }) => {
  return (
    <div className={styles.social_links}>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href='http://twitter.com/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Twitter profile link'
      >
        <Twitter />
      </a>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href='http://github.com/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub profile link'
      >
        <GitHub />
      </a>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href='https://www.linkedin.com/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn Prfile link'
      >
        <Linkedin />
      </a>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href=' https://dribbble.com/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Dribbble profile link'
      >
        <Dribbble />
      </a>
      <a
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        href='https://codepen.io/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Codepen profile link'
      >
        <Codepen />
      </a>
    </div>
  );
};

export default Social;
