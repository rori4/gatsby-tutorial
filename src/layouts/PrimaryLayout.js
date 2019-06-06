import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from '../components/SEO'

const PrimaryLayout = (props) => (
    <div>
    <SEO />
    <Header />
    <div className="container">
      <div className="row justify-content-md-center">
        <div className={props.column}>
          {props.children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrimaryLayout