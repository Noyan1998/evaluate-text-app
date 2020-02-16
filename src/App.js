import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import NewsLink from './components/NewsLink';
import EntityExtraction from './components/EntityExtraction';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      text: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onSubmit = () => {
    this.setState({ text: this.state.input })
    fetch('http://localhost:3001/text', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(data => {
      const output = document.getElementById('output');
      output.innerHTML = `Text: ${data.text} <br/>
                          Language: ${data.language} <br/>
                          Location: ${data.entities.location} <br/>
                          Keywords: ${data.entities.keyword} <br/>
                          Person: ${data.entities.person}
                          `
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <Welcome />
        <NewsLink onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <EntityExtraction />
      </div>
    );
  }
}

export default App;
