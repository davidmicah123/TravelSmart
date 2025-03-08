// import React from 'react'
// import classes from "./NewsLetter.module.css";

// const NewsLetter = () => {
//   return (
//     <section className={classes.newsletter_section}>
//         <div className={classes.newsletter_contnet_wrapper}>
//             <div className={classes.newsletter_top_text}>
//                 <h2>Subscribe To Newsletter</h2>
//                 <p>Please input your fullname and email address to get helpful articles and information from time to time.</p>
//             </div>
        
//             <div className={classes.newsletter_box}>
//                 <h2>Enver your details to subscribe to newsletter.</h2>
//                 <div className={classes.inputs_box_wrapper}>
//                     <div className={classes.input_wrapper}>
//                         <ion-icon name="person-outline"></ion-icon>
//                         <input type='text' placeholder='Enter your Fullname' required/>
//                     </div>
//                     <div className={classes.input_wrapper}>
//                         <ion-icon name="mail-outline"></ion-icon>   
//                         <input type='text' placeholder='Enter your Email Address' required/>
//                     </div>
//                     <button className={classes.subscribe_btn}>Subscribe</button>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default NewsLetter;


import React, { useState } from 'react';
import classes from "./NewsLetter.module.css";

const NewsLetter = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent page refresh

    // If the form is valid, show the success alert
    if (fullName && email) {
      alert(`${fullName} has successfully subscribed to the newsletter!`);
      
      // Clear the form fields
      setFullName('');
      setEmail('');
    }
  };

  return (
    <section className={classes.newsletter_section}>
      <div className={classes.newsletter_contnet_wrapper}>
        <div className={classes.newsletter_top_text}>
          <h2>Subscribe To Newsletter</h2>
          <p>Please input your fullname and email address to get helpful articles and information from time to time.</p>
        </div>

        <div className={classes.newsletter_box}>
          <h2>Enter your details to subscribe to the newsletter.</h2>
          <form onSubmit={handleSubscribe}>
            <div className={classes.inputs_box_wrapper}>
              <div className={classes.input_wrapper}>
                <ion-icon name="person-outline"></ion-icon>
                <input
                  type='text'
                  placeholder='Enter your Fullname'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className={classes.input_wrapper}>
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type='email'
                  placeholder='Enter your Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={classes.subscribe_btn}>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
