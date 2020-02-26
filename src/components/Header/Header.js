import React from 'react';
import styles from './Header.module.scss';

import Navigation from './Navigation';
import Button from '../Button/Button';

const Header = () => (
  <header className={styles.wrapper}>
    <Navigation></Navigation>
    <Button>Add Item</Button>
  </header>
);

export default Header;