/** @jsx jsx */
import React, { useState } from 'react';
import { useEffect } from 'react';
import CarouselCard from '../../common/Carousel/CarouselCard/CarouselCard'
import './Carousel.css';
import { jsx, css } from '@emotion/core'
import Puppy from '../../images/puppy.jpg';
import Goose from '../../images/goosegossip.png';

const Carousel = () => {
    const getWidth = () => window.innerWidth
    const getForegroundCardWidth = (windowWidth) => {
        if (windowWidth <= 500) return 300;
        if (windowWidth <= 768) return 400;
        else return 500;
    }
    const getBackgroundCardWidth = (windowWidth) => {
        if (windowWidth <= 500) return 200;
        if (windowWidth <= 768) return 300;
        else return 400;
    }
    const getTranslate = (index) => `translateX(${(getWidth() / 2) - (getForegroundCardWidth(getWidth()) / 2) - ((getBackgroundCardWidth(getWidth()) + 30) * index) - 15}px)`
    const [carouselIndex, setCarouselIndex] = useState(0);
    // const calculateTransform
    const [state, setState] = useState({
        container: {
            position: 'relative',
            display: 'flex',
            "flex-direction": 'row',
            width: getWidth(),
            height: '400px',
            "align-items": 'center',
            transform: getTranslate(carouselIndex),
            transition: '0.5s ease'

        }
    });
    const [carouselElements, setCarouselElements] = useState([
        {
            title: "Goose Gossip",
            image: Goose,
            description: "Goose Gossip is a full fledged chat room designed for the University of Waterloo"
        },
        { title: "More to come very soon...", },

    ]);
    const handleResize = () => {
        setState(prevState => {
            return {
                ...prevState,
                container: {
                    ...prevState.container,
                    width: getWidth(),
                    transform: getTranslate(carouselIndex)

                }
            }
        });
    }

    const handleNext = () => {
        let index = (carouselIndex + 1) % (carouselElements.length);
        setCarouselIndex(index);
    }

    const handlePrev = () => {
        let index = (carouselIndex - 1) % (carouselElements.length);
        if (index === -1) index = carouselElements.length - 1;
        setCarouselIndex(index);
    }


    useEffect(() => {
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [carouselIndex]);

    const getTypeName = (index) => (carouselIndex === index) ? 'foreground' : '';

    return (
        <div className="carousel-card-button-container">
            <div id="carousel-card-container"
                style={state.container}>
                {carouselElements.map((element, index) => (
                    <CarouselCard title={element.title} type={getTypeName(index)} image={element.image} description={element.description} />
                ))}
            </div>
            <button className="carousel-button" onClick={handleNext}><i class="fas fa-chevron-right"></i></button>
            <button className="carousel-button" onClick={handlePrev}><i class="fas fa-chevron-left"></i></button>
        </div>
    )
}

export default Carousel; 