import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';


const ListItem = (props) => {

  const ImageTag = props.image ? 'img' : 'div';

  return (
    <li className={styles.wrapper}>
      <ImageTag
        className={props.image ? styles.image : styles.imageNone}
        src={props.image}
        alt={props.name}
      />
      <div>
        <h2 className={styles.name}>{props.name}</h2>
        <p className={styles.description}>{props.description}</p>
        <a
          className={styles.button}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer">
          Visit Twitter page
        </a>
      </div>
    </li>
  );

};

ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired
};

ListItem.defaultProps = {
  description: 'This is an example of default description from defaultProps. To make it working we removed description from Dan Abramov object',
  image: null
};

export default ListItem;