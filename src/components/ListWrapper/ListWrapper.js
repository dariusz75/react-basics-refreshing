import React from 'react';
import './ListWrapper.css';

import ListItem from './ListItem/ListItem';
import { twitterAccounts } from '../../data/twitterAccounts';


const ListWrapper = () => (
  <ul className="listWrapper__wrapper">
    {twitterAccounts.map(item => (
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