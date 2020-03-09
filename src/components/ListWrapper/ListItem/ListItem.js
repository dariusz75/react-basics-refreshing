import React from 'react';
import './ListItem.css';


const ListItem = ({ image, name, description, link }) => (
  <li className="listItem__wrapper">
    <img className="listItem__image" src={image} alt={name} />
    <div>
      <h2 className="listItem__name">{name}</h2>
      <p className="listItem__description">{description}</p>
      <a className="listItem__button" href={link} target="_blank">Visit Twitter page</a>
    </div>
  </li>
);

export default ListItem;