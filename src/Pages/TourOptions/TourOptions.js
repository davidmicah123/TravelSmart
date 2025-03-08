import React from 'react'
import { TipCatalogueNavbar } from '../../Containers/TripCatalogue/TripCatalogue';
import classes from "./TourOptions.module.css";
import { Link } from 'react-router-dom';
import DashboardFooter from '../../Components/DashboardFooter/DashboardFooter';

const TourOptions = () => {
  return (
    <>
        <TipCatalogueNavbar/>
        <section className={classes.tour_options}>
            <h2>Explore Tour Options</h2>   

            <div className={classes.option_card_wrapper}>
                <div className={classes.option_card}>
                    <div className={classes.option_card_img_wrapper}>
                        <img src='https://avatars.mds.yandex.net/i?id=aefcaca14cdc69b616eabfef99a4fd357a3bb867-6311157-images-thumbs&n=13' className={classes.option_card_img}/>
                    </div>
                    <div className={classes.option_card_txt_content}>
                        <h2>Family Tour</h2>
                        <p>Explore the world together on an unforgettable family tour! Tailored for all ages, these adventures offer exciting activities, cultural experiences, and stress-free planning. From national parks to vibrant cities, there’s something for everyone. Connect with like-minded families and create lasting memories along the way. Start your journey today and discover the joy of traveling as a family!</p>
                        <Link to='/FamilyTour'>Explore tour</Link>
                    </div>
                </div>
                <div className={classes.option_card}>
                    <div className={classes.option_card_img_wrapper}>
                        <img src='https://i.pinimg.com/originals/24/5f/14/245f14102f9e741067132b391a8d116c.jpg' className={classes.option_card_img}/>
                    </div>
                    <div className={classes.option_card_txt_content}>
                        <h2>Adventure Tour</h2>
                        <p>Welcome to Adventure Tour, where your journey begins! Explore breathtaking landscapes and immerse yourself in thrilling activities tailored for every adventurer. From mountain treks to serene kayaking experiences, our curated itineraries ensure unforgettable moments. Join our passionate guides and discover hidden gems around the globe. Let your adventure story unfold with us today!</p>
                        <Link to='/AdventureTour'>Explore tour</Link>
                    </div>
                </div>
                <div className={classes.option_card}>
                    <div className={classes.option_card_img_wrapper}>
                        <img src='https://www.amongelite.com/wp-content/uploads/2016/03/AURELIA_Fraser-Yachts-Luxury-Yachts-Yachting-Charter-Yachts-Yacht-Club-Superyachts-Luxury-Magazine-Beverly-Hills-Magazine-4.jpg' className={classes.option_card_img}/>
                    </div>
                    <div className={classes.option_card_txt_content}>
                        <h2>Luxury Tour</h2>
                        <p>Indulge in a world of elegance with our exclusive luxury tours! Experience five-star accommodations, gourmet dining, and personalized itineraries tailored to your desires. Explore breathtaking destinations in style, from private yacht charters to VIP access at renowned attractions. Enjoy bespoke services and unique experiences that cater to your every whim. Elevate your travel experience and embrace the art of luxury with us!</p>
                        <Link to='/LuxuryTour'>Explore tour</Link>
                    </div>
                </div>
                <div className={classes.option_card}>
                    <div className={classes.option_card_img_wrapper}>
                        <img src='https://avatars.mds.yandex.net/i?id=b793810734df4a29f905127be518a42bedb1ac24-5236641-images-thumbs&n=13' className={classes.option_card_img}/>
                    </div>
                    <div className={classes.option_card_txt_content}>
                        <h2>Cultural Tour</h2>
                        <p>Immerse yourself in the richness of global heritage with our cultural tours! Discover vibrant traditions, art, and history as you explore iconic landmarks and hidden gems. Engage with local communities through authentic experiences, from cooking classes to traditional performances. Learn the stories behind each destination and connect with its people on a deeper level. Enrich your journey and broaden your horizons—book your cultural adventure today!</p>
                        <Link to='/CulturalTour'>Explore tour</Link>
                    </div>
                </div>
            </div>

        </section>

        <DashboardFooter />
    </>
  )
}

export default TourOptions;