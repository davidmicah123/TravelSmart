import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import HomepageHero from '../../Components/HomeHero/HomeHero';
import Footer from '../../Components/Footer/Footer';
import HomeFeaturedHotels from '../../Components/HomeFeaturedHotels/HomeFeaturedHotels';
import Scope from '../../Components/Scope/Scope';
import Meals from '../../Components/Meals/Meals';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';

const Home = () => {
  return (
    <>
        <Navbar/>
        <HomepageHero />
        <Scope />
        <HomeFeaturedHotels />
        <Meals />
        <NewsLetter/>
        <Footer />
    </>
  )
}

export default Home;