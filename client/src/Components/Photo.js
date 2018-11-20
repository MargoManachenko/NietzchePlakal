import React from 'react';
import {Transition} from 'react-transition-group';

const Photo = (props) => (
    <Transition timeout={props.timeout} in={true} appear>
        {(status)=>(
            <div className={"photo " + status}>
                <img src={props.cover1x} srcSet={`${props.cover2x} 2x, ${props.cover3x} 3x`} alt=""/>
                <div className="fade" id={props.photoId} onClick={props.ToggleFullSizeImage}>
                    <p>view</p>
                </div>
            </div>
        )}
    </Transition>
);

export default Photo;