import React from 'react';
import './ListWrapper.css';

import ListItem from './ListItem/ListItem';
import { twitterAccounts } from '../../data/twitterAccounts';


const ListWrapper = () => (
  <ul className="listWrapper__wrapper">
    <ListItem
      image={twitterAccounts[0].image}
      name={twitterAccounts[0].name}
      description={twitterAccounts[0].description}
    />
  </ul>
);

export default ListWrapper;