import React, { useState } from 'react';
import { useEffect } from 'react';
import './CarouselCard.css';

const CarouselCard = ({ image, title, href, type, description }) => {

    const cardClassName = () => (type === "foreground") ? "card-root-foreground" : "card-root-background";
    const [hover, setHover] = useState(false);
    const getCardTextClass = () => `carousel-card-text ${(hover) ? 'carousel-card-text-hover' : ''}`;

    return (
        <div
            className={`card-root ${cardClassName()}`}
            style={{ 'background-image': `url(${image})` }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <div className={getCardTextClass()}>
                <span className="carousel-card-span">{title}</span>
                {hover && <span className="carousel-card-description-span">{description} <span className="click-here">(Click here to view)</span></span>}
            </div>
        </div >
    )
}

export default CarouselCard; 