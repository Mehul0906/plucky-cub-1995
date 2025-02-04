import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "bootstrap-icons/font/bootstrap-icons.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dark from "../page/Dark";
import { searchContex } from "../Contex/Searchcontext";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const {searchfun}=useContext(searchContex)
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="carousel"></div>
          </div>
        </div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="logo.avif" alt="Logo" className="img-fluid logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleShow}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block"
              id="navbarNav"
            >
              <div className="m-auto navbarSeach">
                <input
                  onChange={(e) => searchfun(e.target.value)}
                  type="text"
                  className="ps-3 pt-2 pb-2 pe-5 w-100"
                  placeholder="Search"
                  name="q"
                />
              </div>
            </div>
            <ul className="link navbar-nav ml-auto align-items-center d-sm-none d-md-none d-lg-flex d-xl-flex d-xxl-flex">
              <li className="nav-item">
                <Link className="nav-link" to="/auth">
                  <i className="bi bi-person nav-menu-icon"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  <i className="bi bi-heart nav-menu-icon"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="bi bi-cart3 nav-icon"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Dark />
              </li>
            </ul>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Navbar</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="d-sm-block w-25" id="navbarNav">
                  <div className="m-auto navbarSeach">
                    <input
                      type="text"
                      className="ps-3 pt-2 pb-2 pe-5 w-50"
                      placeholder="Search"
                      name="q"
                    />
                  </div>
                </div>
                <ul className="navbar-nav flex-row ">
                  <li className="nav-item">
                    <Link className="nav-link" to="/auth">
                      <i className="bi bi-person nav-menu-icon"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/favorites">
                      <i className="bi bi-heart nav-menu-icon"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/cart"}>
                      <i
                        className="bi bi-cart3 nav-icon"
                        onClick={handleShow}
                      ></i>
                    </Link>
                  </li>
                </ul>
                <section>
                  <div className="container">
                    <div className="row">
                      <div className="col-12 d-sm-block d-sm-inline-block d-md-block">
                        <ul className="d-sm-block list-unstyled col-11 text-center mt-4">
                          <li className="links-main">
                            <a href=" " className="nav-link link-dark">
                              NEW
                            </a>
                          </li>
                          <li className="links-main">
                            <a href=" " className="nav-link link-dark ">
                              MESSAGE
                            </a>
                          </li>
                          <li className="links-main">
                            <a href=" " className="nav-link link-dark ">
                              SLEEP
                            </a>
                          </li>
                          <li>
                            <a href="  " className="nav-link link-dark">
                              WELLNESS
                            </a>
                          </li>
                          <li>
                            <a href=" " className="nav-link link-dark ">
                              HOME
                            </a>
                          </li>
                          <li>
                            <a href=" " className="nav-link link-dark ">
                              TECH
                            </a>
                          </li>
                          <li>
                            <a href=" " className="nav-link link-dark ">
                              OUTDOOR
                            </a>
                          </li>
                          <li>
                            <a href=" " className="nav-link link-dark ">
                              GIFTS
                            </a>
                          </li>
                          <li>
                            <a href=" " className="nav-link link-dark ">
                              SALE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </section>
      <section className="nav">
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
              <ul className="d-flex  col-12 justify-content-center align-items-center list-unstyled">
                <li className="links-main col-1">
                  <a href=" " className="nav-link link-dark">
                    NEW
                  </a>
                </li>
                <li className="links-main col-1">
                  <a href=" " className="nav-link link-dark ">
                    MESSAGE
                  </a>
                  <div className="vice-link-main list_hov">
                    <div className="row">
                      <div className="col-6 d-flex text-dark">
                        <div className="nav-menu1">
                          <ul className="">
                            <li>
                              <a href="/card" className="h5">
                                All MESSAGE
                              </a>
                            </li>
                            <li>
                              <a href=" ">Face/Eye Massagers</a>
                            </li>
                            <li>
                              <a href=" ">Hand Massagers</a>
                            </li>
                            <li>
                              <a href=" ">Intimate Massagers</a>
                            </li>
                            <li>
                              <a href=" ">Massage Chairs</a>
                            </li>
                            <li>
                              <a href=" ">Massage Guns</a>
                            </li>
                            <li>
                              <a href=" ">Neck and Back Massagers</a>
                            </li>
                            <li>
                              <a href=" ">Foot Massagers</a>
                            </li>
                          </ul>
                        </div>
                        <div className="nav-menu2">
                          <ul>
                            <li>
                              <a href=" " className="h5">
                                FEATURED
                              </a>
                            </li>
                            <li>
                              <a href=" ">Osaki Massage Chairs</a>
                            </li>
                            <li>
                              <a href=" ">Quzy Shoulder Massager</a>
                            </li>
                            <li>
                              <a href=" ">REI Foot Massager</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="col-5">
                          <img
                            src="https://www.brookstone.com/cdn/shop/products/reflex5s_in_room_-_1200_x_1200_750x.jpg?v=1667253238"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main col-1">
                  <a href=" " className="nav-link link-dark ">
                    SLEEP
                  </a>
                  <div className="vice-link-main3">
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <ul className="pt-3">
                              <li>
                                <a href=" " className="h4">
                                  ALL SLEEP
                                </a>
                              </li>
                              <li>Alarm Clocks & Sound Machines</li>
                              <li>Bedding</li>
                              <li>Intimate Pillows</li>
                              <li>Pillows</li>
                              <li>Air Quality</li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li>
                                <a href=" " className="h4">
                                  FEATURED
                                </a>
                              </li>
                              <li>Loftie Digital Clock</li>
                              <li>Yana Sleep Pillow</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <ul>
                              <li>
                                <img
                                  src="https://cdn.flastpick.com/img/manly-bands/8krTfs9yDOGMMhKy36d3oisGlzu0GFRWIsWnPK6p.jpg?h2mWidth=1080&h2mHeight=1080"
                                  width="300px"
                                  height="300px"
                                  alt=""
                                />
                              </li>
                              <li className="text-center">WEDDING BANDS</li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li>
                                <img
                                  src="https://cdn.flastpick.com/img/manly-bands/Sw6TkY47Oj5r6ZNmCuzzJCl2rXJ3EyrtFr71lUv5.jpg?h2mWidth=1080&h2mHeight=1080"
                                  width="300px"
                                  height="300px"
                                  alt=""
                                />
                              </li>
                              <li className="text-center">
                                MOSS AGATE COLLECTION
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main col-1">
                  <a href="  " className="nav-link link-dark">
                    WELLNESS
                  </a>
                  <div className="vice-link-main4">
                    <div className="row">
                      <div className="col-3">
                        <ul className="pt-3">
                          <li>ALL WELLNESS</li>
                          <li>Cold & Heat Therapy</li>
                          <li>Eye Care</li>
                          <li>Fitness</li>
                          <li>Hair Care</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/uPMl8PHCTTPoxZBnFtji6mat2PYwf06vijUe7xn7.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center ">ENGAGEMENT RINGS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/8krTfs9yDOGMMhKy36d3oisGlzu0GFRWIsWnPK6p.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">WEDDING BANDS</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main col-1">
                  <a href=" " className="nav-link link-dark ">
                    HOME
                  </a>
                  <div className="vice-link-main5">
                    <div className="row">
                      <div className="col-3">
                        <ul className="pt-3">
                          <li>SHOP BY STYLE</li>
                          <li>EVERY DAY CARRY (EDC)</li>
                          <li>BARWARE</li>
                          <li>GROOMSMAN GIFTS</li>
                          <li>SHOP ALL MANLY GIFTS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/uPMl8PHCTTPoxZBnFtji6mat2PYwf06vijUe7xn7.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center ">ENGAGEMENT RINGS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/8krTfs9yDOGMMhKy36d3oisGlzu0GFRWIsWnPK6p.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">WEDDING BANDS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/Sw6TkY47Oj5r6ZNmCuzzJCl2rXJ3EyrtFr71lUv5.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">MOSS AGATE COLLECTION</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main col-1">
                  <a href=" " className="nav-link link-dark ">
                    TECH
                  </a>
                  <div className="vice-link-main6">
                    <div className="row">
                      <div className="col-3">
                        <ul className="pt-3">
                          <li>SHOP BY STYLE</li>
                          <li>EVERY DAY CARRY (EDC)</li>
                          <li>BARWARE</li>
                          <li>GROOMSMAN GIFTS</li>
                          <li>SHOP ALL MANLY GIFTS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/uPMl8PHCTTPoxZBnFtji6mat2PYwf06vijUe7xn7.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center ">ENGAGEMENT RINGS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/8krTfs9yDOGMMhKy36d3oisGlzu0GFRWIsWnPK6p.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">WEDDING BANDS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/Sw6TkY47Oj5r6ZNmCuzzJCl2rXJ3EyrtFr71lUv5.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">MOSS AGATE COLLECTION</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main">
                  <a href=" " className="nav-link link-dark ">
                    OUTDOOR
                  </a>
                  <div className="vice-link-main7">
                    <div className="row">
                      <div className="col-3">
                        <ul className="pt-3">
                          <li>SHOP BY STYLE</li>
                          <li>EVERY DAY CARRY (EDC)</li>
                          <li>BARWARE</li>
                          <li>GROOMSMAN GIFTS</li>
                          <li>SHOP ALL MANLY GIFTS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/uPMl8PHCTTPoxZBnFtji6mat2PYwf06vijUe7xn7.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center ">ENGAGEMENT RINGS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/8krTfs9yDOGMMhKy36d3oisGlzu0GFRWIsWnPK6p.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">WEDDING BANDS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/Sw6TkY47Oj5r6ZNmCuzzJCl2rXJ3EyrtFr71lUv5.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">MOSS AGATE COLLECTION</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main col-1">
                  <a href=" " className="nav-link link-dark ">
                    GIFTS
                  </a>
                  <div className="vice-link-main8">
                    <div className="row">
                      <div className="col-3">
                        <ul className="pt-3">
                          <li>SHOP BY STYLE</li>
                          <li>EVERY DAY CARRY (EDC)</li>
                          <li>BARWARE</li>
                          <li>GROOMSMAN GIFTS</li>
                          <li>SHOP ALL MANLY GIFTS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/uPMl8PHCTTPoxZBnFtji6mat2PYwf06vijUe7xn7.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center ">ENGAGEMENT RINGS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/8krTfs9yDOGMMhKy36d3oisGlzu0GFRWIsWnPK6p.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">WEDDING BANDS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/Sw6TkY47Oj5r6ZNmCuzzJCl2rXJ3EyrtFr71lUv5.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">MOSS AGATE COLLECTION</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-1">
                  <a href=" " className="nav-link link-dark ">
                    SALE
                  </a>
                  <div className="vice-link-main3">
                    <div className="row">
                      <div className="col-3">
                        <ul className="pt-3">
                          <li>SHOP BY STYLE</li>
                          <li>EVERY DAY CARRY (EDC)</li>
                          <li>BARWARE</li>
                          <li>GROOMSMAN GIFTS</li>
                          <li>SHOP ALL MANLY GIFTS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/uPMl8PHCTTPoxZBnFtji6mat2PYwf06vijUe7xn7.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center ">ENGAGEMENT RINGS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/8krTfs9yDOGMMhKy36d3oisGlzu0GFRWIsWnPK6p.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">WEDDING BANDS</li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li>
                            <img
                              src="https://cdn.flastpick.com/img/manly-bands/Sw6TkY47Oj5r6ZNmCuzzJCl2rXJ3EyrtFr71lUv5.jpg?h2mWidth=1080&h2mHeight=1080"
                              width="300px"
                              height="300px"
                              alt=""
                            />
                          </li>
                          <li className="text-center">MOSS AGATE COLLECTION</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Navbar;

//  <div className="d-sm-block d-lg-flex d-xl-flex row d-xxl-flex">
//    <div className="col-sm-2 d-sm-flex d-lg-block col-2">
//      {data.image && data.image[0] && (
//        <img src={data.image[0]} alt="" className="img-fluid mt-4" />
//      )}
//      {data.image && data.image[1] && (
//        <img src={data.image[1]} alt="" className="img-fluid mt-4" />
//      )}
//    </div>
//    <div className="col-sm-12 mt-sm-3 col-lg-10 col-xl-10 col-xxl-10 col-10 ps-0">
//      {data.image && data.image[2] && (
//        <img src={data.image[2]} alt="" className="img-fluid mt-4" />
//      )}
//    </div>
//  </div>;
