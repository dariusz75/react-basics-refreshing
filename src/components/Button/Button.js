import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, href, primary, secondary, ...props }) => {

  const buttonClass = primary ? styles.buttonPrimary : secondary ? styles.buttonSecondary : styles.button;

  const aTag = () => (
    <a
      className={buttonClass}
      href={href}
      target="_blank"
      rel="noopener noreferrer" >
      {children}
    </a >);

  const buttonTag = () => (
    <button type="submit"
      className={buttonClass}
      {...props}
    >
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