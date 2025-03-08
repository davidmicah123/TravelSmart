import { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const MobileNav = ({ isMobileNavVisible, closeMobileNav }) => {
    return (
        <section className={`${classes.header} ${isMobileNavVisible ? classes.show : classes.hide}`}>
            <div className={classes.mobile_nav_content_wrapper}>
                <header className={classes.nav_header}>
                    <Link to="/" className={classes.mobile_navbar_logo}>TravelSmart</Link>
                </header>
                <ul className={classes.navbar_list}>
                    <li><Link to="/about" className={classes.mobile_navbar_link}>About Us</Link></li>
                    <li><Link to="/TripCatalogue" className={classes.mobile_navbar_link}>Trip Catalogue</Link></li>
                    <li><Link to="/ContactUs" className={classes.mobile_navbar_link}>Contact Us</Link></li>
                    <li><Link to="/TourReview" className={classes.mobile_navbar_link}>Tour Review</Link></li>
                </ul>

                <div className={classes.mobile_nav_closer} onClick={closeMobileNav}>
                    <ion-icon name="close-sharp"></ion-icon>
                </div>
            </div>
        </section>
    );
};

const Navbar = () => {
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible); // Toggle between true and false
    };

    const closeMobileNav = () => {
        setIsMobileNavVisible(false);
        console.log('close');
    };

    return(
        <>
            {
                isMobileNavVisible ? 
                <MobileNav isMobileNavVisible={isMobileNavVisible} closeMobileNav={closeMobileNav} />
                : ''
            }
            <nav className={classes.navbar}>
                <div className={classes.nav_content_wrapper}>
                    <h2 className={classes.logo}>
                        <Link to='/' className={classes.nav_link}>TravelSmart</Link>
                    </h2>

                    <ul className={`${classes.nav_list_wrapper}`}>
                        <li className={classes.nav_list_item}>
                            <Link to='/about' className={classes.nav_link}>About Us</Link>
                        </li>
                        <li className={classes.nav_list_item}>
                            <Link to="/TripCatalogue" className={classes.nav_link}>Trip Catalogue</Link>
                        </li>
                        <li className={classes.nav_list_item}>
                            <Link to='/ContactUs' className={classes.nav_link}>Contact Us</Link>
                        </li>
                        <li className={classes.nav_list_item}>
                            <Link to='/TourReview' className={classes.nav_link}>Tour Review</Link>
                        </li>
                    </ul>

                    <ul className={classes.mobile_nav_toogler} onClick={toggleMobileNav}>
                        <ion-icon name="menu-sharp"></ion-icon>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
