import React, { Component } from 'react';

class Tracks extends Component {
    render() {
        const { tracks } = this.props;

        return (
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album } = track;

                         return (
                             <div key={id}>
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