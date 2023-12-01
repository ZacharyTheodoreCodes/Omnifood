import logo from "./img/omnifood-logo.png";
import "./general.css";
import "./style.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <a href="">
          <img className="logo-navbar" src={logo} alt="omnifood" />
        </a>
        <div className="right-navbar">
          <a className="right-navbar-link" href="">How it works</a>
          <a className="right-navbar-link" href="">Meals</a>
          <a className="right-navbar-link" href="">Testimonials</a>
          <a className="right-navbar-link" href="">Pricing</a>
          <a className="right-navbar-link cta" href="">Try for free</a>
        </div>
      </div>
    </>
  );
}
