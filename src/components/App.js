import React, { Component } from 'react';

class App extends Component{
  state = { artistQuery: '' };

  render() {
    return (
      <div>
        <h2>Music Professor</h2>
        <input placeholder="Search for an artist" />
        <button>Search</button>
      </div>
    );
  }
}

export default App;
