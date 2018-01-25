import React, { Component } from 'react';
import './static/App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Sunrun Grid Services - Monitoring</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
