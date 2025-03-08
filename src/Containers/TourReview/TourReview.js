import React from 'react'
import { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import classes from "./TourReview.module.css";
import tour_img from "../../Assets/Images/Great barrier reef, Australia.jpg"

import portugal_tour_img from "../../Assets/Images/Azores, portugal.jpg"
import mexico_tour_img from "../../Assets/Images/cancun, mexico.jpg"
import japan_tour_img from "../../Assets/Images/tokyo, japan.jpg"
import jerusalem_tour_img from "../../Assets/Images/jerusalem.jpg"
import slovenia_tour_img from "../../Assets/Images/julian alps, slovenia.jpg"
import bahama_tour_img from "../../Assets/Images/bahama beach.jpg"
import hawaii_tour_img from "../../Assets/Images/maui beach, hawaii.jpg"
import india_tour_img from "../../Assets/Images/taj mahal india.jpg"

import feedback_img from "../../Assets/Images/feedback-removebg-preview.png"



const TourReview = () => {
  return (
    <>
        <Navbar/>

        <section className={classes.header}>
          <h1 className={classes.about}>Tour Review</h1>
        </section>

        <div className={classes.review_container}>
    <div className={classes.left_section}>
      <h2>Tell us, how was your visit?</h2>
      <div className={classes.image_card}>
        <img src={tour_img} alt="Tour Image"/>
        <p>Great Barrier reef, Australia</p>
      </div>
    </div>

    {Reviewbox()}
  </div>


  {/* <section className={classes.carousel_wrapper}>
  <div className={classes.image_carousel}>
    <div className={classes.carousel_slide}>
      <img src={portugal_tour_img} alt="Tour Photo 1"/>
      <div className={classes.overlay_text}>Azores, Portugal</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={mexico_tour_img} alt="Tour Photo 2"/>
      <div className={classes.overlay_text}>Cancun, Mexico</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={japan_tour_img} alt="Tour Photo 3"/>
      <div className={classes.overlay_text}>Tokyo, Japan</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={jerusalem_tour_img} alt="Tour Photo 4"/>
      <div className={classes.overlay_text}>Jerusalem</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={slovenia_tour_img} alt="Tour Photo 4"/>
      <div className={classes.overlay_text}>Julian apls, slovenia</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={bahama_tour_img} alt="Tour Photo 4"/>
      <div className={classes.overlay_text}>Bahama beach</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={hawaii_tour_img} alt="Tour Photo 4"/>
      <div className={classes.overlay_text}>Maui beach, hawaii</div>
    </div>
 
    <div className={classes.carousel_slide}>
      <img src={india_tour_img} alt="Tour Photo 4"/>
      <div className={classes.overlay_text}>Taj mahal, India</div>
    </div>
  </div>
  </section> */}

<h2 className={classes.carousel_section_heading}>Many People Visited</h2>
<section className={classes.carousel_wrapper}>
  <div className={classes.image_carousel}>
    <div className={classes.carousel_slide}>
      <img src={portugal_tour_img} alt="Tour Photo 1" />
      <div className={classes.overlay_text}>Azores, Portugal</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={mexico_tour_img} alt="Tour Photo 2" />
      <div className={classes.overlay_text}>Cancun, Mexico</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={japan_tour_img} alt="Tour Photo 3" />
      <div className={classes.overlay_text}>Tokyo, Japan</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={jerusalem_tour_img} alt="Tour Photo 4" />
      <div className={classes.overlay_text}>Jerusalem</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={slovenia_tour_img} alt="Tour Photo 5" />
      <div className={classes.overlay_text}>Julian Alps, Slovenia</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={bahama_tour_img} alt="Tour Photo 6" />
      <div className={classes.overlay_text}>Bahama Beach</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={hawaii_tour_img} alt="Tour Photo 7" />
      <div className={classes.overlay_text}>Maui Beach, Hawaii</div>
    </div>
    <div className={classes.carousel_slide}>
      <img src={india_tour_img} alt="Tour Photo 8" />
      <div className={classes.overlay_text}>Taj Mahal, India</div>
    </div>
  </div>
</section>



    <div className={classes.feedback_container}>
      <div className={classes.feedback_area}>
        <div className={classes.feedback_img_wrapper}>
          <img src={feedback_img} className={classes.feedback_img}/>
        </div>
        {FeedbackForm()}
      </div>
    </div>


  <br/>
  <div className={classes.head}>
     <center><h2>Tour Reviews</h2></center>
     <div className={classes.feedback_summary}>
      <h3>Overall Rating: ★★★★☆ (4.5/5)</h3>
      <p>Based on 100 reviews</p>
    </div>
  </div>
  <section className={classes.card_container}>
    <div className={classes.card}>
     <img src={bahama_tour_img} alt="Image 1" className={classes.card_image}/>
     <div className={classes.card_content}>
       <p>
        My experience with this tour was iconic sites. The blend of culture, art, and breathtaking landscapes made it unforgettable. I can't wait to book my next trip with this agency!
        <br/>
        <br/>
        <b>Philip Collins</b>
        <br/>
       Visited: Italy and Switzerland
     
        <br/>
        Rating:  <b>★★★★★</b>
       </p>
     </div>
    </div>

    <div className={classes.card}>
     <img src={jerusalem_tour_img} alt="Image 2" className={classes.card_image}/>
     <div className={classes.card_content}>
      <p>
        A spiritual and enriching was perfectly balanced between sightseeing and personal time. The travel agency made everything easy, from flight bookings to meals. I’m planning my next trip already!
        <br/>
        <br/>
        <b>Richard Smart</b>
        <br/>
        Visited: Jerusalem, Israel
        <br/>
        Rating:  <b>★★★★★</b>
       </p>
     </div>
    </div>
    <div className={classes.card}>
     <img src={jerusalem_tour_img} alt="Image 2" className={classes.card_image}/>
     <div className={classes.card_content}>
      <p>
      An amazing journey from start to finish! The scenic views and unique activities made this trip one of the best I’ve ever taken. The agency took care of everything, allowing me to fully enjoy the experience.
        <br/>
        <br/>
        <b>John James</b>
        <br/>
        Visited: Jerusalem, Israel
        <br/>
        Rating:  <b>★★★★★</b>
       </p>
     </div>
    </div>
    <div className={classes.card}>
     <img src={mexico_tour_img} alt="Image 2" className={classes.card_image}/>
     <div className={classes.card_content}>
      <p>
      This trip exceeded my expectations! The itinerary was well-planned, offering a perfect mix of adventure and relaxation. Stunning landscapes, rich cultural experiences, every moment was memorable. 
        <br/>
        <br/>
        <b>Danny Mayor</b>
        <br/>
        Visited: Jerusalem, Israel
        <br/>
        Rating:  <b>★★★★★</b>
       </p>
     </div>
    </div>

   
 </section>


        <Footer/>
    </>
  )
}

export default TourReview;

// function Reviewbox() {
//   return (<div className={classes.right_section}>
//     <h3>How would you rate your experience?</h3>
//     <div className={classes.star_rating}>
//       <span className={classes.star} data-rating="1">&#9733;</span>
//       <span className={classes.star} data-rating="2">&#9733;</span>
//       <span className={classes.star} data-rating="3">&#9733;</span>
//       <span className={classes.star} data-rating="4">&#9733;</span>
//       <span className={classes.star} data-rating="5">&#9733;</span>
//     </div>

//     <div className={classes.form_group}>
//       <label for="date">When did you go?</label>
//       <select id="date">
//         <option value="">Select one</option>
//         <option value="january">January</option>
//         <option value="february">February</option>
//         <option value="march">March</option>
//         <option value="april">April</option>
//         <option value="may">May</option>
//         <option value="june">June</option>
//         <option value="july">July</option>
//         <option value="august">August</option>
//         <option value="september">September</option>
//         <option value="october">October</option>
//         <option value="november">November</option>
//         <option value="december">December</option>
//       </select>
//     </div>

//     <div className={classes.form_group}>
//       <label>Who did you go with?</label>
//       <div className={classes.group_buttons} id="group-options">
//         <button type="button" data-group="Business">Business</button>
//         <button type="button" data-group="Couples">Couples</button>
//         <button type="button" data-group="Family">Family</button>
//         <button type="button" data-group="Friends">Friends</button>
//         <button type="button" data-group="Solo">Solo</button>
//       </div>
//     </div>

//     <div className={`${classes.form_group}, ${classes.review_section}`}>
//       <div className={classes.review_header}>
//         <h3>Write your review</h3>
//         <a href="#" className={classes.review_tips}>Review tips</a>
//       </div>
//       <textarea id="review-text" rows="4" placeholder="The views were amazing. We took so many photos!..."></textarea>
//       <p className={classes.char_count}>0/100 min characters</p>
//     </div>

//     <div className={`${classes.form_group}, ${classes.title_section}`}>
//       <label for="review-title">Title your review</label>
//       <input type="text" id="review-title" placeholder="Give us the gist of your experience" className={classes.tour_input} />
//       <p className={classes.char_count}>0/120 max characters</p>

//       <div className={classes.btn}>
//         <center><button type="button" onclick="submitReview()">Submit</button></center>
//       </div>
//     </div>
//   </div>
//   );
// }

// function FeedbackForm() {
//   return <div className={classes.feedback_form_wrapper}>
//     <div className={classes.feedback_form}>
//       <h3>Give Us Feedback</h3>
//       <form>
//         <label for="suggestions">Your Suggestions:</label>
//         <textarea id="suggestions" rows="4" placeholder="Let us know what could be improved..."></textarea>

//         <label for="complaints">Any Complaints?</label>
//         <textarea id="complaints" rows="4" placeholder="Describe any issues you encountered..."></textarea>
//         <br />
//         <button type="submit">Submit Feedback</button>
//       </form>
//     </div>
//   </div>;
// }




function Reviewbox() {
  const [rating, setRating] = useState(null);
  const [date, setDate] = useState('');
  const [group, setGroup] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleGroupClick = (groupValue) => {
    setGroup(groupValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Ensure rating is selected
    if (!rating) {
      alert("Please select a rating.");
      return;
    }

    // Create a summary of the review
    const reviewSummary = `
      Thank you for your feedback!
      Ratings Accepted: ${rating} star${rating > 1 ? 's' : ''}
      Review Title: ${reviewTitle}
      Comment: ${reviewText}
    `;

    // Show the review summary in an alert
    window.alert(reviewSummary);

    // Reload the page after alert is closed
    window.location.reload();
  };

  return (
    <div className={classes.right_section}>
      <h3>How would you rate your experience?</h3>
      <div className={classes.star_rating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${classes.star} ${rating >= star ? classes.selected : ''}`}
            data-rating={star}
            onClick={() => handleRating(star)}
            role="button"
            style={{ color: rating >= star ? '#385e79' : 'gray' }} // Change star color to blue based on selection
          >
            &#9733;
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className={classes.form_group}>
          <label htmlFor="date">When did you go?</label>
          <select id="date" value={date} onChange={(e) => setDate(e.target.value)} required>
            <option value="">Select one</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>

        <div className={classes.form_group}>
          <label>Who did you go with?</label>
          <div className={classes.group_buttons} id="group-options">
            {['Business', 'Couples', 'Family', 'Friends', 'Solo'].map((grp) => (
              <button
                type="button"
                key={grp}
                className={group === grp ? classes.selected : ''}
                onClick={() => handleGroupClick(grp)}
                required
              >
                {grp}
              </button>
            ))}
          </div>
        </div>

        <div className={`${classes.form_group} ${classes.review_section}`}>
          <div className={classes.review_header}>
            <h3>Write your review</h3>
            <a href="#" className={classes.review_tips}>Review tips</a>
          </div>
          <textarea
            id="review-text"
            rows="4"
            placeholder="The views were amazing. We took so many photos!..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            minLength="100"
            required
          ></textarea>
          <p className={classes.char_count}>{reviewText.length}/100 min characters</p>
        </div>

        <div className={`${classes.form_group} ${classes.title_section}`}>
          <label htmlFor="review-title">Title your review</label>
          <input
            type="text"
            id="review-title"
            placeholder="Give us the gist of your experience"
            className={classes.tour_input}
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
            maxLength="120"
            required
          />
          <p className={classes.char_count}>{reviewTitle.length}/120 max characters</p>
        </div>

        <div className={classes.btn}>
          <center><button type="submit">Submit</button></center>
        </div>
      </form>
    </div>
  );
}












function FeedbackForm() {
  const [suggestions, setSuggestions] = useState('');
  const [complaints, setComplaints] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Check if both fields are filled
    if (suggestions.trim() && complaints.trim()) {
      alert('Review Accepted');
      // Clear the form fields after submission
      setSuggestions('');
      setComplaints('');
    } else {
      alert('Please fill out both suggestions and complaints fields.');
    }
  };

  return (
    <div className={classes.feedback_form_wrapper}>
      <div className={classes.feedback_form}>
        <h3>Give Us Feedback</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="suggestions">Your Suggestions:</label>
          <textarea
            id="suggestions"
            rows="4"
            placeholder="Let us know what could be improved..."
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
            required
          ></textarea>

          <label htmlFor="complaints">Any Complaints?</label>
          <textarea
            id="complaints"
            rows="4"
            placeholder="Describe any issues you encountered..."
            value={complaints}
            onChange={(e) => setComplaints(e.target.value)}
            required
          ></textarea>
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}
