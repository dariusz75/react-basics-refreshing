import React from 'react';
import './Root.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';



const initialStateArray = [
  {
    image: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
    name: 'Dan Abramov',
    twitterLink: 'https://twitter.com/dan_abramov',
  },
  {
    image: 'https://pbs.twimg.com/profile_images/1166030195834273794/pBb6hjVb_400x400.jpg',
    name: 'Ryan Florence',
    description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    twitterLink: 'https://twitter.com/ryanflorence',
  }
];

class Root extends React.Component {

  state = {
    items: [...initialStateArray],
    isModalOpen: true,
  }

  openModalHandler = () => {
    this.setState({
      isModalOpen: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isModalOpen: false
    });
  }

  addItem = (e) => {
    e.preventDefault();

    const newItam = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    }

    this.setState(prevState => ({
      items: [...prevState.items, newItam]
    }));

    e.target.reset();

  }

  render() {

    const isModalOpen = this.state.isModalOpen;

    return (
      <div className="App">
        <BrowserRouter>
          <>
            <Header openModal={this.openModalHandler} />
            <h1>Hello World!</h1>
            <Switch>
              <Route exact path="/" component={TwittersView} />
              <Route path="/articles" component={ArticlesView} />
              <Route path="/notes" component={NotesView} />
              <Route path="/notes/:id" component={NotesView} />
            </Switch>
            {isModalOpen && <Modal closeModal={this.closeModalHandler} />}
          </>
        </BrowserRouter>
      </div>
    );
  }

}


export default Root;
