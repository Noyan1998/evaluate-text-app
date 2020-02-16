import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import NewsLink from './components/NewsLink';
import EntityExtraction from './components/EntityExtraction';

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: '',

    }
  }
  render() {
    return(
      <div>
        <Welcome />
        <NewsLink />
        <EntityExtraction />
      </div>
    );
  }
}

export default App;
