import React from 'react';
import heroImage from '../../../assets/images/chair.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={heroImage} className="md:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="bg-gradient-to-l from-primary to-secondary btn border-0 text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;