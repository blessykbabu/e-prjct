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
import profile from "../image/profile.png";
import Icon from "./Icon";
import Profile from "./profile";
import NewProduct from "./NewProduct";
import ResetPassword from "./ResetPassword";
function Seller() {
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
  useEffect(() => {
    getprofile();
  }, []);
  const getprofile = async () => {
    try {
      // console.log("call getprofile in seller");
      const token = localStorage.getItem("token");
      // console.log("token:", token);

      const response = await axios.get(
        "http://localhost:3000/user/profile",

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
                  {/* <div className="card " style={{ width: "18rem" }}>
                    <img
                      src={sale2}
                      height={"400px"}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div> */}
                  <div className="sQ  border border-white p-5">
                    <div className="s-quotes  border border-white p-5">
                      <p className="mb-0">
                        Elevate your brand. Expand your reach. Experience
                        success as a valued member of our seller community.
                      </p>
                    </div>
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
                        <a href="#" className="cta-button">
                          Start Selling
                        </a>
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

                {/* <div className="row">
                  <div className="col mb-2">
                    <div className="card " style={{ width: "18rem" }}>
                      <img
                        src={sale2}
                        height={"400px"}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Seller;
