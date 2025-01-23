import React from 'react';
import '../css/servicegallery.css';

function ServiceGallery(props) {
    return (
        <div className="gallery">
            {props.images.map((image, index) => (
            <img src={image} alt={`gallery-item-${index}`} />
            ))}
        </div>
    );
}

export default ServiceGallery;
