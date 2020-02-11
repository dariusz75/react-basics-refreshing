import React from 'react';
import './ListItem.css';

import danAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => (
  <li className="listItem__wrapper">
    <img className="listItem__image" src={danAbramovImage} />
    <div>
      <h2 className="listItem__name">Dan Abramov</h2>
      <p className="listItem__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptate minus at soluta esse voluptatum quam eligendi dolore,
        ipsa explicabo, alias in numquam tempore totam inventore vero
        perspiciatis recusandae id nulla.
      </p>
      <button className="listItem__button">Visit Twitter page</button>
    </div>
  </li>
);

export default ListItem;