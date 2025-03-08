import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import classes from "./ContactUs.module.css";
import aliyah from "../../../src/Assets/Images/Devs/Aliyah.jpg"
import david from "../../../src/Assets/Images/Devs/david.jpg"
import moyin from "../../../src/Assets/Images/Devs/moyin.jpg"
import mustapha from "../../../src/Assets/Images/Devs/mustapha.jpg"
import stanley from "../../../src/Assets/Images/Devs/stanley.jpg"
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <>
      <Navbar/>
        <div className={classes.image_container}>
          <div className={classes.text_overlay}>
            <p className={classes.main_text}>Contact US</p>            
          </div>
        </div>

        <div className={classes.text}>
          <h3>Meet Our Team | Vertex Coders</h3>
        </div>

        <section className={classes.card_container}>
          <div className={classes.card}>
            <img src={moyin} alt="Image 1" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>Adio Moyinoluwa</h3>
              <p>I'm Adio Moyinoluwa, a skilled Front-end Developer specializing in website design, UX/UI, and responsive web development solutions.</p>
              <div className={classes.contact_icon_wrapper}>
                  <Link to='https://www.facebook.com/moyin6?mibextid=ZbWKwL' target='_blank'><ion-icon name="logo-facebook"></ion-icon></Link>
                  <Link to='mailto:adiomoyinoluwa6@gmail.com' target='_blank'><ion-icon name="mail"></ion-icon></Link>
                  <Link to='https://x.com/NImnaref?s=09' target='_blank'><ion-icon name="logo-twitter"></ion-icon></Link>
                  <Link to='https://www.linkedin.com/in/adio-moyinoluwa-273877272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <img src={david}alt="Image 2" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>David Micah-Daniels</h3>
              <p>My name is David Micah-Daniels, An expert frontend developer highly skilled in HTML5, CSS3, JavaScript ES6 and React and other fronted libraries.</p>
              <div className={classes.contact_icon_wrapper}>
                  <Link to='https://web.facebook.com/david.micahdaniels' target='_blank'><ion-icon name="logo-facebook"></ion-icon></Link>
                  <Link to='mailto:micahdanielsdavid2007@gmail.com' target='_blank'><ion-icon name="mail"></ion-icon></Link>
                  <Link to='https://x.com/Davidmicdan123' target='_blank'><ion-icon name="logo-twitter"></ion-icon></Link>
                  <Link to='https://ng.linkedin.com/in/david-micah-daniels-119982238' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <img src={aliyah} alt="Image 3" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>Aliyah Adeleke</h3>
              <p>My name is  Adeleke Aliyah and I am a React developer, I am very skilled in HTML, CSS, JavaScript and JavaScript libaries. I'm an Upcoming fullstack developer</p>
              <div className={classes.contact_icon_wrapper}>
                  <Link to='https://web.facebook.com/profile.php?id=100094262795748&mibextid=kFxxJD&_rdc=1&_rdr' target='_blank'><ion-icon name="logo-facebook"></ion-icon></Link>
                  <Link to='mailto:adelekealiyat16@gmail.com' target='_blank'><ion-icon name="mail"></ion-icon></Link>
                  <Link to='https://x.com/adeleke72420?s=09' target='_blank'><ion-icon name="logo-twitter"></ion-icon></Link>
                  <Link to='' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <img src={stanley} alt="Image 3" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>Stanley Ojukwu </h3>
              <p>I'm Stanley ojukwu , an aspiring full stack developer. I specialize adaptive and responsive web designs and development</p>
              <div className={classes.contact_icon_wrapper}>
                  <Link to='' target='_blank'><ion-icon name="logo-facebook"></ion-icon></Link>
                  <Link to='' target='_blank'><ion-icon name="mail"></ion-icon></Link>
                  <Link to='' target='_blank'><ion-icon name="logo-twitter"></ion-icon></Link>
                  <Link to='' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></Link>
              </div>
            </div>
          </div>
          <div className={classes.card}>
            <img src={mustapha} alt="Image 3" className={classes.card_image}/>
            <div className={classes.card_content}>
              <h3>Mustapha Akintola</h3>
              <p>My name is Mustapha Akintola, I'm a software developer specializing in website design and responsive websites.</p>
              <div className={classes.contact_icon_wrapper}>
                  <Link to='https://x.com/Theemusty16?t=pzAoMT-CPEjQweLwr5WY-g&s=09' target='_blank'><ion-icon name="logo-facebook"></ion-icon></Link>
                  <Link to='mailto:abassmustapha31@gmail.com' target='_blank'><ion-icon name="mail"></ion-icon></Link>
                  <Link to='' target='_blank'><ion-icon name="logo-twitter"></ion-icon></Link>
                  <Link to='' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></Link>
              </div>
            </div>
          </div>
      
        </section>



        <div className={classes.map_container}>
          <h3>Our Location</h3>
          <iframe className={classes.map_display}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.608675079386!2d3.8856877734029522!3d7.397668912391311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d6af7758517%3A0x17e6ec5eb71490c3!2sIdea%20Konsult%20Limited%20Adamasingba!5e0!3m2!1sen!2sng!4v1726926953043!5m2!1sen!2sng"
            allowfullscreen="" loading="lazy">
          
           </iframe>
        </div>
      <Footer/>
    </>
  );
}

export default ContactUs;