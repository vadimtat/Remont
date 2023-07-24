/* eslint-disable */
import React from 'react';

import './MainPage.css';
import Header from '../../blocks/Header/Header';
import Hero from '../../blocks/Hero/Hero';
import Customer from '../../blocks/Customer/Customer';
import Advantage from '../../blocks/Advantage/Advantage';
import Pricing from '../../blocks/Pricing/Pricing';
import Gallery from '../../blocks/Gallery/Gallery';
import Reviews from '../../blocks/Reviews/Reviews';
import Maps from '../../blocks/Maps/Maps';
import Footer from '../../blocks/Footer/Footer';

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <Header />
        <Hero />
        <Customer />
        <Advantage />
        <Pricing />
        <Gallery />
        <Reviews />
        <Maps />
        <Footer />
      </div>
    );
  }
}
