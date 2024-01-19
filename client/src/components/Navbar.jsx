import React, { useState, useEffect } from "react";
import axios from "axios";
import "./navbar.css";
import { Link } from "react-router-dom";
import icon1 from "../image/icon1.png";
import icon2 from "../image/icon2.png";
import icon3 from "../image/icon3.png";
import urls from "../../Urls/url";
export default function Navbar() {
  const HOSTED_SERVER_URL=urls();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setuserData] = useState({});
  useEffect(() => {
    // Implement your logic to check if the user is logged in
    // For example, you can check if there is a token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    getprofile();
  }, []);
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
    } catch {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("user not  found");
      } else {
        console.error("Error fetching  details:", error);
      }
    }
  };
  const uid = userData._id;
  console.log("user id in navbar:", uid);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="s_logonav  ">
            <h4 >EZY</h4>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item m-4" style={{ color: "white" }}>
                <img className="m-2" src={icon2} height={18} />
                Free Shipping
              </li>
              <li className="nav-item m-4" style={{ color: "white" }}>
                <img className="m-2" src={icon3} height={18} />
                call us 7898-4444-800
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* top navbar close */}
      <nav className="navbar bg-light">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <button
            className="navbar-toggler start"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontFamily: "sans-serif",
              color: "gray",
              fontSize: "30px",
              fontWeight: "bolder",
            }}
          >
            Ezy Mart
          </Link>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Shop By Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page">
                    Phones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">Bags</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">Clothes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">Laptops</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active">Shoes</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li>
                <img
                  src={icon1}
                  height={30}
                  className="d-block w-100"
                  alt="..."
                />
              </li>
            </ul>
          </div>
          <div className="btn-group">
            <button
              className="btn btn-Info dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="inside"
              aria-expanded="false"
            >
              Brands
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item">Nike</Link>
              </li>
              <li>
                <Link className="dropdown-item">Apple</Link>
              </li>
              <li>
                <Link className="dropdown-item">Calvin Klein</Link>
              </li>
              <li>
                <Link className="dropdown-item">Polo</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li>
                <Link
                  to="/shop"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          {isLoggedIn ? (
            <div>Welcome, {userData.name}</div>
          ) : (
            <div className="btn-group">
              <button
                className="btn btn-Info dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="inside"
                aria-expanded="false"
              >
                Welcome
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/registration" className="dropdown-item">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="dropdown-item">
                    Sign In
                  </Link>
                </li>
                {/* {!isLoggedIn && <Link to="/login" className="dropdown-item">Sign In</Link>}
            {!isLoggedIn && <Link to="/registration" className="dropdown-item">Sign Up</Link>} */}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
