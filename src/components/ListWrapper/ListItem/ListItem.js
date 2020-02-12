import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';


const ListItem = (props) => (
  <li className="listItem__wrapper">
    <img className="listItem__image" src={props.image} alt={props.name} />
    <div>
      <h2 className="listItem__name">{props.name}</h2>
      <p className="listItem__description">{props.description}</p>
      <a className="listItem__button" href={props.link} target="_blank">Visit Twitter page</a>
    </div>
  </li>
);

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired
};

ListItem.defaultProps = {
  description: 'This is an example of default description from defaultProps. To make it working we removed description from Dan Abramov object',
};

export default ListItem;