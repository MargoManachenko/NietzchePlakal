import React from 'react';
import AudioTrack from './AudioTrack';
import id1cover1x from '../public/id1cover.png';
import id1cover2x from '../public/id1cover@2x.png';
import id1cover3x from '../public/id1cover@3x.png';

import id2cover1x from '../public/id2cover.png';
import id2cover2x from '../public/id2cover@2x.png';
import id2cover3x from '../public/id2cover@3x.png';

import id3cover1x from '../public/id3cover.png';
import id3cover2x from '../public/id3cover@2x.png';
import id3cover3x from '../public/id3cover@3x.png';

import id4cover1x from '../public/id4cover.png';
import id4cover2x from '../public/id4cover@2x.png';
import id4cover3x from '../public/id4cover@3x.png';

import id5cover1x from '../public/id5cover.png';
import id5cover2x from '../public/id5cover@2x.png';
import id5cover3x from '../public/id5cover@3x.png';

import id6cover1x from '../public/id6cover.png';
import id6cover2x from '../public/id6cover@2x.png';
import id6cover3x from '../public/id6cover@3x.png';

import id7cover1x from '../public/id7cover.png';
import id7cover2x from '../public/id7cover@2x.png';
import id7cover3x from '../public/id7cover@3x.png';

import id8cover1x from '../public/id8cover.png'
import id8cover2x from '../public/id8cover@2x.png'
import id8cover3x from '../public/id8cover@3x.png'

class AudioTracksBox extends React.Component {

    constructor(props) {
        super(props);

        this.audioRefs = [];
        this.togglePlaying = this.togglePlaying.bind(this);
    }

    togglePlaying() {
        this.audioRefs.map((ref) => (
          ref.turnOff()
        ))
    }

    render() {
        const playlist = [
            {
                id: 1,
                trackName: "Venom",
                cover1x: id1cover1x,
                cover2x: id1cover2x,
                cover3x: id1cover3x,
                idTranslate: "content.music.song-1"
            },
            {
                id: 2,
                trackName: "Violet wood",
                cover1x: id2cover1x,
                cover2x: id2cover2x,
                cover3x: id2cover3x,
                idTranslate: "content.music.song-2"
            },
            {
                id: 3,
                trackName: "Money",
                cover1x: id3cover1x,
                cover2x: id3cover2x,
                cover3x: id3cover3x,
                idTranslate: "content.music.song-3"
            },
            {
                id: 4,
                trackName: "Get out",
                cover1x: id4cover1x,
                cover2x: id4cover2x,
                cover3x: id4cover3x,
                idTranslate: "content.music.song-4"
            },
            {
                id: 5,
                trackName: "Money",
                cover1x: id5cover1x,
                cover2x: id5cover2x,
                cover3x: id5cover3x,
                idTranslate: "content.music.song-5"
            },
            {
                id: 6,
                trackName: "Weekdays",
                cover1x: id6cover1x,
                cover2x: id6cover2x,
                cover3x: id6cover3x,
                idTranslate: "content.music.song-6"
            },
            {
                id: 7,
                trackName: "Emerald eyes",
                cover1x: id7cover1x,
                cover2x: id7cover2x,
                cover3x: id7cover3x,
                idTranslate: "content.music.song-7"
            },
            {
                id: 8,
                trackName: "Sh*t",
                cover1x: id8cover1x,
                cover2x: id8cover2x,
                cover3x: id8cover3x,
                idTranslate: "content.music.song-8"
            }
        ];

        return (
            <div className="songs">
                {playlist.map((track, index) => (
                    <AudioTrack
                        number={track.id + ". "}
                        idTranslate={track.idTranslate}
                        trackName={track.trackName}
                        cover1x={track.cover1x}
                        cover2x={track.cover2x}
                        cover3x={track.cover3x}
                        key={track.id}
                        onRef={ref => (this.audioRefs[index] = ref)}
                        togglePlaying={this.togglePlaying}
                    />
                ))}
            </div>


        )
    }

}

export default AudioTracksBox;