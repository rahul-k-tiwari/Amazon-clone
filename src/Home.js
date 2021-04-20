import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Redmi_EVOSeries/Note10/April/D21342465_WLD_Mi_Redmi_Note10_tallhero_1500x600_2._CB655359243_.jpg"
          alt="Home image"
        />

        <div className="home__row">
        
          <Product
            id="12321341"
            className="home__poster"
            title="Acer Nitro 5 Intel Core i5-11th Generation 144 Hz Refresh Rate 15.6-inch Gaming Laptop (8GB Ram/512GB SSD/Win10/GTX 1650 Graphics/
              Obsidian Black/2.2 Kgs), AN515-55 + Xbox Game Pass for PC"
            price={69990.}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71evs2WKJjS._SX522_.jpg"
          />
          
          <Product
            id="49538094"
            title="OnePlus 9 5G (Arctic Sky, 8GB RAM, 128GB Storage)
             Rear Triple Camera Co-Developed by Hasselblad, 48 MP Main camera, 50 MP Ultra Wide Angle Camera with Free Form Lens, 2 MP Monochorme Lens. 
           "
            price={49999.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61fy%2Bu9uqPL._SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="GoPro HERO7 Black — Waterproof Action Camera with Touch Screen 4K Ultra HD Video 12MP Photos 720p Live Streaming Stabilization"
            price={ 29999.69}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51CDZ2fymtL._SX522_.jpg"
          />
          <Product
            id="23445930"
            title="Pintola All Natural Peanut Butter (Creamy) (1kg) | Unsweetened | 30g Protein | Non GMO | Gluten Free | Cholesterol Free"
            price={399}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71gi0ilTrqL._SY741_.jpg"
          />
          <Product
            id="3254354345"
            title="Monex iDeer Spin Bike | Smooth & Quiet Stationary Spin Bike | Fully Adjustable W/Heart Rate Sensor -Multi Colors"
            price={12998.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61Gwm28YqRL._SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="DALUCI 3Ply Disposable Nonwoven Fabric Face Mask With Nose Clip Certified by CE, ISO & GMP with Bacterial Filtration Efficiency(BFE)≥98.5%"
            price={299.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71FZKFwSeRL._UX569_.jpg"
          />
          <Product
            id="3254354345"
            title="Cp Plus 2.4 Mp Indigo Full Hd Ir Night Vision Bullet Camera - 20 Mtr Ir, Ip66 - Pack of 1pcs"
            price={1189.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31I8OwamnLL._AC_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
          id="9241586"
          title="Saffola Gold, Pro Healthy Lifestyle Edible Oil, Jar, 5 L"
          price={725}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61KqD6xBtoL._SX569_.jpg"
        />
        <Product
          id="59419484"
          title="Aashirvaad Shudh Chakki Atta, 10kg Pack, 100 % Whole Wheat Atta, 0% Maida"
          price={331}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51rnvVPrSDL.jpg"
        />
        <Product
          id="49538094"
          title="Taj Mahal Tea with Long Leaves, 1kg"
          price={500}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71j1y%2BLMnvL._SX569_.jpg"
        />
        <Product
          id="48415484"
          title="Maggi 2 Minutes Noodles Masala, 560g"
          price={83}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81tiRzUBKEL._SX569_.jpg"
        />
      </div>
      </div>
    </div>
  );
}

export default Home;