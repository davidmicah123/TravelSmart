import React from 'react';
import classes from "./Meals.module.css"

const Meals = () => {
  return (
    <section className={classes.meal_section}>
        <div className={classes.meals_content_wrapper}>
            <h3 className={classes.meals_subheading}>Meals</h3>
            <h2 className={classes.meals_heading}>Food's available choosen from 5,000+ recipes</h2>


            <div className={classes.meal_cards_wrapper}>
                <div className={classes.meal_card}>
                    <div className={classes.meal_card_img_wrapper}>
                        <img src='https://omnifood.dev/img/meals/meal-1.jpg' className={classes.meal_card_img}/>
                    </div>
                    <div className={classes.meal_card_text_content}>
                        <div className={classes.green_tag}>Vegetarian</div>
                        <h3>Japanese Gyozas</h3>
                        <ul>
                            <li><ion-icon name="flame-outline"></ion-icon> 650 calories</li>
                            <li><ion-icon name="restaurant-outline"></ion-icon> NutriScore ® 74</li>
                            <li><ion-icon name="star-outline"></ion-icon> 4.9 rating (537)</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.meal_card}>
                    <div className={classes.meal_card_img_wrapper}>
                        <img src='https://omnifood.dev/img/meals/meal-2.jpg' className={classes.meal_card_img}/>
                    </div>
                    <div className={classes.meal_card_text_content}>
                        <div className={classes.yellow_tag}>Vegan</div>
                        <h3>Avocado Salad</h3>
                        <ul>
                            <li><ion-icon name="flame-outline"></ion-icon> 400 calories</li>
                            <li><ion-icon name="restaurant-outline"></ion-icon> NutriScore ® 92</li>
                            <li><ion-icon name="star-outline"></ion-icon> 4.8 rating (441)</li>
                        </ul>
                    </div>
                </div>
                <div className={`${classes.meal_card}, ${classes.special_meal_card}`}>
                    <h3>Works with any diet:</h3>
                    <ul className={classes.custom_meal_card_list}>
                        <li><ion-icon name="checkmark-done-outline"></ion-icon> Vegetarian</li>
                        <li><ion-icon name="checkmark-done-outline"></ion-icon> Vegan</li>
                        <li><ion-icon name="checkmark-done-outline"></ion-icon> Pescatarian</li>
                        <li><ion-icon name="checkmark-done-outline"></ion-icon> Gluten-free</li>
                        <li><ion-icon name="checkmark-done-outline"></ion-icon> Lactose-free</li>
                        <li><ion-icon name="checkmark-done-outline"></ion-icon> Keto</li>
                        <li><ion-icon name="checkmark-done-outline"></ion-icon> Paleo</li>
                        <li><ion-icon name="checkmark-done-outline"></ion-icon> Low FODMAP</li>
                        <li><ion-icon name="checkmark-done-outline"></ion-icon> Kid-friendly</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Meals;