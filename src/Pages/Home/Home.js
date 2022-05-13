import React from 'react';
import Hero from './Hero/Hero';
import cloclImage from '../../assets/icons/clock.svg'
import markerImage from '../../assets/icons/marker.svg'
import phoneImage from '../../assets/icons/phone.svg'
import fluorideImage from '../../assets/images/fluoride.png'
import cavityImage from '../../assets/images/cavity.png'
import whiteningImage from '../../assets/images/whitening.png'
import Card from './Card/Card';
import ServiceCard from './ServiceCard/ServiceCard';

const Home = () => {
    const cardData = [
        { image: `${cloclImage}`, bgColor: "bg-gradient-to-l from-primary to-secondary", id: 1, title: "Opening Hours", details: "The organization's opening hours are 9 a.m. to 6 p.m" },
        { image: `${markerImage}`, bgColor: "bg-accent", id: 2, title: "Visit our location", details: "Brooklyn, NY 10036, United States" },
        { image: `${phoneImage}`, bgColor: "bg-gradient-to-l from-primary to-secondary", id: 3, title: "Contact us now", details: "+000 123 456789" }
    ]
    const serviceCardData = [
        { image: `${fluorideImage}`, id: 1, title: "Fluoride Treatment", details: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities." },
        { image: `${cavityImage}`, id: 2, title: "Cavity Filling", details: "To treat a cavity your dentist will remove the decayed portion of the tooth and then 'fill' the area on the tooth where the decayed material was removed." },
        { image: `${whiteningImage}`, id: 3, title: "Teeth Whitening", details: "In-office bleaching provides the quickest way to whiten teeth. With in-office bleaching, the whitening product is applied directly to the teeth." }
    ]
    return (
        <div>
            <Hero></Hero>
            <div className="md:flex container mx-auto">
                {
                    cardData.map(data => <Card key={data.id} data={data} ></Card>)
                }
            </div>
            <div className='mt-20'>
                <h1 className='text-secondary text-center text-lg md:text-xl font-bold'>OUR SERVICES</h1>
                <h1 className='text-center text-3xl'>Services We Provide</h1>
                <div className="md:flex container mx-auto mt-10">
                    {
                        serviceCardData.map(data => <ServiceCard key={data.id} data={data} ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;