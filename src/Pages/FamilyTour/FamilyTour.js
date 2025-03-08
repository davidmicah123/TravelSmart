// import React, { useState } from 'react';
// import { TipCatalogueNavbar } from '../../Containers/TripCatalogue/TripCatalogue';
// import classes from "./FamilyTour.module.css";

// import FamilyTourData from '../../Data/FamilyTourData';
// import DashboardFooter from '../../Components/DashboardFooter/DashboardFooter';

// const TourCard = (props) => {
//     return (
//         <div className={classes.tour_card}>
//             <div className={classes.tour_card_img_wrapper}>
//                 <img src={props.url} className={classes.tour_img} />
//             </div>
//             <div className={classes.tour_card_txt_content}>
//                 <h3>{props.place}</h3>
//                 <p>{props.description}</p>
//                 <p>{props.continent}</p>
//                 <button className={classes.explore}>Explore</button>
//             </div>
//         </div>
//     );
// }

// function FamilyTour() {
//     const [selectedContinent, setSelectedContinent] = useState('All');

//     const handleContinentClick = (continent) => {
//         setSelectedContinent(continent);
//     };

//     const filteredData = FamilyTourData.filter(destination => 
//         selectedContinent === 'All' || destination.continent_located === selectedContinent
//     );

//     const continents = ['All', 'Europe', 'Australia', 'Africa', 'Asia', 'South America', 'North America', 'Antarctica'];

//     return (
//         <>
//             <TipCatalogueNavbar />

//             <section className={classes.tour_locations_diaplay_area}>
//                 <div className={classes.tour_location_header}>
//                     <h2>Explore Family Tour</h2>

//                     <input placeholder='Search for destination' className={classes.destination_search_input}/>

//                     <div className={classes.continent_category_wrapper}>
//                         <ul>
//                             {continents.map(continent => (
//                                 <li 
//                                     key={continent} 
//                                     className={selectedContinent === continent ? classes.active_list : ''} 
//                                     onClick={() => handleContinentClick(continent)}
//                                 >
//                                     {continent}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>

//                 <div className={classes.tour_card_wrapper}>
//                     {filteredData.map((destination, index) => (
//                         <TourCard
//                             key={index}
//                             place={destination.location}
//                             continent={destination.continent_located}
//                             description={destination.brief_description}
//                             url={destination.url}
//                         />
//                     ))}
//                 </div>
//             </section>
            
//             <DashboardFooter />
//         </>
//     );
// }

// export default FamilyTour;




import React, { useState } from 'react';
import { TipCatalogueNavbar } from '../../Containers/TripCatalogue/TripCatalogue';
import classes from "./FamilyTour.module.css";

import FamilyTourData from '../../Data/FamilyTourData';
import DashboardFooter from '../../Components/DashboardFooter/DashboardFooter';
import DestinationModal from '../../Components/DestinationModal/DestinationModal';

const TourCard = ({ place, description, continent, url, onExploreClick }) => {
    return (
        <div className={classes.tour_card}>
            <div className={classes.tour_card_img_wrapper}>
                <img src={url} className={classes.tour_img} />
            </div>
            <div className={classes.tour_card_txt_content}>
                <h3>{place}</h3>
                <p>{description}</p>
                <p>{continent}</p>
                <button 
                    className={classes.explore} 
                    onClick={onExploreClick} // Trigger the modal on click
                >
                    Explore
                </button>
            </div>
        </div>
    );
}


function FamilyTour() {
    const [selectedContinent, setSelectedContinent] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
    const [selectedDestination, setSelectedDestination] = useState(null); // Selected destination for the modal

    const handleContinentClick = (continent) => {
        setSelectedContinent(continent);
    };

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Open the modal and set the selected destination
    const openModal = (destinationProps) => {
        setSelectedDestination(destinationProps); // Pass all props from the TourCard to the modal
        setIsModalOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDestination(null);
    };

    // Filter data based on both the selected continent and the search term
    const filteredData = FamilyTourData.filter(destination => {
        const matchesContinent = selectedContinent === 'All' || destination.continent_located === selectedContinent;
        const matchesSearch = destination.location.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesContinent && matchesSearch;
    });

    const continents = ['All', 'Europe', 'Australia', 'Africa', 'Asia', 'South America', 'North America', 'Antarctica'];

    return (
        <>
            <TipCatalogueNavbar />

            <section className={classes.tour_locations_diaplay_area}>
                <div className={classes.tour_location_header}>
                    <h2>Explore Family Tour</h2>

                    {/* Search Input */}
                    <input 
                        placeholder='Search for destination' 
                        className={classes.destination_search_input}
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />

                    <div className={classes.continent_category_wrapper}>
                        <ul>
                            {continents.map(continent => (
                                <li 
                                    key={continent} 
                                    className={selectedContinent === continent ? classes.active_list : ''} 
                                    onClick={() => handleContinentClick(continent)}
                                >
                                    {continent}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={classes.tour_card_wrapper}>
                    {filteredData.length > 0 ? (
                        filteredData.map((destination, index) => (
                            <TourCard
                                key={index}
                                place={destination.location}
                                continent={destination.continent_located}
                                description={destination.brief_description}
                                url={destination.url}
                                onExploreClick={() => openModal({
                                    place: destination.location,
                                    continent: destination.continent_located,
                                    description: destination.brief_description,
                                    url: destination.url
                                })} // Pass all card props to modal
                            />
                        ))
                    ) : (
                        <p className={classes.empty_destination}>No destinations found matching your criteria.</p>
                    )}

                    {isModalOpen && selectedDestination && (
                        <DestinationModal 
                            {...selectedDestination} // Pass all the props to the modal
                            onClose={closeModal} // Pass the modal closer prop
                        />
                    )}
                </div>
            </section>
            
            <DashboardFooter />
        </>
    );
}

export default FamilyTour;
