import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, href }) => {

  const aTag = () => (
    <a className={styles.button}
      href={href}
      target="_blank"
      rel="noopener noreferrer" >
      {children}
    </a >);

  const buttonTag = () => (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );

  return (
    <>
      {href ? aTag() : buttonTag()}
    </>
  );
};

export default Button;