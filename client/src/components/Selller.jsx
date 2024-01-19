import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import "./profile-icon.css";
import "./seller.css";
import sale1 from "../image/sale1.jpg";
import sale2 from "../image/sale2.jpg";

import shoes from "../image/1.jpg";
import shoes1 from "../image/2.jpg";
import cloth from "../image/3.jpg";
import phone from "../image/4.jpg";
import cr1 from "../image/5.jpg";
import cr2 from "../image/6.jpg";
import cr4 from "../image/10.jpg";
import cr5 from "../image/13.jpg";

import s2 from "../image/s2.jpg";
import s3 from "../image/s3.jpg";
import s4 from "../image/s4.jpg";

// import g2 from "../image/g2.jpg";
import profile from "../image/profile.png";
import Icon from "./Icon";
import Profile from "./profile";
import NewProduct from "./NewProduct";
import ResetPassword from "./ResetPassword";
import Adress from "./Adress";
import urls from "../../Urls/url";
function Seller() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selecteIcon, setSelecteIcon] = useState(null);
  const [userData, setuserData] = useState({});
  const HOSTED_SERVER_URL=urls()
  const handleLinkClick = (component) => {
    setSelectedComponent(null);
    setSelectedComponent(component);
  };
  const handleClick = (component) => {
    setSelecteIcon(null); // Reset previous component
    setSelecteIcon(component); // Set the new component
  };
  useEffect(() => {
    getprofile();
  }, []);
  const getprofile = async () => {
    try {
      // console.log("call getprofile in seller");
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
      console.log("userid:", response.data.data._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("user not  found");
      } else {
        console.error("Error fetching  details:", error);
      }
    }
  };
  var id = userData._id;
  //  console.log("seller id log:",id)
  return (
    <>
      <div className="seller">
        <div class="container who mt-4">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="animate-charcter"> Seller Hub</h3>
            </div>
          </div>
        </div>
        <div className="top-right-div">
          <Link to="/seller/icon" onClick={() => handleClick(<Icon />)}>
            <img src={profile} />
          </Link>
        </div>
        {/* <div className="who"><h5>Seller Hub</h5></div> */}

        <div className="top-side">{selecteIcon}</div>
        <div className=" container rotating-text-wrapper">
          <h2>Welcome to Ezy Mart</h2>
          <h2>Join Our Marketplace and Boost Your Sales</h2>
          {/* <h2>Hurry up!!!!!</h2> */}
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
                          to="/seller/profile"
                          onClick={() => handleLinkClick(<Profile />)}
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
                          to="/seller/forgot/password"
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
                          to="/seller/address"
                          onClick={() => handleLinkClick(<Adress />)}
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
                          to="/seller/add/product"
                          onClick={() => handleLinkClick(<NewProduct />)}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Add New Product
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="p-4">
                        <Link
                          to={`/view/products/${id}`}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          View Products
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col mb-2">
                  <div className="card " style={{ width: "18rem" }}>
                    <img
                      src={sale1}
                      height={"400px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col mb-2">
                  <div className="wrapper five">
                    <span className="float-box">
                      <h3 className="float">Today is your day! Embrace the opportunity, give your best,
                    and let success be the result of your hard work and
                    dedication. Your efforts as a seller matter, and you have
                    the power to make today a stepping stone towards greater
                    achievements.</h3>
                    </span>
                  </div>
                  {/* <p
                    style={{
                      fontFamily: "monospace",
                      color: "orange",
                      fontSize: 20,
                      textAlign: "justify",
                    }}
                  >
                    Today is your day! Embrace the opportunity, give your best,
                    and let success be the result of your hard work and
                    dedication. Your efforts as a seller matter, and you have
                    the power to make today a stepping stone towards greater
                    achievements.
                  </p> */}
                </div>
              </div>

              <div className="row mb-2">
                <div className="sQ  border border-white p-5">
                  <div className="s-quotes  border border-white p-5">
                    <p className="mb-0">
                      Elevate your brand. Expand your reach. Experience success
                      as a valued member of our seller community.Enhance your
                      brand's presence, broaden your audience, and thrive as a
                      respected contributor within our dynamic seller community.
                    </p>
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
              <div className="container ">
                <div className="row">
                  {selectedComponent}

                  <div className="col">
                    <div className="seller-poster">
                      <div className="seller-info">
                        {/* <img src="seller-logo.jpg" alt="Seller Logo" /> */}
                        <div className="s_logo col-sm-12 col-md-12 col-lg-5 ">
                          <h3 className="col-sm-12 col-md-12 col-lg-5 ">EZY</h3>
                        </div>
                        <h2>Seller Showcase</h2>
                        <p>
                          Discover a world of quality products curated just for
                          you. Join us and explore the possibilities!
                        </p>
                     
                        <Link
                          to="/seller/add/product"
                          onClick={() => handleLinkClick(<NewProduct />)}
                          style={{ textDecoration: "none", color: "black" }}
                          className="cta-button"> Start Selling</Link>
                      </div>
                    </div>

                    {/* <div className="card " style={{ width: "18rem" }}>
                    <img
                      src={cloth}
                      height={"400px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div> */}
                  </div>
                  {/* <div className="col">
                  <div className="card " style={{ width: "18rem" }}>
                    <img
                      src={phone}
                      height={"400px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div> */}
                </div>

                <div className="row mb-2">
                  {/* <div className="col mb-2">
                    <div className="card " style={{ width: "18rem" }}>
                      <img
                        src={sale2}
                        height={"400px"}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div> */}
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={s2}
                          height={500}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={s3}
                          height={500}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={s4}
                          height={500}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
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
                      data-bs-target="#carouselExampleControls"
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
    </>
  );
}
export default Seller;
