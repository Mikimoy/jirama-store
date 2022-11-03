import React from 'react';
import ArtikelHome from '../components/ArtikelHome';
import Footer from '../components/Footer';
import HeroHome from '../components/HeroHome'
import NavigationBar from '../components/NavigationBar'

const Home = () => {
  return (
    <>
    <div>
        <NavigationBar />
        <HeroHome />
        <ArtikelHome />
        <Footer />
    </div>
    </>
  )
}

export default Home