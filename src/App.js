import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './state/action-creators/simpleAction';

import logo from './logo.svg';
import './App.css';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

class App extends Component {

  handleButtonClick = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, Chegg App</h1>
          <button onClick={this.handleButtonClick}>redux test</button>
        </header>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);