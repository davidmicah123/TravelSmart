import React, { useState } from 'react';
import classes from "./Accomodiations.module.css";
import { TipCatalogueNavbar } from '../../Containers/TripCatalogue/TripCatalogue';
import img from "../../Assets/Images/Azores, portugal.jpg";
import AccomodiationsData from '../../Data/AccomodiationsData';
import DashboardFooter from '../../Components/DashboardFooter/DashboardFooter';

const AccomodiationCard = (props) => {
    console.log(props);
    
    return (
        <div className={classes.destination_card}>
            <div className={classes.card_img_wrapper}>
                <img src={props.imageUrl} className={classes.card_img} alt={props.place} />
            </div>
            <div className={classes.card_content_wrapper}>
                <h3>{props.place}</h3>
                <p>{props.description}</p>
                <p><strong>{props.country}, {props.city}</strong></p>
                <p><strong>{props.price}</strong></p>
            </div>
        </div>
    );
};

const Accomodiations = () => {
    const [searchQuery, setSearchQuery] = useState('');  // Add state to manage search input
    const accomodiations = [...AccomodiationsData];

    // Filter accommodations based on the search query (matching place, country, or city)
    const filteredAccomodiations = accomodiations.filter(destination =>
        destination.place.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.country_located.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.city_located.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <TipCatalogueNavbar />

            <h2 className={classes.header}>Explore Accomodiations</h2>
            <div className={classes.input_wrapper}>
                <ion-icon name="search-outline"></ion-icon>
                <input
                    type="text"
                    placeholder="Search for accommodation"
                    className={classes.search_input}
                    value={searchQuery}  // Bind input value to searchQuery state
                    onChange={(e) => setSearchQuery(e.target.value)}  // Update searchQuery on input change
                />
            </div>

            <div className={classes.destination_display_area}>
                {filteredAccomodiations.map((destination, index) => (
                    <AccomodiationCard
                        key={index}
                        place={destination.place}
                        country={destination.country_located}
                        city={destination.city_located}
                        state={destination.state_located}
                        imageUrl={destination.location_image}
                        description={destination.brief_description}
                        price={destination.price_range}
                    />
                ))}
            </div>

            
            <DashboardFooter />
        </>
    );
};

export default Accomodiations;
