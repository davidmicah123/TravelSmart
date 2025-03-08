import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Containers/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./Containers/About/About"
import ContactUs from './Pages/ContactUs/ContactUs';
import TourReview from './Containers/TourReview/TourReview';
import TripCatalogue from './Containers/TripCatalogue/TripCatalogue';
import TouristTransport from './Pages/TouristTransport/TouristTransport';
import Destinations from './Pages/Destinations/Destinations';
import Accomodiations from './Pages/Accomodiations/Accomodiations';
import TourOptions from './Pages/TourOptions/TourOptions';
import FamilyTour from './Pages/FamilyTour/FamilyTour';
import AdventureTour from './Pages/AdventureTour/AdventureTour';
import LuxuryTour from './Pages/LuxuryTour/LuxuryTour';
import CulturalTour from './Pages/CulturalTour/CulturalTour';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
            <Route exact path="/TourReview" element={<TourReview />} />
            <Route exact path="/TripCatalogue" element={<TripCatalogue />} />
            <Route exact path="/TouristTransport" element={<TouristTransport />} />
            <Route exact path="/Destinations" element={<Destinations />} />
            <Route exact path="/Accomodiations" element={<Accomodiations />} />
            <Route exact path="/TourOptions" element={<TourOptions />} />
            <Route exact path="/FamilyTour" element={<FamilyTour />} />
            <Route exact path="/AdventureTour" element={<AdventureTour />} />
            <Route exact path="/LuxuryTour" element={<LuxuryTour />} />
            <Route exact path="/CulturalTour" element={<CulturalTour />} />
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

