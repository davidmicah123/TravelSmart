import React from 'react';
import classes from "./Scope.module.css";

const Scope = () => {
  return (
    <section className={classes.scope_section}>
        <div className={classes.scope_content_wrapper}>
            <h3>How It Works</h3>
            <h2>Your GO-TO Travel And Tour Website</h2>

            <div className={classes.scope_Card}>
                <div className={classes.scope_card_txt_wrapper}>
                    <h2 className={classes.scope_number}>01</h2>
                    <h3>Accommodation Display</h3>
                    <p className={classes.scope_card_txt}>We specialize in seamless travel experiences, from tailored itineraries to all-inclusive packages, 
                        so you can explore the world stress-free. Discover new destinations with confidence, 
                        knowing every detail is expertly handled. Travel smarter with TravelSmart! </p>
                </div>
                <div className={classes.scope_card_img_wrapper}>
                    <img src='https://www.thedailyaustralianpost.com.au/wp-content/uploads/2023/06/178787411.jpg' className={classes.scope_img} />
                </div>
            </div>
            <div className={`${classes.scope_Card} ${classes.second_scope}`}>
                 <div className={`${classes.second_scope_card_img_wrapper} ${classes.second_feature}`}>
                    <img src='https://vitesseworldwide.com/wp-content/uploads/2022/06/What-Types-of-Companies-Use-Aircraft-Charters.jpg' className={classes.scope_img} />
                </div>
                <div className={`${classes.scope_card_txt_wrapper} ${classes.second_feature_txt_wrapper}`} >
                    <h2 className={classes.scope_number}>02</h2>
                    <h3>Transport Options</h3>
                    <p className={classes.scope_card_txt}>We offer a variety of reliable and affordable transport options. 
                    Whether by air, road, or sea, our trusted partners ensure you travel comfortably and efficiently. 
                    Choose TravelSmart for hassle-free transportation, wherever your adventures take you.
                    </p>
                </div>
            </div>
            <div className={classes.scope_Card}>
                <div className={classes.scope_card_txt_wrapper}>
                    <h2 className={classes.scope_number}>03</h2>
                    <h3>Tour Package</h3>
                    <p className={classes.scope_card_txt}>Discover the world with TravelSmart’s curated tour packages! Whether you're seeking adventure, 
                    relaxation, or cultural exploration, our expertly crafted tours offer unforgettable experiences 
                    tailored to your desires.
                    </p>
                </div>
                <div className={classes.scope_card_img_wrapper}>
                    <img src='https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className={classes.scope_img} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Scope;