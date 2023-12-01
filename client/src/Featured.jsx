import "./styling/featured-styling.css";
import "./general.css";
import logo1 from "./img/logos/business-insider.png";
import logo2 from "./img/logos/forbes.png";
import logo3 from "./img/logos/techcrunch.png";
import logo4 from "./img/logos/the-new-york-times.png";
import logo5 from "./img/logos/usa-today.png";

export default function Featured() {
  return (
    <>
      <div className="featured">
        <div className="featured-box">
          <p>as featured in</p>
          <div className="featured-logo">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
