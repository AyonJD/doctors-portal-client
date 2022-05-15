import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointemnt = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState({})
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-center text-secondary text-lg'>Available Appointment on {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard setTreatment={setTreatment} key={service._id} service={service}></ServiceCard>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointemnt;