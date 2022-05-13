import React from 'react';
import treatnentImage from '../../../assets/images/treatment.png'

const ExceptionalService = () => {
    return (
        <div className="my-40 md:flex card-height  px-5 items-center justify-evenly w-full md:px-32">
            <img className='card-height mb-8 md:mb-0 md:w-1/2 md:mr-10' src={treatnentImage} alt="Album" />
            <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start mt-6">
                    <button className="bg-gradient-to-l from-primary to-secondary btn border-0 text-white font-bold">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalService;