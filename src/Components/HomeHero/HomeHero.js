import classes from "./HomeHero.module.css";
import heroImg from "../../Assets/Images/homepage_hero-removebg.png";
import { Link } from "react-router-dom";

const HomepageHero = () => {
    return(
        <section className={classes.hero}>
            <div className={classes.hero_content_wrapper}>
                <div className={classes.hero_txt_content}>
                    <h2>EXPLORE WITH EASE!</h2>
                    <p>At TravelSmart, we make travel easy and blissful. Whether you're seeking a solo adventure or a family getaway, we provide expert guidance and great exclusive deals. Start your next journey with confidence. Explore with TravelSmart today!</p>
                    <Link to="/TripCatalogue"><button className={classes.explore_btn}>Explore</button></Link>
                </div>

                <div className={classes.hero_img_wrapper}>
                    <img src={heroImg} className={classes.hero_img} />
                </div>
            </div>
        </section>
    );
}

export default HomepageHero;