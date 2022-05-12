import React from 'react';
import Hero from './Hero/Hero';
import cloclImage from '../../assets/icons/clock.svg'
import markerImage from '../../assets/icons/marker.svg'
import phoneImage from '../../assets/icons/phone.svg'
import Card from './Card/Card';

const Home = () => {
    const cardImage = [
        { image: `${cloclImage}`, bgColor: "bg-primary", id: 1, title: "Opening Hours", details: "The organization's opening hours are 9 a.m. to 6 p.m" },
        { image: `${markerImage}`, bgColor: "bg-accent", id: 2, title: "Visit our location", details: "Brooklyn, NY 10036, United States" },
        { image: `${phoneImage}`, bgColor: "bg-primary", id: 3, title: "Contact us now", details: "+000 123 456789" }
    ]
    return (
        <div>
            <Hero></Hero>
            <div className="md:flex container mx-auto">
                {
                    cardImage.map(data => <Card key={data.id} data={data} ></Card>)
                }
            </div>
        </div>
    );
};

export default Home;