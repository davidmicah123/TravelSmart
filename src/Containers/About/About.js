import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import classes from "./About.module.css";
import china from"../../Assets/Images/Airports/Beijing Capital International Airport (PEK) - China.jpg"
import egypt from"../../Assets/Images/Airports/Cairo International Airport (CAI) - Egypt.jpg"
import france from"../../Assets/Images/Airports/Charles de Gaulle Airport (CDG) - France.jpg"

import canada_hotel from "../../Assets/Images/hotel room canada.jpg"
import portugal_hotel1 from "../../Assets/Images/Algarve, portugal.jpg"
import portugal_hotel2 from "../../Assets/Images/Azores, portugal.jpg"
import australia_hotel from "../../Assets/Images/cairns australia.jpg"
import mexico_hotel from "../../Assets/Images/cancun, mexico.jpg"
import marrakech_hotel from "../../Assets/Images/equity hostel marrakech.jpg" 
import india_hotel from "../../Assets/Images/himalayas, nepal and india.jpg" 
import slovenia_hotel from "../../Assets/Images/julian alps, slovenia.jpg" 
import air_hotel from "../../Assets/Images/lake house air bnb.jpg" 
import Marriott_hotel from "../../Assets/Images/Marriott_hotel global.jpg" 
import { Link } from 'react-router-dom';

import BookFlight from '../../Components/BookFlight/BookFlight';

const About = () => {
  return (
    <>
        <Navbar />
        
        <section className={classes.header}>
          <h1 className={classes.about}> ABOUT US</h1>
        </section>

        <section className={classes.main}>

          <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={classes.image_main}/>
          <div  className={classes.main_text}>
              <h2>Brief Overview</h2>
              <p>TravelSmart is a premier travel agency dedicated to providing seamless and personalized travel experiences. 
Specializing in curated tour packages, we cater to a variety of travel styles, from adventure seekers to culture enthusiasts.
 With a commitment to exceptional service, affordability, and attention to detail, TravelSmart ensures that every journey 
is memorable, safe, and perfectly tailored to each traveler’s unique preferences. Explore the world effortlessly with 
TravelSmart, your trusted partner for all your travel needs.
</p>
          </div>
        </section>

        <section className={classes.section_body}>
          <section className={classes.section_one}>
              <p className={classes.mission_header}>OUR MISSION</p>
              <div className={classes.text_p}>
                  <p>
                      We firmly believe that by helping people travel more, 
                      explore the world and experience diversity, 
                      we create a meaningful socio-economic impact.
                  </p>
              </div>
              <div className={classes.quote}>
                  Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our 
                  people need it sorely on these accounts. Broad, wholesome, charitable views of men and things 
                  cannot be acquired by vegetating in one little corner of the earth all one’s lifetime.

                  <p>Mark Twain, 1869</p>
              </div>
          </section>

          <section className={classes.section_two}>
              <p className={classes.mission_header}>Travel Smart's Core Values</p>
              <div className={classes.content}>
                  <p className={classes.header1}>
                      <i className="fa fa-plane" aria-hidden="true"></i> Embrace diversity
                  </p>
                  <p>We are 30 nationalities (out of about 300 employees!)</p>
              
                  <p className={classes.header1}>
                      <i className="fa fa-plane" aria-hidden="true"></i> Love travel and technology
                  </p>
                  <p>We pride ourselves on being both explorers and geeks</p>
              
                  <p className={classes.header1}>
                      <i className="fa fa-plane" aria-hidden="true"></i> Promote meritocracy
                  </p>
                  <p>Advancement based on achievement and attitude, not tenure or pedigree</p>
              </div>
          </section>
      </section>        


    <BookFlight/>



      <h1 className={classes.tittle}> GALLERY</h1><br/>
        <section className={classes.image}>
          <div className={classes.image_section_wrapper}>
            <img src={canada_hotel} alt="hotel image" className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={portugal_hotel1} alt="hotel image" className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={portugal_hotel2} alt="hotel image" className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={australia_hotel} alt="hotel image" className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={mexico_hotel} className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={marrakech_hotel} alt="hotel image" className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={india_hotel} alt="hotel image" className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={Marriott_hotel} alt="hotel image" className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={slovenia_hotel} alt="hotel image" className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={marrakech_hotel} alt="hotel image" className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={slovenia_hotel} alt="hotel image" className={classes.image_section}/>
          </div>
          <div className={classes.image_section_wrapper}>
            <img src={air_hotel} alt="hotel image" className={classes.image_section}/>
          </div>
        </section>
         <h1 className={classes.tittle}> USEFUL ARTICLES</h1><br/>

        <section  className={classes.image_topic}>
          <div className={classes.topic_div}>
            <div className={classes.topic_img_wrapper}>
                <img src='https://lp-cms-production.imgix.net/2024-01/DSC0187.jpg?w=1440&h=810&fit=crop&auto=format&q=75' alt="" className={classes.image_image} />

            </div>
            <div className={classes.topic_text}>
                 <h3>Ask a local expert about Armenia...</h3>
                 <Link to='https://www.lonelyplanet.com/articles/local-expert-elsewhere-armenia' target='_blank'>Read article</Link>
            </div>
          </div>          <div className={classes.topic_div}>
            <div className={classes.topic_img_wrapper}>
               <img src='https://lp-cms-production.imgix.net/2024-01/Stocksytxpf22f9d26raT300Medium4517362.jpg?w=1440&h=810&fit=crop&auto=format&q=75' alt="" className={classes.image_image}/></div>
               <div className={classes.topic_text}>
               <h3>The 10 best ways to get under the skin of Los Angeles...</h3>
               <Link to='https://www.lonelyplanet.com/articles/top-things-to-do-in-los-angeles' target='_blank'>Read article</Link>
               </div>
             </div>
             <div className={classes.topic_div}>
              <div className={classes.topic_img_wrapper}>
               <img src='https://lp-cms-production.imgix.net/2022-08/Washington-USA-Seattle-StephanieB-shutterstock_editorial_1901529775-rfe.jpg?w=1440&h=810&fit=crop&auto=format&q=75' alt="" className={classes.image_image}/></div>
              <div className={classes.topic_text}>
              <h3>10 free things to do in Washington state...</h3>
              <Link to='https://www.lonelyplanet.com/articles/top-free-things-to-do-in-washington-state' target='_blank'>Read article</Link>
               </div>
             </div>
             <div className={classes.topic_div}>
              <div className={classes.topic_img_wrapper}>
               <img src='https://lp-cms-production.imgix.net/2023-01/GettyImages-1209020145.jpg?w=1440&h=810&fit=crop&auto=format&q=75' alt="" className={classes.image_image}/></div>
               <div className={classes.topic_text}>
               <h3>24 free things to do in Lisbon...</h3>
               <Link to='https://www.lonelyplanet.com/articles/top-free-things-to-do-in-lisbon' target='_blank'>Read article</Link>
               </div>
             </div>
        </section>

        <Footer />
    </>
  );
}

export default About;