import React, { Component } from 'react';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component{
  state = { artistQuery: '', artist: null };

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
         const artist = json.artist.items[0];
         
         console.log('artist', artist);
         this.setState({ artist });

         this.setState(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
         .then(response => response.json())
         .then(json => console.log('tracks json', json))
         .catch(error => alert(error.message));
      }
    })
    .catch(error => alert(error.message));
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
