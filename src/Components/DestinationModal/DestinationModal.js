import React from 'react'
import classes from "../../Pages/Destinations/Destinations.module.css"

const DestinationModal = (props) => {
  return (
        <div className={classes.destination_details_modal}>
            <div className={classes.modal_closer} onClick={props.onClose}>
                <ion-icon name="close-sharp"></ion-icon>
            </div>
            <div className={classes.details_modal_card}>
                <div className={classes.modal_card_img_wrapper}>
                    <img src={props.url} className={classes.modal_card_img} />
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
                            <li>Available Option: flight</li>
                            <li>Price Range: $100 - 350</li>
                            <li>Continent: {props.continent}</li>
                            <li>Closest Airport: alakia airport</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DestinationModal;