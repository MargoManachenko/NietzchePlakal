import React from 'react';

const PhotoLightbox =(props)=>(
    <div className="photo-lightbox">
        <div className="photo-container">
            <img className="icon-close-lightbox" src="https://image.flaticon.com/icons/svg/61/61155.svg"  alt=""/>
            <div className="photo">
                <img src={props.currentPicture1x} srcSet={`${props.currentPicture2x} 2x, ${props.currentPicture3x} 3x`} alt=""/>
            </div>
        </div>
    </div>
);

export default PhotoLightbox;