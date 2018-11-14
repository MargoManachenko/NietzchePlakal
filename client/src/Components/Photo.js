import React from 'react';

const Photo = (props) => (
    <div className="photo">
        <img src={props.cover1x} srcSet={`${props.cover2x} 2x, ${props.cover3x} 3x`} alt=""/>
        <div className="fade" id={props.photoId} onClick={props.ToggleFullSizeImage}>
            <p>view</p>
        </div>
    </div>
);

export default Photo;