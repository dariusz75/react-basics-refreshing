import React from 'react';
import './ListWrapper.css';

import ListItem from './ListItem/ListItem';

const ListWrapper = (props) => (
  <ul className="listWrapper__wrapper">
    {props.items.map(item => (
      <ListItem
        key={item.name}
        image={item.image}
        name={item.name}
        description={item.description}
        link={item.twitterLink}
      />
    ))
    }
  </ul>
);

export default ListWrapper;