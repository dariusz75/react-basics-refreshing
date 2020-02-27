import React from 'react';
import styles from './Modal.module.scss';

import Form from './../Form/Form';

const Modal = (props) => (
  <div className={styles.wrapper}>
    <button className={styles.closeModal} onClick={props.closeModal}>x</button>
    <Form />
  </div>
);

export default Modal;