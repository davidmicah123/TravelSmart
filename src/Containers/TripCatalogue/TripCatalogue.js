import React, { useState } from 'react';
import classes from "./TripCatalogue.module.css";
import { Link } from 'react-router-dom';

export const TipCatalogueNavbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar_content_wrapper}>
                <h2><Link to='/' className={classes.navbar_link}>TravelSmart</Link></h2>
                <Link to="/TripCatalogue" className={classes.navbar_link}><ion-icon name="home"></ion-icon></Link>
            </div>
        </div>
    );
}

const data = [
    {
        "place": "Eiffel Tower",
        "description": "An iconic symbol of Paris, the Eiffel Tower offers stunning views and a rich history.",
        "price_range": "$25 - $50",
        "continent": "Europe",
        "city": "Paris",
        "state": "Île-de-France",
        "url":"https://avatars.mds.yandex.net/i?id=1d1a603a134cb73c27695ff3a79aeff6cab63fa5-9181326-images-thumbs&n=13"
    },
    {
        "place": "Colosseum",
        "description": "The Colosseum is an ancient amphitheater showcasing Rome's architectural brilliance and rich history.",
        "price_range": "$15 - $30",
        "continent": "Europe",
        "city": "Rome",
        "state": "Lazio",
        "url":"https://avatars.mds.yandex.net/i?id=76f8c9b0468f0f90c0177f71ddf30982de72c202-9459824-images-thumbs&n=13"
    },
    {
        "place": "Great Wall of China",
        "description": "The Great Wall stretches over 13,000 miles, offering breathtaking views and historical significance.",
        "price_range": "$5 - $20",
        "continent": "Asia",
        "city": "Beijing",
        "state": "Beijing",
        "url":"https://avatars.mds.yandex.net/i?id=6f0137efdf63a936d81f705351d5f4e2fd388279c052b181-6556603-images-thumbs&n=13"
    },
    {
        "place": "Taj Mahal",
        "description": "A magnificent mausoleum, the Taj Mahal represents love and showcases stunning Mughal architecture.",
        "price_range": "$10 - $15",
        "continent": "Asia",
        "city": "Agra",
        "state": "Uttar Pradesh",
        "url":"https://avatars.mds.yandex.net/i?id=ce0c117f7f3144fa0ad6acec364493734ad3b228-5302151-images-thumbs&n=13"
    },
    {
        "place": "Machu Picchu",
        "description": "This ancient Incan city nestled in the Andes is famous for its archaeological significance and breathtaking views.",
        "price_range": "$40 - $70",
        "continent": "South America",
        "city": "Machu Picchu",
        "state": "Cusco",
        
        "url":"https://avatars.mds.yandex.net/i?id=ea4379db5f45fa67919b441c6b7e0eae464b5eb9-10675607-images-thumbs&n=13"
    },
    {
        "place": "Christ the Redeemer",
        "description": "This iconic statue overlooks Rio de Janeiro, symbolizing peace and offering panoramic city views.",
        "price_range": "$10 - $30",
        "continent": "South America",
        "city": "Rio de Janeiro",
        "state": "Rio de Janeiro",
        
        "url":"https://avatars.mds.yandex.net/i?id=a14d63423fabcf623fbc14ebc1bf73a46699a74ee0d02f7c-10241101-images-thumbs&n=13"
    },
    {
        "place": "Sydney Opera House",
        "description": "An architectural marvel, the Sydney Opera House is renowned for its unique design and vibrant performances.",
        "price_range": "$20 - $50",
        "continent": "Australia",
        "city": "Sydney",
        "state": "New South Wales",
        "url":"https://avatars.mds.yandex.net/i?id=b54a65dca882e013c5a09ad4ac904fa9a212b814-7953198-images-thumbs&n=13"
    },
    {
        "place": "Uluru",
        "description": "A sacred Aboriginal site, Uluru is known for its stunning rock formations and cultural significance.",
        "price_range": "$5 - $15",
        "continent": "Australia",
        "city": "Uluru",
        "state": "Northern Territory",
        "url":"https://avatars.mds.yandex.net/i?id=7e5ca61f65f31fc60c0681a13f02926628712b10-9137926-images-thumbs&n=13"
    },
    {
        "place": "Pyramids of Giza",
        "description": "These ancient wonders are a testament to Egypt's rich history and architectural genius, attracting visitors worldwide.",
        "price_range": "$10 - $30",
        "continent": "Africa",
        "city": "Giza",
        "state": "Cairo",
        "url":"https://avatars.mds.yandex.net/i?id=7c04c47c3a616521b7638d5e4835983411d43c38-6945470-images-thumbs&n=13"
    },
    {
        "place": "Table Mountain",
        "description": "A flat-topped mountain offering panoramic views of Cape Town, Table Mountain is perfect for hiking and photography.",
        "price_range": "$5 - $10",
        "continent": "Africa",
        "city": "Cape Town",
        "state": "Western Cape",
        "url":"https://avatars.mds.yandex.net/i?id=0e9572a34a565cf2d6007793beaedcd52b0ea5f8-12474238-images-thumbs&n=13"
    },
    {
        "place": "Statue of Liberty",
        "description": "A symbol of freedom, the Statue of Liberty welcomes visitors to New York City with its rich history.",
        "price_range": "$18 - $25",
        "continent": "North America",
        "city": "New York City",
        "state": "New York",
        "url":"https://avatars.mds.yandex.net/i?id=47e600eb3d681aa260bb12e76919142cc58ca8a40a9c2a85-12718967-images-thumbs&n=13"
    },
    {
        "place": "Banff National Park",
        "description": "Known for its stunning landscapes, Banff National Park offers outdoor activities and breathtaking scenery year-round.",
        "price_range": "$10 - $30",
        "continent": "North America",
        "city": "Banff",
        "state": "Alberta",
        "url":"https://avatars.mds.yandex.net/i?id=6349cf0b1d8cd534f6a2544c63823bce9e48ee02-4010549-images-thumbs&n=13"
    },
    {
        "place": "Neuschwanstein Castle",
        "description": "A fairytale castle in Germany, Neuschwanstein is famous for its picturesque architecture and beautiful surroundings.",
        "price_range": "$15 - $25",
        "continent": "Europe",
        "city": "Schwangau",
        "state": "Bavaria",
        "url":"https://avatars.mds.yandex.net/i?id=1d817b2afb6a52aec3890bfe9017ebd29d868068-5621662-images-thumbs&n=13"
    },
    {
        "place": "Santorini",
        "description": "Famous for its whitewashed buildings and stunning sunsets, Santorini is a picturesque island in the Aegean Sea.",
        "price_range": "$50 - $100",
        "continent": "Europe",
        "city": "Santorini",
        "state": "South Aegean",
        "url":"https://avatars.mds.yandex.net/i?id=bc4f1b4d4a80e2ac09ccd3849f05a75b7bc70361-8218044-images-thumbs&n=13"
    }
]

const CatalogueSidebar = () => {
    const [isContinentListVisible, setIsContinentListVisible] = useState(false);

    const displayContinents = () => {
        setIsContinentListVisible(!isContinentListVisible);
    }

    return (
        <aside className={classes.catalogue_sidebar}>
            <ul className={classes.catalogue_sidebar_list}>
                <h3>Tour Activities</h3>
                <li className={classes.active_list}><ion-icon name="walk-outline"></ion-icon> Plan A Tour</li>
                <Link to='/Accomodiations' className={classes.link}><li><ion-icon name="storefront-outline"></ion-icon> <p>Accommodation</p></li></Link>
                <Link to='/Destinations' className={classes.link}><li><ion-icon name="airplane-outline"></ion-icon> <p>View Destinations</p></li></Link>
                <Link to="/TouristTransport" className={classes.link}><li><ion-icon name="car-sport-outline"></ion-icon> <p>Transport Dashboard</p></li></Link>
                <Link to="/TourReview" className={classes.link}><li><ion-icon name="star-half-outline"></ion-icon> <p>Review Tour</p></li></Link>

                <h3 className={classes.tour_options}>Tour Options</h3>
                <Link to='/TourOptions' className={classes.link}><li><ion-icon name="list-outline"></ion-icon> <p>All Options</p></li></Link>
                <Link to="/FamilyTour" className={classes.link}><li><ion-icon name="bus-outline"></ion-icon> <p>Family Tour</p></li></Link>
                <Link to="/AdventureTour" className={classes.link}><li><ion-icon name="footsteps-outline"></ion-icon> <p>Adventure Tour</p></li></Link>
                <Link to="/LuxuryTour" className={classes.link}><li><ion-icon name="diamond-outline"></ion-icon> <p>Luxury Tour</p></li></Link>
                <Link to="/CulturalTour" className={classes.link}><li><ion-icon name="extension-puzzle-outline"></ion-icon> <p>Cultural Tour</p> </li></Link>
            </ul>
        </aside>
    );
}

const TourPlanner = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState(''); // Track the selected sort option

    const filteredData = data.filter(destination =>
        destination.place.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortOption === 'Price') {
            return parseFloat(a.price_range.split('-')[0].replace(/[^0-9]/g, '')) - parseFloat(b.price_range.split('-')[0].replace(/[^0-9]/g, ''));
        } else if (sortOption === 'Name') {
            return a.place.localeCompare(b.place);
        } else if (sortOption === 'Continent') {
            return a.continent.localeCompare(b.continent);
        }
        return 0; // Default case (no sorting)
    });

    return (
        <section className={classes.tour_planner}>
            <div className={classes.planner_hero}>
                <h2>Plan Your Tour Now</h2>
            </div>

            <div className={classes.budget_area}></div>

            <div className={classes.destination_card_container}>
                <div className={classes.budget_input_wrapper}>
                    <div className={classes.budget_box}>
                        <select onChange={e => setSortOption(e.target.value)}>
                            <option value="">Sort By</option>
                            <option value="Name">Name</option>
                            {/* <option value="Price">Price</option> */}
                            {/* <option value="Continent">Continent</option> */}
                        </select>
                        <input
                            type='text'
                            placeholder='Search by destination'
                            className={classes.budget_box_input}
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <h3>Available Destinations</h3>

                <div className={classes.destination_card_wrapper}>
                    {sortedData.map((destination, index) => (
                        <DestinationCard
                            key={index}
                            url={destination.url}
                            place={destination.place}
                            continent={destination.continent}
                            description={destination.description}
                            city={destination.city}
                            state={destination.state}
                            price_range={destination.price_range}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const TripCatalogue = () => {
    return (
        <section className={classes.trip_catalogue_page}>
            <TipCatalogueNavbar />
            <section className={classes.trip_catalogue_dashboard}>
                <CatalogueSidebar />
                <TourPlanner />
            </section>
        </section>
    );
}

export default TripCatalogue;

function DestinationCard(props) {
    return (
        <div className={classes.destination_card}>
            <div className={classes.destination_card_img_wrapper}>
                <img src={props.url} className={classes.destination_img} />
            </div>
            <div className={classes.destination_card_content}>
                <h3>{props.place}</h3>
                <p>{props.description}</p>
                <p><strong>Price Range: {props.price_range}</strong></p>
                <p><strong>Continent: {props.continent}</strong></p>
                <p><strong>{props.city}, {props.state}</strong></p>
            </div>
        </div>
    );
}
