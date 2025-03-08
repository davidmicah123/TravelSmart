import classes from "./HomeFeaturedHotels.module.css";

const HomeFeaturedHotels = () => {
    return(
        <section className={classes.featured_hotel_section}>
            <div className={classes.featured_hotels_wrapper}>
                <h3 className={classes.features_hotel_heading}>See these hotels? Very demure, very cutesy.</h3>

                <div className={classes.feature_hotel_card_wrapper}>
                    <div className={classes.featured_hotel_card}>
                        <div className={classes.featured_card_img_wrapper}>
                            <img src="https://avatars.mds.yandex.net/i?id=aadce4f112a4c57f53b9137f5d1d45593d4e32fa4ff1a3fa-12317703-images-thumbs&n=13" className={classes.featured_card_img} />
                        </div>
                        <div className={classes.featured_card_txt_wrapper}>
                            <h3>Poseidonion Grand Hotel</h3>
                            <p>2, North Carolina, 254321 Westveille avenue</p>
                            <p className={classes.ratings_wrapper}>
                                <div>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                                <p>5 star rating</p>
                            </p>
                        </div>
                    </div>
                    <div className={classes.featured_hotel_card}>
                        <div className={classes.featured_card_img_wrapper}>
                            <img src="https://avatars.mds.yandex.net/i?id=de003969e13e5acc6ec185facd0a98c17e1ffb90-8176762-images-thumbs&n=13" className={classes.featured_card_img} />
                        </div>
                        <div className={classes.featured_card_txt_wrapper}>
                            <h3>Luxury Swiss Hotel</h3>
                            <p>2, North Carolina, 254321 Westveille avenue</p>
                            <p className={classes.ratings_wrapper}>
                                <div>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                                <p>5 star rating</p>
                            </p>
                        </div>
                    </div>
                    <div className={classes.featured_hotel_card}>
                        <div className={classes.featured_card_img_wrapper}>
                            <img src="https://i.pinimg.com/originals/13/da/e8/13dae85db133e7ebef18a2cfa01ddc98.jpg" className={classes.featured_card_img} />
                        </div>
                        <div className={classes.featured_card_txt_wrapper}>
                            <h3>Omni Austin Hotel</h3>
                            <p>2, North Carolina, 254321 Westveille avenue</p>
                            <p className={classes.ratings_wrapper}>
                                <div>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                                <p>5 star rating</p>
                            </p>
                        </div>
                    </div>
                    <div className={classes.featured_hotel_card}>
                        <div className={classes.featured_card_img_wrapper}>
                            <img src="https://i.pinimg.com/originals/54/2c/3c/542c3c20b9993b601829c84550036aca.jpg" className={classes.featured_card_img} />
                        </div>
                        <div className={classes.featured_card_txt_wrapper}>
                            <h3>Oasia Kuala Suites</h3>
                            <p>2, North Carolina, 254321 Westveille avenue</p>
                            <p className={classes.ratings_wrapper}>
                                <div>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                                <div>
                                    <p>5 star rating</p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeFeaturedHotels;