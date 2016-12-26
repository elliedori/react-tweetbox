import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

var TweetBox = React.createClass({
  getInitialState: function() {
  return {
      text: ""
    };
  },
  handleChange: function(event) {
  this.setState({text: event.target.value});
  },
  render: function() {
    return (
      <div className="well clearfix">
        <textarea className="form-control" onChange={this.handleChange}></textarea>
        <br/>
        <span>{140 - this.state.text.length}</span>
        <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>
      </div>
    );
  }
});

ReactDOM.render(
  <TweetBox />,
  document.getElementById("container")
);