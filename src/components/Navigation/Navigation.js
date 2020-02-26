import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navigationItem}><Link to="/">Twitters</Link></li>
      <li className={styles.navigationItem}><Link to="/articles">Articles</Link></li>
      <li className={styles.navigationItem}><Link to="/notes">Notes</Link></li>
    </ul>
  </nav>
);

export default Navigation;