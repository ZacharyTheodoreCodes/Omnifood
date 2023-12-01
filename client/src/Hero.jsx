import "./hero-styling.css";
import "./general.css";
import customer1 from "./img/customers/customer-1.jpg";
import customer2 from "./img/customers/customer-2.jpg";
import customer3 from "./img/customers/customer-3.jpg";
import customer4 from "./img/customers/customer-4.jpg";
import customer5 from "./img/customers/customer-5.jpg";
import customer6 from "./img/customers/customer-6.jpg";
import heroImg from "./img/hero.png";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-box">
          <div className="hero-desc-box">
            <h1>A healthy meal delivered to your door, every single day</h1>
            <p>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <div className="hero-button">
              <a className="btn-yellow" href="">
                Start eating well
              </a>
              <a className="btn-white" href="">
                Learn more &darr;
              </a>
            </div>
            <div className="delivered-meals">
              <div>
                <img src={customer1} alt="Customer photo" />
                <img src={customer2} alt="Customer photo" />
                <img src={customer3} alt="Customer photo" />
                <img src={customer4} alt="Customer photo" />
                <img src={customer5} alt="Customer photo" />
                <img src={customer6} alt="Customer photo" />
              </div>
              <p>
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src={heroImg}
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
      </div>
    </>
  );
}
