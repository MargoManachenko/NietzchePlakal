import React from 'react';
import Slider from "react-slick";
import {Translate} from 'react-localize-redux';
import {Transition} from 'react-transition-group';
import Base from '../Components/Base';
import Photo from '../Components/Photo';
import PhotoLightbox from '../Components/PhotoLightbox';

import id1photo1x from '../public/gallery/1.jpg';
import id1photo2x from '../public/gallery/1@2x.jpg';
import id1photo3x from '../public/gallery/1@3x.jpg';

import id2photo1x from '../public/gallery/2.jpg';
import id2photo2x from '../public/gallery/2@2x.jpg';
import id2photo3x from '../public/gallery/2@3x.jpg';
import id2photoBig1x from '../public/gallery/2Big.jpg';
import id2photoBig2x from '../public/gallery/2Big@2x.jpg';
import id2photoBig3x from '../public/gallery/2Big@3x.jpg';

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

    constructor(props) {
        super(props);

        this.state = {
            fullSizePicture: false,
            currentPhoto: {},
            galleryPhotos: [],
            showInstruction: true,
            entered: false,
            dragging: false,
            clientXonMouseDown: null,
            clientYonMouseDown: null
        };
        this.sliderRef = React.createRef();
        this.ToggleFullSizeImage = this.ToggleFullSizeImage.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.ToggleInstruction = this.ToggleInstruction.bind(this);
        this.FadeSlick = this.FadeSlick.bind(this);
        this.GetCoordinates = this.GetCoordinates.bind(this);


    }

    componentWillMount() {
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
                cover3x: id2photo3x,

                cover1xBig: id2photoBig1x,
                cover2xBig: id2photoBig2x,
                cover3xBig: id2photoBig3x

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

        setInterval(this.ToggleInstruction, 1000);
        setTimeout(this.FadeSlick, 100);
    }

    componentDidMount() {
        let sliderController = document.getElementsByClassName("sliderController")[0];
        let slick = this.sliderRef.current;
        if (sliderController) {
            sliderController.addEventListener('wheel', event => {
                event.preventDefault();
                event.deltaY > 0 ? slick.slickNext() : slick.slickPrev();
            }, false)
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    FadeSlick() {
        this.setState({entered: true});
    }

    handleOutsideClick(e) {
        if (e.target.id === 'photo-lightbox' || e.target.className === 'icon-close-lightbox') {
            this.setState({
                fullSizePicture: !this.state.fullSizePicture
            });
        }
    }

    ToggleFullSizeImage(e) {
        e.stopPropagation();
        if (this.state.clientXonMouseDown !== e.clientX ||
            this.state.clientYonMouseDown !== e.clientY) {
            e.preventDefault()
        }
        else {
            e.preventDefault();
            let number = e.target.id;
            let currentPic = this.state.galleryPhotos[number - +1];
            this.setState({
                fullSizePicture: !this.state.fullSizePicture,
                currentPhoto: currentPic
            });
        }
    }

    ToggleInstruction() {
        this.setState({
            showInstruction: !this.state.showInstruction
        })
    }

    GetCoordinates(e) {
        this.setState({
            clientXonMouseDown: e.clientX,
            clientYonMouseDown: e.clientY
        });
        e.preventDefault();
    }

    render() {
        let slickClassName;
        if (this.state.entered === true) {
            slickClassName = "center entered";
        }
        else {
            slickClassName = "center entering";
        }
        // let sliderController = document.getElementsByClassName("sliderController")[0];
        // let sliderPhoto= document.getElementsByClassName("fade")[0];
        // let slidesToShow = 3;
        // if(sliderController){
        //     slidesToShow = Math.round(sliderController.offsetWidth / sliderPhoto.offsetWidth);
        //     console.log(slidesToShow)
        // }

        const settings = {
            className: slickClassName,
            infinite: true,
            // centerPadding: "60px",
            // slidesToShow: slidesToShow-2,
            slidesToShow: 3,
            centerPadding: 0,
            arrows: false,
            swipeToSlide: true,
            variableWidth: true
        };

        return (
            <Base>
                <Transition timeout={500} in={true} appear>
                    {(status => (
                        <div className={"main gallery-content " + status}>
                            <h1 className={status}><Translate id="content.gallery.headline">Gallery</Translate></h1>

                            <h2 className={this.state.showInstruction ? "showInstruction" : "hideInstruction"}>
                                <Translate
                                    id="content.gallery.instruction">SCROLL TO MOVE</Translate></h2>

                            <PhotoLightbox
                                show={this.state.fullSizePicture}
                                currentPictureBig1x={this.state.currentPhoto.cover1xBig}
                                currentPictureBig2x={this.state.currentPhoto.cover2xBig}
                                currentPictureBig3x={this.state.currentPhoto.cover3xBig}
                            />

                            <div className={"sliderController " + status} id="slider">
                                <Slider {...settings} ref={this.sliderRef}>
                                    {this.state.galleryPhotos.map((photo) => (
                                        <Photo
                                            key={photo.photoId}
                                            photoId={photo.photoId}
                                            cover1x={photo.cover1x}
                                            cover2x={photo.cover2x}
                                            cover3x={photo.cover3x}
                                            ToggleFullSizeImage={this.ToggleFullSizeImage}
                                            timeout={photo.photoId * 400}
                                            onMouseDown={e => this.GetCoordinates(e)}
                                        />
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    ))}
                </Transition>
            </Base>
        )
    }
}


export default Gallery;