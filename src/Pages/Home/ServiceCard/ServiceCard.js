import React from 'react';

const ServiceCard = ({ data }) => {
    const { bgColor, image, title, details } = data;
    return (
        <div className={` lg:card-side w-[90vw] md:w-[450px] text-center md:text-left shadow-xl mt-8 mx-auto md:mx-2 ${bgColor} `}>
            <figure ><img className='mt-5 md:mt-0 md:w-1/6 mx-auto' src={image} alt="Album" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ServiceCard;