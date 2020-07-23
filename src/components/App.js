import React, { Component } from 'react';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component{
  state = { artistQuery: '', null };

  updateArtistQuery = event => {
    console.log('event.target.value', event.target.value);

    this.setState({ artistQuery: event.target.value });
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  }

  searchArtist = () => {
    console.log('this.state', this.state);
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
    .then(response => response.json())
    .then(json => {
      console.log('json', json);

      if (json.artist.total > 0 ) {
         const artist = json.artist.item[0];

         this.setState({ artist });
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Music Professor</h2>
        <input 
        onChange={this.updateArtistQuery} 
        onKeyPress={this.handleKeyPress}
        placeholder="Search for an artist" />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default App;
