import classes from "./Footer.module.css";
import BackToTop from "../BackToTop/BackToTop";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer_content_wrapper}>
                <div className={classes.footer_top}>
                    <div className={classes.footer_main}>
                        <h2>TravelSmart</h2>
                        <p>
                            At TravelSmart, we make travel easy and blissful. Whether you're seeking a solo adventure or a family getaway, we provide expert guidance and great exclusive deals. Start your next journey with confidence. Explore with TravelSmart today!
                        </p>
                    </div>

                    <ul className={classes.footer_list}>
                        <li className={classes.footer_list_item}>Travelling</li>
                        <li className={classes.footer_list_item}><Link to='/about' className={classes.footer_link}>About Us</Link></li>
                        <li className={classes.footer_list_item}><Link to='/TripCatalogue' className={classes.footer_link}>Trip Catalogue</Link></li>
                        <li className={classes.footer_list_item}><Link to='/ContactUs' className={classes.footer_link}>Contact Us</Link></li>
                        <li className={classes.footer_list_item}><Link to='/TourReview' className={classes.footer_link}>Tour Review</Link></li>
                    </ul>

                    <ul className={`${classes.footer_list} ${classes.first_hide}`}>
                        <li className={classes.footer_list_item}><Link to='/TripCatalogue' className={classes.footer_link}>Plan Tour</Link></li>
                        <li className={classes.footer_list_item}><Link to='/Accomodiations' className={classes.footer_link}>Accommodation</Link></li>
                        <li className={classes.footer_list_item}><Link to='/Destinations' className={classes.footer_link}>View Destinations</Link></li>
                        <li className={classes.footer_list_item}><Link to='/TouristTransport' className={classes.footer_link}>Transport Dashboard</Link></li>
                        <li className={classes.footer_list_item}><Link to='/TourReview' className={classes.footer_link}>Review Tour</Link></li>
                    </ul>
                    
                     <ul className={`${classes.footer_list} ${classes.first_hide}`}>
                         <li className={classes.footer_list_item}><Link to='/TourOptions' className={classes.footer_link}>Tour Options</Link></li>
                         <li className={classes.footer_list_item}><Link to='/FamilyTour' className={classes.footer_link}>Family Tour</Link></li>
                         <li className={classes.footer_list_item}><Link to='/LuxuryTour' className={classes.footer_link}>Luxury Tour</Link></li>
                         <li className={classes.footer_list_item}><Link to='/CulturalTour' className={classes.footer_link}>Cultural Tour</Link></li>
                         <li className={classes.footer_list_item}><Link to='/AdventureTour' className={classes.footer_link}>Adventure Tour</Link></li>
                     </ul>
                </div>
                <hr />
                <div className={classes.footer_bottom}>
                    <div className={classes.footer_bottom_contnet_wrapper}>
                        <p>&copy; 2024 TravelSmart</p>

                        <ul className={classes.footer_icons_wrapper}>
                            <li className={classes.footer_icon}>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </li>
                            <li className={classes.footer_icon}>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </li>
                            <li className={classes.footer_icon}>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </li>
                            <li className={classes.footer_icon}>
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.back_to_top_wrapper}>
                        <BackToTop /> {/* Include the BackToTop component */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
