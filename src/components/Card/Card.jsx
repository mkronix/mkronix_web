import React from 'react';
import './card.css';
const Card = ({ backgroundImage, title, description, number = "01" }) => {
    return (
        <div className={`content content--sticky content--card`}>
            <div className='list_inner --sticky'>
                <div className='list_item'>
                    <div className="media_frame">
                        <img src={backgroundImage} alt={title} className='media' />
                    </div>
                    <div className="content_frame">
                        <div className='card_title'>{title}</div>
                        <div className='card_text'>{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
