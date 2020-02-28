import React from 'react';
import styles from './form.module.scss';

import Button from './../Button/Button';


class Form extends React.Component {

  state = {
    activeOption: 'twitter',
  }

  descriptions = {
    twitter: 'Add favourite Twitter account',
    article: 'Add article',
    note: 'Add note',
  }

  radioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    })
  }

  testLog = (someText) => {
    console.log(someText);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <h3>{this.descriptions[this.state.activeOption]}</h3>
        <form className={styles.form__form} onSubmit={this.props.submitFn}>
          <label className={styles.ratio} htmlFor="twitter">
            <input
              id="twitter"
              type="radio"
              checked={this.state.activeOption === 'twitter'}
              onChange={() => this.radioButtonChange('twitter')}
            />
            Twitter
          </label>
          <label className={styles.ratio} htmlFor="article">
            <input
              id="article"
              type="radio"
              checked={this.state.activeOption === 'article'}
              onChange={() => this.radioButtonChange('article')}
            />
            Article
          </label>
          <label className={styles.ratio} htmlFor="note">
            <input
              id="note"
              type="radio"
              checked={this.state.activeOption === 'note'}
              onChange={() => this.radioButtonChange('note')}
            />
            Note
          </label>
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

            {this.state.activeOption === 'twitter' ?
              <>
                <input
                  type="text"
                  name="link"
                  id="link"
                  placeholder=" "
                  required
                />
                <label htmlFor="link">Twitter link</label>
                <div className={styles.forms__item__bar}></div>
              </>
              : this.state.activeOption === 'article' ?
                <>
                  <input
                    type="text"
                    name="link"
                    id="link"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="link">Article link</label>
                  <div className={styles.forms__item__bar}></div>
                </>
                : null
            }


          </div>
          {this.state.activeOption === 'twitter' ?
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
            : null}
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
    )
  }
}



export default Form;