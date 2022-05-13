import React from 'react';
import doctorImage from '../../../assets/images/doctor-small.png'

const BottomBanner = () => {
    return (
        <div className='md:flex w-full items-center bottom-banner-bg px-5 py-10 md:px-0 md:py-0'>
            <div className="image md:flex-1 hidden md:block">
                <img className='md:mt-[-100px]' src={doctorImage} alt="" />
            </div>
            <div className="content md:flex-1">
                <h1 className='text-secondary text-xl font-bold'>Appointment</h1>
                <h1 className='text-white md:text-4xl text-2xl my-5'>Make an appointment Today</h1>
                <p className='text-white mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className='bg-gradient-to-l from-primary to-secondary btn border-0 text-white font-bold'>GET STARTED</button>
            </div>
        </div>
    );
};

export default BottomBanner;