import React, { Component } from 'react';

class Tracks extends Component {
    render() {
        const { tracks } = this.props;

        return (
            <div>
                {
                    tracks.map(track => {
                        const { track, name } = track;
                        
                    })
                }
            </div>
        )
    }
}