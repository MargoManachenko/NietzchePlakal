import React from 'react';
import close from '../public/close.svg';
import {Transition} from 'react-transition-group';


const PhotoLightbox = (props) => (
    <Transition timeout={100} in={props.show} appear>
        {(status => (
            <div className={"photo-lightbox " + status} id="photo-lightbox">
                <div className="photo-container">
                    <img className="icon-close-lightbox" src={close} alt=""/>
                    {/*<div className="photo">*/}
                    {/*<img className="bigPhoto" src={props.currentPictureBig1x} srcSet={`${props.currentPictureBig2x} 2x, ${props.currentPictureBig3x} 3x`} alt=""/>*/}
                    <img className="bigPhoto loading" src={props.currentPictureBig} alt=""
                         onLoad={() => console.log('loaded')}/>
                    {/*</div>*/}
                </div>
            </div>
        ))}
    </Transition>
);

export default PhotoLightbox;