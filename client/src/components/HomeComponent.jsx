import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./Home.css";
import shoes from "../image/1.jpg";
import shoes1 from "../image/2.jpg";
import cloth from "../image/3.jpg";
import phone from "../image/4.jpg";
import cr1 from "../image/23.webp";
import n5 from "../image/n5.jpg";
import cr4 from "../image/23.webp";
import cr5 from "../image/23.webp";
import cr6 from "../image/14.jpg";
import n1 from "../image/n1.jpg";
import n2 from "../image/n2.jpg";
import n3 from "../image/n3.jpg";
import n4 from "../image/n4.webp";
import n6 from "../image/n6.jpg";
import n7 from "../image/n7.jpg";
import n9 from "../image/n9.jpg";
import n10 from "../image/n10.jpg";
export default function HomeComponent() {
  return (
    <>
     

      <div className=" container rotating-text-wrapper">
        <h2>Welcome to Ezy Mart</h2>
        <h2>Place your Order</h2>
        <h2>Hurry up!!!!!</h2>
      </div>
      {/* animation end */}

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="row">
              <img src={n1} height={290} className="d-block w-100" alt="..." />
            </div>
            <div className="row mt-4">
              <img
                src={n3}
                // height={"200"}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          {/* carousal */}
          <div className="col-sm-4">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={n10}
                    height={650}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={n7}
                    height={650}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={n9}
                    height={650}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <img src={n2} height={290} className="d-block w-100" alt="..." />
            </div>
            <div className="row mt-4">
              <img src={n4} height={340} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}

      {/* <div className="container border-top">
        <footer>
          <div className="row mt-4">
            <div className="col border-end">
              <h3>CUSTOMER SERVICE</h3>
              <ul style={{ listStyle: "none" }}>
                <li>Contact Us</li>
                <li>Sell with us</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div className="col border-end">
              <h3>LINKS</h3>
              <ul style={{ listStyle: "none" }}>
                <li>Contact Us</li>
                <li>Sell with us</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div className="col">
              <h3>NEWSLETTER</h3>
              <h5>Sign Up for Our Newsletter</h5>
              <form>
                <div className="mb-3">
    
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Please  Enter Your Email"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit" className="btn btn-primary ms-5">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div> */}
    </>
  );
}
