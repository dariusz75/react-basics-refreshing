import React from 'react';

class MyClassComponent extends React.Component {
  state = {
    text: 'This text comes from state.',
    inputText: ''
  }

  onChangeHandler = (event) => console.log(event.target.value);

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
        <h2>{this.state.inputText}</h2>
      </>
    );
  }
}

export default MyClassComponent;