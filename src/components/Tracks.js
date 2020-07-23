import React, { Component } from 'react';

class Tracks extends Component {
      state = { playing: false, audio: null };

     playAudio = previewUrl => () => {
         const audio = new Audio(previewUrl);

         if (!this.state.playing) {
            audio.play();
            this.setState({ playing: true, audio });
         } else {
          this.state.audio.pause();
          this.setState({ playing: false });
         }
        }

    render() {
        const { tracks } = this.props;

        return (
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;

                         return (
                             <div key={id} onClick={this.playAudio(preview_url)}>
                                 <img src={album.images[0].url} alt="track-image" />
                                 <p>{name}</p>
                             </div>
                         )
                    })
                }
            </div>
        )
    }
}

export default Tracks;