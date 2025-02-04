import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

function Homepage() {
  
  return (
    <div>
      <section>
        <div className="container">
          <div className="row desck-home">
            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 col-7 desk-image">
              <img src="desck-1.avif" alt="" className="img-fluid" />
            </div>
            <div className="col-sm-12 mt-sm-3 col-md-12 col-lg-5 col-xl-5 mt-xl-0 col-xxl-5  col-5">
              <img src="desck-2.avif" alt="" className="img-fluid" />
              <div className="row">
                <div className="col-6  pt-4">
                  <img src="desck-3.avif" alt="" className="img-fluid" />
                </div>
                <div className="col-6 pt-4">
                  <img src="desck-4.avif" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <hr
              style={{ backgroundColor: "black", border: "1px solid black" }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <p
                style={{ letterSpacing: "5px", color: "#50514f" }}
                className="text-center fs-5"
              >
                FEATURED CATEGORIES
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center mt-sm-5">
              <Link to={"/card"}>
                <img src="home-cate-1.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Audio</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center mt-sm-5">
              <Link to={"/card"}>
                <img src="home-cate-2.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Massage Chairs</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center mt-sm-5">
              <Link to={"/card"}>
                <img src="home-cate-3.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Foot & Leg Massage</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center mt-sm-5">
              <Link to={"/card"}>
                <img src="home-cate-4.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Neck & Back Massage</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center mt-sm-5">
              <Link to={"/card"}>
                <img src="home-cate-5.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Wine & Bar</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center mt-sm-5">
              <Link to={"/card"}>
                <img src="home-cate-6.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Lighting</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6 mt-sm-3 col-md-4 mt-sm-2 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center ">
              <Link to={"/card"}>
                <img src="home-cate-7.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Pillows</p>
            </div>
            <div className="col-sm-6 mt-sm-3 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center ">
              <Link to={"/card"}>
                <img src="home-cate-8.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Skincare</p>
            </div>
            <div className="col-sm-6 mt-sm-5 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center ">
              <Link to={"/card"}>
                <img src="home-cate-9.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">LED Light Therapy</p>
            </div>
            <div className="col-sm-6 mt-sm-5 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center ">
              <Link to={"/card"}>
                <img src="home-cate-10.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Technology</p>
            </div>
            <div className="col-sm-6 mt-sm-5 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center">
              <Link to={"/card"}>
                <img src="home-cate-11.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Kitchen</p>
            </div>
            <div className="col-sm-6 mt-sm-5 col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-2 home-cate text-center">
              <Link to={"/card"}>
                <img src="home-cate-12.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Outdoor</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <p
                style={{ letterSpacing: "5px", color: "#50514f" }}
                className="fs-5 text-center pt-5"
              >
                FEATURED BRANDS
              </p>
            </div>
          </div>
          <div className="row mt-2 p-0">
            <div className="col-sm-12 col-md-6 col-lg-4 mt-lg-3 col-xl-4 col-xxl-4 col-4 p-0">
              <Link to={"/card"}>
                <img
                  src="home-brand-1.avif"
                  alt=""
                  className="img-fluid pe-0"
                  style={{ borderRadius: "48px 48px 48px 0px" }}
                />
              </Link>
            </div>
            <div className="col-sm-12 mt-sm-3 col-md-6 col-lg-4 ps-lg-3 col-xl-4 col-xxl-4 ps-xxl-3 col-4 p-0">
              <Link to={"/card"}>
                <img
                  src="home-brand-2.avif"
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "48px 48px 48px 0px" }}
                />
              </Link>
            </div>
            <div className="col-sm-12 mt-sm-3 col-md-6 col-lg-4 col-xl-4 col-xxl-4  col-4 ">
              <Link to={"/card"}>
                <img
                  src="home-brand-3.avif"
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "48px 48px 48px 0px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <Link>
                <img src="home-img.avif" alt="" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <Accordion>
                <Accordion.Item
                  eventKey="0"
                  style={{
                    borderLeft: "none",
                    borderRight: "none",
                    borderTop: "none",
                    outline: "none",
                  }}
                >
                  <Accordion.Header>
                    <p class="">
                      Brookstone.com Your Trusted Source for Premium Quality
                      Products
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Step into a realm of curated excellence at Brookstone.com,
                      your premier destination for premium lifestyle products.
                      Unlike competitors who cast a wide net, we take pride in
                      offering a meticulously curated selection of handpicked,
                      best-in-class items across various categories. Our
                      commitment is to deliver a shopping experience that
                      transcends the ordinary, ensuring that each product you
                      encounter embodies the pinnacle of quality and innovation.
                    </p>
                    <p>
                      <br role="presentation" data-uw-rm-sr="" />
                      <strong>Unwind with Unrivaled Massagers:</strong>
                      <br role="presentation" data-uw-rm-sr="" />
                      <br role="presentation" data-uw-rm-sr="" /> Immerse
                      yourself in a world of relaxation with our extensive range
                      of massagers. From the sophistication of Massage Chairs to
                      the rejuvenating touch of Foot Massagers, targeted relief
                      of Hand Massagers, and the power of Massage Guns, our
                      collection sets the standard for wellness.
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                    </p>
                    <p>
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                      <strong>
                        Indulge in Intimacy with Personal Massagers:
                      </strong>
                      <br role="presentation" data-uw-rm-sr="" />
                      <br role="presentation" data-uw-rm-sr="" /> Discover a
                      discreet world of pleasure with our collection of personal
                      massagers. At Brookstone, we understand the importance of
                      embracing intimacy with products designed for comfort and
                      satisfaction. Explore our range of Vibrators, Women's Sex
                      Toys, Intimate Massagers, including the iconic Magic Wand
                      and offerings from esteemed brands like Lelo. Our
                      commitment to quality extends to every aspect of your
                      well-being, ensuring that your intimate moments are
                      enhanced with products that prioritize both pleasure and
                      personal care.
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                    </p>
                    <p>
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                      <strong>Health &amp; Wellness Haven:</strong>
                      <br role="presentation" data-uw-rm-sr="" />
                      <br role="presentation" data-uw-rm-sr="" /> Prioritize
                      your well-being with our Health &amp; Wellness essentials.
                      Explore our carefully selected range, including Bathroom
                      Accessories, Skincare Products, Cupping Therapy, Eye Care,
                      and Grooming essentials, all designed to elevate your
                      self-care routine.
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                    </p>
                    <p>
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                      <strong>Sleep Serenely with Our Sleep Aids:</strong>
                      <br role="presentation" data-uw-rm-sr="" />
                      <br role="presentation" data-uw-rm-sr="" /> Transform your
                      bedroom into a sanctuary of comfort with our Sleep Aids.
                      Dive into the tranquility of Air Cleaners, awaken gently
                      with Alarm Clocks, and cocoon yourself in the luxury of
                      our Bedding, Mattress Toppers, and Pillows for a
                      rejuvenating night's sleep.
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                    </p>
                    <p>
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                      <strong>Elevate Your Living Space:</strong>
                      <br role="presentation" data-uw-rm-sr="" />
                      <br role="presentation" data-uw-rm-sr="" /> Enhance your
                      home with our elegant Home Decor options. From Accent
                      Decor and Furniture to seasonal delights like Christmas
                      Decorations and the tools for Home Improvement, each piece
                      is a statement of sophistication.
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                    </p>
                    <p>
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                      <strong>Entertain with Style:</strong>
                      <br role="presentation" data-uw-rm-sr="" />
                      <br role="presentation" data-uw-rm-sr="" /> Celebrate
                      life's moments with our curated selection of Decanters,
                      Gift Sets, and Glassware Sets. Elevate your home
                      entertainment experience with our Cocktail Smoker and Wine
                      Accessories, showcasing your distinctive taste.
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                    </p>
                    <p>
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                      <strong>Fuel Your Active Lifestyle:</strong>
                      <br role="presentation" data-uw-rm-sr="" />
                      <br role="presentation" data-uw-rm-sr="" /> Achieve your
                      fitness goals with our top-of-the-line Exercise Equipment,
                      Fitness Trackers, and Sports Massagers. Embrace the
                      outdoors with our collection of Bikes, Camping Gear, and
                      Outdoor Decor, designed for those who live life on the
                      move.
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                    </p>
                    <p>
                      <br role="presentation" data-uw-rm-sr="" />
                      <strong>Stay Tech-Savvy with Cool Gadgets:</strong>
                      <br role="presentation" data-uw-rm-sr="" />
                      <br role="presentation" data-uw-rm-sr="" /> Explore the
                      latest in technology with our Cool Gadgets. From Cell
                      Phone Accessories and Sound Equipment to Gaming
                      Accessories and Wearable Tech, we bring innovation to your
                      fingertips.
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                    </p>
                    <p>
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                      <strong>Travel Smart with Our Essentials:</strong>
                      <br role="presentation" data-uw-rm-sr="" />
                      <br role="presentation" data-uw-rm-sr="" /> Prepare for
                      your next adventure with our Travel Essentials. Whether
                      it's convenient Phone Chargers, smart organizers, or
                      Digital Cameras to capture every moment, we have the tools
                      to make your journey seamless.
                      <br role="presentation" data-uw-rm-sr="" />{" "}
                    </p>
                    <p>
                      At Brookstone, we set the bar high. Our commitment to
                      quality shines through in every category, ensuring that
                      you receive not just products but experiences that exceed
                      expectations. Explore our diverse range, meticulously
                      chosen to cater to your every need. Shop with confidence,
                      knowing that each item is a testament to our dedication to
                      excellence and customer satisfaction.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
