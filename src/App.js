import React from 'react';
import './App.css';

import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';

const initialStateArray = [
  {
    image: 'https://www.tate.org.uk/art/images/research/2148_10.jpg',
    name: 'Dan Abramov',
    twitterLink: 'https://twitter.com/dan_abramov',
  },
  {
    image: 'https://www.tate.org.uk/art/images/research/2148_10.jpg',
    name: 'Ryan Florence',
    description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    twitterLink: 'https://twitter.com/ryanflorence',
  },
  {
    image: 'https://www.tate.org.uk/art/images/research/2148_10.jpg',
    name: 'Michael Jackson',
    description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    twitterLink: 'https://twitter.com/mjackson',
  },
  {
    image: 'https://www.tate.org.uk/art/images/research/2148_10.jpg',
    name: 'Kent C. Dodds',
    description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
    twitterLink: 'https://twitter.com/kentcdodds',
  }
];

class App extends React.Component {

  state = {
    items: [...initialStateArray]
  }

  addItem = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  }

  render() {
    return (
      <div className="App">
        <ListWrapper
          items={this.state.items}
        />
        <Form submitFn={this.addItem} />
      </div>
    );
  }

}


export default App;
