import React from 'react';

class MyClassComponent extends React.Component {
  state = {
    text: 'This text comes from state.',
    inputText: 'Input text will change'
  }

  onChangeHandler = (event) => {
    this.setState({ inputText: event.target.value });
  }

  render() {
    return (
      <>
        <h1>The basic class component</h1>
        <h2>{this.state.text}</h2>
        <input
          type="text"
          placeholder="Enter your text"
          onChange={this.onChangeHandler}
        />
        <h5>{this.state.inputText}</h5>
      </>
    );
  }
}

export default MyClassComponent;