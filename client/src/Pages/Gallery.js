import React from 'react';
import Slider from "react-slick";
import {Translate} from 'react-localize-redux';
import Base from '../Components/Base';

import id1photo1x from '../public/gallery/1.jpg';
import id1photo2x from '../public/gallery/1@2x.jpg';
import id1photo3x from '../public/gallery/1@3x.jpg';

import id2photo1x from '../public/gallery/2.jpg';
import id2photo2x from '../public/gallery/2@2x.jpg';
import id2photo3x from '../public/gallery/2@3x.jpg';

import id3photo1x from '../public/gallery/3.jpg';
import id3photo2x from '../public/gallery/3@2x.jpg';
import id3photo3x from '../public/gallery/3@3x.jpg';

import id4photo1x from '../public/gallery/4.jpg';
import id4photo2x from '../public/gallery/4@2x.jpg';
import id4photo3x from '../public/gallery/4@3x.jpg';

import id5photo1x from '../public/gallery/5.jpg';
import id5photo2x from '../public/gallery/5@2x.jpg';
import id5photo3x from '../public/gallery/5@3x.jpg';

import id6photo1x from '../public/gallery/6.jpg';
import id6photo2x from '../public/gallery/6@2x.jpg';
import id6photo3x from '../public/gallery/6@3x.jpg';

class Gallery extends React.Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            // centerPadding: "60px",
            slidesToShow: 4,
            centerPadding: 0,
            arrows: false,
            swipeToSlide: true,
            variableWidth: true,
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: red; color: white`
                );
            }
        };
        return (
            <Base>
                <div className="main gallery-content">
                    <h1><Translate id="content.gallery.headline">Gallery</Translate></h1>
                    <h2><Translate id="content.gallery.instruction">DRAG TO MOVE</Translate></h2>
                    <div className="sliderController">
                        <Slider {...settings}>
                            <div className="photo">
                                <img src={id1photo1x} srcSet={`${id1photo2x} 2x, ${id1photo3x} 3x`} alt=""/>
                                <div className="fade">
                                    <p>view</p>
                                </div>
                            </div>
                            <div className="photo">
                                <img src={id2photo1x} srcSet={`${id2photo2x} 2x, ${id2photo3x}`} alt=""/>
                                <div className="fade">
                                    <p>view</p>
                                </div>
                            </div>
                            <div className="photo">
                                <img src={id3photo1x} srcSet={`${id3photo2x} 2x, ${id3photo3x}`} alt=""/>
                                <div className="fade">
                                    <p>view</p>
                                </div>
                            </div>
                            <div className="photo">
                                <img src={id4photo1x} srcSet={`${id4photo2x} 2x, ${id4photo3x}`} alt=""/>
                                <div className="fade">
                                    <p>view</p>
                                </div>
                            </div>
                            <div className="photo">
                                <img src={id5photo1x} srcSet={`${id5photo2x} 2x, ${id5photo3x}`} alt=""/>
                                <div className="fade">
                                    <p>view</p>
                                </div>
                            </div>
                            <div className="photo">
                                <img src={id6photo1x} srcSet={`${id6photo2x} 2x, ${id6photo3x}`} alt=""/>
                                <div className="fade">
                                    <p>view</p>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </Base>
        )
    }
}


export default Gallery;