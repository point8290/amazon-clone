import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3SGv8WJP5n5aiHHfmmIu6Rxf1lOiQkG9Rf7WcNP_XAVjYkDHgDcpaiUSc"
          alt="img"
        />

        <div className="home__row">
          <Product
            id="123121"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={19.99}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            rating={5}
          />
          <Product
            id="123122"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={19.99}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            rating={5}
          />
          <Product
            id="123123"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={19.99}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123124"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={19.99}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            rating={5}
          />
          <Product
            id="123125"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={19.99}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123126"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={19.99}
            image="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
