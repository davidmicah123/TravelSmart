import React, { useState } from 'react';
import classes from "./Destinations.module.css";
import { TipCatalogueNavbar } from '../../Containers/TripCatalogue/TripCatalogue';
import img from "../../Assets/Images/Azores, portugal.jpg";
import DestinationsData from '../../Data/DestinationsData';
import DashboardFooter from '../../Components/DashboardFooter/DashboardFooter';


const DestinationDetailsModal = (props) => {    
    return(
        <div className={classes.destination_details_modal}>
            <div className={classes.modal_closer} onClick={props.close_modal}>
                <ion-icon name="close-sharp"></ion-icon>
            </div>
            <div className={classes.details_modal_card}>
                <div className={classes.modal_card_img_wrapper}>
                    <img src={props.imageUrl} className={classes.modal_card_img} />
                </div>
                <div className={classes.modal_card_cotent}>
                    <h2>{props.place}</h2>
                    <iframe className={classes.map_display}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.608675079386!2d3.8856877734029522!3d7.397668912391311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d6af7758517%3A0x17e6ec5eb71490c3!2sIdea%20Konsult%20Limited%20Adamasingba!5e0!3m2!1sen!2sng!4v1726926953043!5m2!1sen!2sng"
                        allowfullscreen="" loading="">
                    </iframe>

                    <div className={classes.transport_box}>
                        <h3>Transport Option </h3>
                        <ul>
                            <li>Available Option: {props.transport_option}</li>
                            <li>Price Range: {props.price_range}</li>
                            <li>Closest Airport: {props.closest_airport}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const DestinationCard = (props) => {    
    return (
        <div className={classes.destination_card}>
            <div className={classes.card_img_wrapper}>
                <img src={props.imageUrl} className={classes.card_img} alt={props.place} />
            </div>
            <div className={classes.card_content_wrapper}>
                <h3>{props.place}</h3>
                <p>{props.description}</p>
                <p>{props.country}, {props.city}</p>

                <button onClick={props.modal_toogle} className={classes.explore_btn}>Explore</button>
            </div>


            {
                props.isModalVisible ?  
                    <DestinationDetailsModal 
                        place={props.place} 
                        imageUrl={props.imageUrl} 
                        close_modal={props.modal_toogle}
                        transport_option={props.transport_option}            
                        price_range={props.price_range}
                        closest_airport={props.closest_airport}
                        time_taken={props.time_taken}
                    /> 
                : ''
            }
        </div>
    );
};

const Destinations = () => {
    const [searchQuery, setSearchQuery] = useState('');  // Add state to manage search input
    const [openModalIndex, setOpenModalIndex] = useState(null);  // State to track which card's modal is open

    const destinations = [...DestinationsData];

    // Filter destinations based on the search query (matching place)
    const filteredDestinations = destinations.filter(destination =>
        destination.place.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to toggle modal for a specific destination card
    const toggleModal = (index) => {
        setOpenModalIndex(prevIndex => (prevIndex === index ? null : index));  // If clicked modal is open, close it
    };

    return (
        <>
            <TipCatalogueNavbar />
            <h2 className={classes.header}>Explore Destinations</h2>
            <div className={classes.input_wrapper}>
                <ion-icon name="search-outline"></ion-icon>
                <input
                    type="text"
                    placeholder="Search for destination"
                    className={classes.search_input}
                    value={searchQuery}  // Bind input value to searchQuery state
                    onChange={(e) => setSearchQuery(e.target.value)}  // Update searchQuery on input change
                />
            </div>

            <div className={classes.destination_display_area}>
                {filteredDestinations.map((destination, index) => (
                    <DestinationCard
                        key={index}
                        place={destination.place}
                        country={destination.Country_located}
                        city={destination.city_located}
                        state={destination.state_located}
                        imageUrl={destination.location_image}
                        description={destination.brief_description}
                        transport_option={destination.transport_option.option}
                        price_range={destination.transport_option.price_range}
                        closest_airport={destination.transport_option.closest_airport}
                        time_taken={destination.transport_option.time_taken}
                        modal_toogle={() => toggleModal(index)}  // Pass the index to the modal toggle function
                        isModalVisible={openModalIndex === index}  // Check if this modal should be visible
                    />
                ))}
            </div>

            <DashboardFooter />
        </>
    );
};


export default Destinations;