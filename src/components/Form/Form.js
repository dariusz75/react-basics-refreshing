import React from 'react';
import styles from './form.module.scss';

import Button from './../Button/Button';

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <h3>Add new twitter account</h3>
    <form className={styles.form__form} onSubmit={submitFn}>
      <div className={styles.form__item}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" "
          maxLength="30"
          required
        />
        <label htmlFor="name">Name</label>
        <div className={styles.forms__item__bar}></div>
      </div>
      <div className={styles.form__item}>
        <input
          type="text"
          name="link"
          id="link"
          placeholder=" "
          required
        />
        <label htmlFor="link">Link</label>
        <div className={styles.forms__item__bar}></div>
      </div>
      <div className={styles.form__item}>
        <input
          type="text"
          name="image"
          id="image"
          placeholder=" "
        />
        <label htmlFor="image">Image</label>
        <div className={styles.forms__item__bar}></div>
      </div>
      <div className={styles.form__item}>
        <textarea
          name="description"
          id="description"
          placeholder=" "
          required
        />
        <label htmlFor="description">Description</label>
        <div className={styles.forms__item__bar}></div>
      </div>
      <Button primary >Add new Item</Button>
    </form>
  </div>
);

export default Form;