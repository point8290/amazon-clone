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
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829672"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90820332"
            title="Intex Jogger B Multimedia Headphones"
            price={109.8}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81Z7xJF2kML._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="908340992"
            title="Tenda AC10 1200Mbps Wireless Smart Dual-Band Gigabit WiFi Router (Black)"
            price={904.8}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Qq5tFiBLL._SL1000_.jpg"
          />
          <Product
            id="99020992"
            title="jioFi JDR740 (Dongle) 150Mbps Wireless 4G Portable Router"
            price={45.8}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/417aHoqozHL._SL1371_.jpg"
          />
          <Product
            id="99020452"
            title="Quantum QHM8106 USB to RJ45 Ethernet LAN Adapter (White)"
            price={47.1}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51CxNvkuoqL._SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
    
}

export default Home;
