import React from 'react';
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

export default ListItem;