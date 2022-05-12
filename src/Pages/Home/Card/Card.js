import React from 'react';

const Card = ({ data }) => {
    console.log(data);
    const { bgColor, image, title, details } = data;
    return (
        <div className={`card lg:card-side w-full md:w-[450px] text-center md:text-left shadow-xl mx-2 ${bgColor}`}>
            <figure><img className='md:ml-8 mt-5 md:mt-0' src={image} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title justify-center md:justify-start">{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Card;