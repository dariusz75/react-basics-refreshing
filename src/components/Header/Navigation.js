import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.navigationItem}>
        <NavLink exact className={styles.link} activeClassName={styles.activeLink} to="/">Twitters</NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink className={styles.link} activeClassName={styles.activeLink} to="/articles">Articles</NavLink>
      </li>
      <li className={styles.navigationItem}>
        <NavLink className={styles.link} activeClassName={styles.activeLink} to="/notes">Notes</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;