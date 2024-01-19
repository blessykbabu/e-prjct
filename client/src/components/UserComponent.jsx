import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import "./profile-icon.css";
import shoes from "../image/1.jpg";
import shoes1 from "../image/2.jpg";
import cloth from "../image/3.jpg";
import phone from "../image/4.jpg";
import cr1 from "../image/23.webp";
import cr2 from "../image/2.jpg";
import cr3 from "../image/12.jpg";
import cr5 from "../image/13.jpg";
import profileimg from "../image/profile.png";
import n3 from "../image/n3.jpg";

import ResetPassword from "./ResetPassword";
import Icon from "./Icon";
import Cart from "./Cart";
import Profile from "./profile";
import Adress from "./Adress";
import urls from "../../Urls/url";
// function Profile() {
//   return <div>Profile Component</div>;
// }

// function Address() {
//   return <div>Address Component</div>;
// }

// function Orders() {
//   return <div>Orders Component</div>;
// }
// function Security() {
//   return <div><ResetPassword/></div>;
// }
function UserComponent() {
  // const [showComponent, setShowComponent] = useState(false);
  // const handleLinkClick = () => {
  //   setShowComponent(true);
  // };
  const HOSTED_SERVER_URL=urls()
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selecteIcon, setSelecteIcon] = useState(null);
  const [userData, setuserData] = useState({});
  const handleLinkClick = (component) => {
    setSelectedComponent(null);
    setSelectedComponent(component);
  };
  const handleClick = (component) => {
    setSelecteIcon(null); // Reset previous component
    setSelecteIcon(component); // Set the new component
  };
  // useEffect(() => {
  //   getprofile();
  // }, []);
  const getprofile = async () => {
    try {
      // console.log("call getprofile");
      const token = localStorage.getItem("token");
      // console.log("token:", token);

      const response = await axios.get(
        `${HOSTED_SERVER_URL}/user/profile`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setuserData(response.data.data);
    } catch (error){
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("user not  found");
      } else {
        console.error("Error fetching  details:", error);
      }
    }
  };
getprofile();
  return (
    <>
      <div className="user">
        <div className="container who mt-4">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter"> Buyer Zone</h3>
            </div>
          </div>
        </div>
        <div className="top-right-div">
          <Link to="/user/icon" onClick={() => handleClick(<Icon />)}>
            <img src={profileimg} />
          </Link>
        </div>
        <div className="top-side">{selecteIcon}</div>
        {/* <div className="who"><h5>Buyer Zone</h5></div> */}

        <div className=" container rotating-text-wrapper">
          <h2>Welcome to Ezy Mart</h2>
          <h2>Place your Order</h2>
          <h2>Hurry up!!!!!</h2>
        </div>
        {/* card start */}
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="row">
                <table className="table border border-white ">
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td style={{ fontWeight: "bolder" }} className="p-4">
                        Account
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="p-4">
                        {" "}
                        <Link
                          to="/user/profile"
                          onClick={() => handleLinkClick(<Profile/>)}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Profile
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="p-4">
                        <Link
                          to="/user/forgot/password"
                          onClick={() => handleLinkClick(<ResetPassword />)}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Account Security
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="p-4">
                        <Link
                         to="/user/address"
                         onClick={() => handleLinkClick(<Adress/>)}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Address
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="p-4">
                        <Link
                          to={`/order/${userData._id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Orders
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="p-4">
                        {/* <Link  to={`/user/cart/${userData._id}`}
                        onClick={() => handleLinkClick(<Cart/>)} */}
                        <Link
                          to={`/cart/${userData._id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Cart
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row offer bw">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div class="banner1">
                        <div class="content">
                          <div class="title">Special Offer!</div>
                          <div class="description">
                            Get 20% off on selected items. Limited time offer.
                          </div>
                          {/* <a href="#" class="button">
                            Shop Now
                          </a> */}
                          <Link
                         to="/shop"
                         className="button"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Shop Now
                        </Link>
                          
                        </div>
                      </div>
                    </div>
                    {/* <div className="col">
                    <div class="banner1 b2 m-2">
                      <div class="content">
                        <div class="title">Special Offer!</div>
                        <div class="description">
                          Get 20% off on selected items. Limited time offer.
                        </div>
                        <a href="#" class="button">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col">
          <Routes>
          <Route path="/forgot/password" element={<ResetPassword/>} />
            </Routes>
          </div> */}

            <div className="col">
              {selectedComponent}
              <div className="row">
                <div className="container banner ">
                  <div className="poster">
                    <div className="image-container">
                      <img src={n3} alt="Site Image" className="site-image" />
                    </div>
                    <div className="content">
                      <div className="site-title">
                        Explore Our Online Shopping Site
                      </div>
                      <div className="site-description">
                        Discover a wide range of products, exclusive deals, and
                        a seamless shopping experience.
                      </div>
                      {/* <a href="#" className="button">
                        Start Shopping
                      </a> */}
                          <Link
                         to="/shop"
                         className="button"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Start Shopping
                        </Link>
                    </div>
                  </div>

                  {/* <div className="row">
                <div className="col">
                  <div className="card " style={{ width: "18rem" }}>
                    <img
                      src={cloth}
                      height={"400px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="card " style={{ width: "18rem" }}>
                    <img
                      src={phone}
                      height={"400px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div> */}
                </div>
              </div>

              <div className="row offer m-1 text-center d-flex justify-content-center align-items-center">
                <div class="banner1 b2 m-2">
                  <div class="content">
                    <div class="title">Special Offer!</div>
                    <div class="description">
                      Get 20% off on selected items. Limited time offer.
                    </div>
                    {/* <a href="#" class="button">
                      Shop Now
                    </a> */}
                     <Link
                         to="/shop"
                         className="button"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Shop Now
                        </Link>
                  </div>
                </div>
              </div>

              <div className="row m-3">
                <div className="container banner">
                  <div className="poster">
                    <div className="content">
                      <div className="title">Special Offer!</div>
                      <div className="description">
                        Discover amazing deals on a wide range of products.
                        Limited time offer.
                      </div>
                      <Link
                         to="/shop"
                         className="button"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Shop Now
                        </Link>
                    </div>
                    <div className="image-container">
                      {/* Replace 'your_image_url' with the actual URL of your poster image */}
                      {/* <img
                      src="your_image_url"
                      alt="Special Offer Poster"
                      className="site-image"
                    /> */}

                      <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src={shoes}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={cloth}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src={cr3}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExample"
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
                          data-bs-target="#carouselExample"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end the main container */}
    </>
  );
}
export default UserComponent;
