import React, { useState } from 'react';
import heroImage from '../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import AvailableAppointemnt from './AvailableAppointemnt';

const Appoingment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroImage} className="md:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
            <AvailableAppointemnt date={date}></AvailableAppointemnt>
        </>
    );
};

export default Appoingment;