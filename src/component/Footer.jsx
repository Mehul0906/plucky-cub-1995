import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="text-white mt-5 p-5 text-center footer-custom">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-6">
            <div className="promotion-banner bg-pink rounded-pill d-flex justify-content-center align-items-center  ">
              <span className="ms-5">
                SHOP NOW, PAY LATER WITH <b>Klarna.</b>
              </span>
              <a href=" " className="me-3 text-dark">
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-4 mb-4 mb-md-0 text-start">
            <h5>Stay in the loop</h5>
            <p>
              Sign up and be the first to hear about
              <br />
              new products and promotions!
            </p>
            <button className="btn btn-light mb-4">
              <b>Sign Up Now</b>
            </button>
            <div>
              <a href=" " className="text-white mx-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href=" " className="text-white mx-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href=" " className="text-white mx-2">
                <i className="bi bi-youtube"></i>
              </a>
              <a href=" " className="text-white mx-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href=" " className="text-white mx-2">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4 mb-md-0 text-start">
            <h5>Shop Brookstone.com</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/buyers-guide" className="text-white">
                  Massage Chair Buyers Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shipping-info" className="text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/prop-65" className="text-white">
                  Prop 65
                </Link>
              </li>
              <li>
                <Link to="/accessibility-statement" className="text-white">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-start">Customer Service</h5>
            <ul className="list-unstyled text-start">
              <li>
                <Link to="/contact-us" className="text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-white">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="text-white">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/product-manuals" className="text-white">
                  Product Manuals
                </Link>
              </li>
              <li>
                <Link to="/privacy-rights" className="text-white">
                  Your California Privacy Rights
                </Link>
              </li>
              <li>
                <Link to="/accessibility-mode" className="text-white">
                  Accessibility Mode
                </Link>
              </li>
            </ul>
          </div>
          <div className="row ">
            <div className="col-2">
              <p className="m-0"> © Brookstone 2024.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
