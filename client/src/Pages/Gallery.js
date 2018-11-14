import React from 'react';
import Slider from "react-slick";
import {Translate} from 'react-localize-redux';
import Base from '../Components/Base';
import Photo from '../Components/Photo';
import PhotoLightbox from '../Components/PhotoLightbox';

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

    constructor(props){
        super(props);

        this.state = {
            fullSizePicture : false,
            currentPhoto: {},
            galleryPhotos: []
        };
        this.ToggleFullSizeImage = this.ToggleFullSizeImage.bind(this)
        this.handleOutsideClick = this.handleOutsideClick.bind(this)
    }

    componentWillMount(){
        const galleryPhotos = [
            {
                photoId: 1,
                cover1x: id1photo1x,
                cover2x: id1photo2x,
                cover3x: id1photo3x
            },
            {
                photoId: 2,
                cover1x: id2photo1x,
                cover2x: id2photo2x,
                cover3x: id2photo3x
            },
            {
                photoId: 3,
                cover1x: id3photo1x,
                cover2x: id3photo2x,
                cover3x: id3photo3x
            },
            {
                photoId: 4,
                cover1x: id4photo1x,
                cover2x: id4photo2x,
                cover3x: id4photo3x
            },
            {
                photoId: 5,
                cover1x: id5photo1x,
                cover2x: id5photo2x,
                cover3x: id5photo3x
            },
            {
                photoId: 6,
                cover1x: id6photo1x,
                cover2x: id6photo2x,
                cover3x: id6photo3x
            }
        ];

        this.setState({
            galleryPhotos: galleryPhotos
        });
        document.addEventListener('click', this.handleOutsideClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, false);
    }
    handleOutsideClick(e){
        if (e.target.className === 'photo-lightbox' ||e.target.className === 'icon-close-lightbox') {
            this.setState({
                fullSizePicture: !this.state.fullSizePicture,
                currentPhoto: null
            })
        }
    }

    ToggleFullSizeImage(e){
        let number = e.target.id;
        let currentPic = this.state.galleryPhotos[number-+1];
        this.setState({
            fullSizePicture: !this.state.fullSizePicture,
            currentPhoto: currentPic
        })
    }

    render() {
        const settings = {
            className: "center",
            infinite: false,
            // centerPadding: "60px",
            slidesToShow: 4,
            centerPadding: 0,
            arrows: false,
            swipeToSlide: true,
            variableWidth: true
        };

        return (
            <Base>
                <div className="main gallery-content">
                    <h1><Translate id="content.gallery.headline">Gallery</Translate></h1>
                    <h2><Translate id="content.gallery.instruction">DRAG TO MOVE</Translate></h2>

                    {this.state.fullSizePicture?
                        <PhotoLightbox
                        currentPicture1x={this.state.currentPhoto.cover1x}
                        currentPicture2x={this.state.currentPhoto.cover2x}
                        currentPicture3x={this.state.currentPhoto.cover3x}
                        />  : null}

                    <div className="sliderController">
                        <Slider {...settings}>
                            {this.state.galleryPhotos.map((photo) => (
                                <Photo
                                    key={photo.photoId}
                                    photoId={photo.photoId}
                                    cover1x={photo.cover1x}
                                    cover2x={photo.cover2x}
                                    cover3x={photo.cover3x}
                                    ToggleFullSizeImage={this.ToggleFullSizeImage}
                                />
                                ))
                             }
                        </Slider>
                    </div>
                </div>
            </Base>
        )
    }
}


export default Gallery;