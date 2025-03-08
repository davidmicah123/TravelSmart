import React from 'react'
import classes from "./BookFlight.module.css"
import emerates from "../../Assets/Images/logos/emerates.jpg"
import ethiad from "../../Assets/Images/logos/ethiad.jpg"
import skyscanner from "../../Assets/Images/logos/skyscanner.png"
import qatar from "../../Assets/Images/logos/qatar.png"
import { Link } from 'react-router-dom'

const BookFlight = () => {
  return (
    <section className={classes.flight_bookings_section}>
        <h2>Book Your Flight Now</h2>
        <div className={classes.logos_wrapper}>
            <div className={classes.logo_img_wrapper}>
                <Link to="https://www.qatarairways.com/en-ng/homepage.html" target='_blank'>
                    <img src={qatar} className={classes.logo}/>
                </Link>
            </div>
            <div className={classes.logo_img_wrapper}>
                <Link to="https://www.skyscanner.net/" target='_blank'>
                    <img src={skyscanner} className={classes.logo}/>
                </Link>
            </div>
            <div className={classes.logo_img_wrapper}>
                <Link to="https://www.etihad.com/en-ng/?CID=affduomai2014&utm_campaign=genericen&utm_medium=affiliates&utm_source=genericen&pzevent=1100lzyyn9f6&ref=1011l7Au&adref=&gad_source=1&gclid=Cj0KCQjwo8S3BhDeARIsAFRmkOOEAAdTkreFxRV6EB1eUnMV04uGLRTPw_1FHj8qit-3iydc22GTLBYaAmuXEALw_wcB" target='_blank'>
                    <img src={ethiad} className={classes.logo}/>
                </Link>
            </div>
            <div className={`${classes.logo_img_wrapper}, ${classes.emerates_logo_wrapper}`}>
                <Link to="https://www.emirates.com/ng/english/" target='_blank'>
                    <img src={emerates} className={classes.logo}/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default BookFlight;