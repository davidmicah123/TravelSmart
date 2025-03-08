// import { TipCatalogueNavbar } from "../../Containers/TripCatalogue/TripCatalogue";
// import classes from "./TouristTransport.module.css"
// import africa from "../../Assets/Images/Algarve, portugal.jpg";


// const ContinentCard = (props) => {
//     return(
//         <div className={classes.continent_card}>
//             <div className={classes.continent_card_img_wrapper}>
//                 <img src={props.url} className={classes.continent_card_img} alt="continent image"/>
//             </div>
//             <div className={classes.continent_card_content}>
//                 <h3>{props.continent_name}</h3>
//             </div>
//         </div>
//     );
// }

// const TouristTransport = () => {
//     return(
//         <>
//             <TipCatalogueNavbar/>

//             <section className={classes.transport_dashboard}>
//                 <h2 className={classes.header}>Transport Dashboard</h2>

//                 <div className={classes.dashboard_control_area}>
//                     <div className={classes.input_wrapper}>
//                         <ion-icon name="search-outline"></ion-icon>
//                         <input type="text" placeholder="Search for transport destination" className={classes.search_input}/>
//                     </div>


//                     <div className={classes.continent_card_Wrapper}>
//                         <ContinentCard 
//                             url="https://avatars.mds.yandex.net/i?id=5af448c09c102bc95dd0f47abe9e09530999f13b09dd9932-4755486-images-thumbs&n=13"
//                             continent_name="Africa"
//                         />
//                         <ContinentCard 
//                             url="https://tinyurl.com/2ylv76xz"
//                             continent_name="Asia"
//                         />
//                         <ContinentCard 
//                             url="https://tinyurl.com/26tw58nd"
//                             continent_name="Australia"
//                         />
//                         <ContinentCard 
//                             url="https://tinyurl.com/22b56t9m"
//                             continent_name="Europe"
//                         />
//                         <ContinentCard 
//                             url="https://tinyurl.com/2bed59fh"
//                             continent_name="Antarctica"
//                         />
//                         <ContinentCard 
//                             url="https://tinyurl.com/2b7jxq7e"
//                             continent_name="North America"
//                         />
//                         <ContinentCard 
//                             url="https://tinyurl.com/2xwc5xdm"
//                             continent_name="South America"
//                         />
//                     </div>
//                 </div>



//             </section>
//         </>
//     );
// }

// export default TouristTransport;





import { useState } from 'react';
import { TipCatalogueNavbar } from "../../Containers/TripCatalogue/TripCatalogue";
import classes from "./TouristTransport.module.css";
import DashboardFooter from '../../Components/DashboardFooter/DashboardFooter';

// Sample JSON data for transport options
const transportData = {
    Africa: [
        { type: 'Flight', nearest: 'Jomo Kenyatta International Airport', travelTime: '8 hours', price: '$600' },
        { type: 'Train', nearest: 'Nairobi Railway Station', travelTime: '12 hours', price: '$50' },
        { type: 'Bus', nearest: 'Nairobi Bus Terminal', travelTime: '14 hours', price: '$30' },
        { type: 'Car Rental', nearest: 'Nairobi Airport', travelTime: '10 hours', price: '$70/day' }
    ],
    Asia: [
        { type: 'Flight', nearest: 'Incheon International Airport', travelTime: '6 hours', price: '$500' },
        { type: 'Train', nearest: 'Tokyo Station', travelTime: '3 hours', price: '$100' },
        { type: 'Bus', nearest: 'Busan Bus Terminal', travelTime: '5 hours', price: '$20' },
        { type: 'Car Rental', nearest: 'Seoul Airport', travelTime: '4 hours', price: '$60/day' }
    ],
    Australia: [
        { type: 'Flight', nearest: 'Sydney Kingsford Smith Airport', travelTime: '15 hours', price: '$900' },
        { type: 'Train', nearest: 'Sydney Central Station', travelTime: '1 hour', price: '$20' },
        { type: 'Bus', nearest: 'Sydney Bus Terminal', travelTime: '45 minutes', price: '$10' },
        { type: 'Car Rental', nearest: 'Sydney Airport', travelTime: '30 minutes', price: '$80/day' }
    ],
    Europe: [
        { type: 'Flight', nearest: 'Heathrow Airport', travelTime: '8 hours', price: '$700' },
        { type: 'Train', nearest: 'Paris Gare de Lyon', travelTime: '3 hours', price: '$150' },
        { type: 'Bus', nearest: 'London Victoria Coach Station', travelTime: '4 hours', price: '$25' },
        { type: 'Car Rental', nearest: 'London Heathrow', travelTime: '1 hour', price: '$90/day' }
    ],
    Antarctica: [
        { type: 'Flight', nearest: 'King George Island', travelTime: '10 hours', price: '$1200' },
        { type: 'Boat', nearest: 'Ushuaia Port', travelTime: '2 days', price: '$3000' }
    ],
    NorthAmerica: [
        { type: 'Flight', nearest: 'Los Angeles International Airport', travelTime: '10 hours', price: '$500' },
        { type: 'Train', nearest: 'Union Station', travelTime: '5 hours', price: '$80' },
        { type: 'Bus', nearest: 'Greyhound Bus Terminal', travelTime: '6 hours', price: '$40' },
        { type: 'Car Rental', nearest: 'LAX', travelTime: '30 minutes', price: '$70/day' }
    ],
    SouthAmerica: [
        { type: 'Flight', nearest: 'São Paulo/Guarulhos International Airport', travelTime: '12 hours', price: '$800' },
        { type: 'Train', nearest: 'Rio de Janeiro Central Station', travelTime: '3 hours', price: '$20' },
        { type: 'Bus', nearest: 'Rio de Janeiro Bus Terminal', travelTime: '4 hours', price: '$15' },
        { type: 'Car Rental', nearest: 'Galeão International Airport', travelTime: '1 hour', price: '$50/day' }
    ]
};

// Array of continent data
const continentData = [
    {
        name: "Africa",
        url: "https://avatars.mds.yandex.net/i?id=5af448c09c102bc95dd0f47abe9e09530999f13b09dd9932-4755486-images-thumbs&n=13"
    },
    {
        name: "Asia",
        url: "https://tinyurl.com/2ylv76xz"
    },
    {
        name: "Australia",
        url: "https://tinyurl.com/26tw58nd"
    },
    {
        name: "Europe",
        url: "https://tinyurl.com/22b56t9m"
    },
    {
        name: "Antarctica",
        url: "https://tinyurl.com/2bed59fh"
    },
    {
        name: "NorthAmerica",
        url: "https://tinyurl.com/2b7jxq7e"
    },
    {
        name: "SouthAmerica",
        url: "https://tinyurl.com/2xwc5xdm"
    }
];

const ContinentCard = ({ url, continent_name, onClick }) => {
    return (
        <div className={classes.continent_card} onClick={() => onClick(continent_name)}>
            <div className={classes.continent_card_img_wrapper}>
                <img src={url} className={classes.continent_card_img} alt="continent" />
            </div>
            <div className={classes.continent_card_content}>
                <h3>{continent_name}</h3>
            </div>
        </div>
    );
};

const TransportCard = ({ option }) => {
    return (
        <div className={classes.transport_card}>
            <h4>{option.type}</h4>
            <p><strong>Nearest:</strong> {option.nearest}</p>
            <p><strong>Estimated Travel Time:</strong> {option.travelTime}</p>
            <p><strong>Price:</strong> {option.price}</p>
        </div>
    );
};

const TouristTransport = () => {
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [transportOptions, setTransportOptions] = useState([]);

    const handleContinentClick = (continent) => {
        setSelectedContinent(continent);
        setTransportOptions(transportData[continent]);
    };

    return (
        <>
            <TipCatalogueNavbar />

            <section className={classes.transport_dashboard}>
                <h2 className={classes.header}>Transport Dashboard</h2>
                
                {selectedContinent && (
                    <div className={classes.selected_continent}>
                        <h3>Transport Options for {selectedContinent}:</h3>
                    </div>
                )}

                {!selectedContinent ? (
                    <div className={classes.dashboard_control_area}>
                        <div className={classes.input_wrapper}>
                            <ion-icon name="search-outline"></ion-icon>
                            <input type="text" placeholder="Search for transport destination" className={classes.search_input} />
                        </div>

                        <div className={classes.continent_card_Wrapper}>
                            {continentData.map((continent) => (
                                <ContinentCard 
                                    key={continent.name}
                                    url={continent.url}
                                    continent_name={continent.name}
                                    onClick={handleContinentClick}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={classes.transport_options}>
                        <div className={classes.transport_cards}>
                            {transportOptions.map((option, index) => (
                                <TransportCard key={index} option={option} />
                            ))}
                        </div>
                    </div>
                )}
            </section>

            
            <DashboardFooter />
        </>
    );
};

export default TouristTransport;
