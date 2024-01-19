import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./product.css";
import AlertBox from "./AlertBox";
import AlertBox_Order from "./AlertBox_Order";
import OrderAddress from "./OrderAddress";
import Success from "./Success";
import urls from "../../Urls/url";
export default function Product_Details() {
  const HOSTED_SERVER_URL=urls();
  const { id } = useParams("");
  // const [serverSuccess, setServerSuccess] = useState("");
  // const [validationMsg, setvalidationMsg] = useState("");
  // const [backendError, setbackendError] = useState({});
  const [Data, setData] = useState({});
  const [userData, setuserData] = useState({});
  const [CartData, setCartData] = useState({});
  const [info, setinfo] = useState(false);
  const [infoOrder, setinfoOrder] = useState(false);
  const [order, setorder] = useState(false);
  // const [showAddress, setShowAddress] = useState(true);

  useEffect(() => {
    getprofile();
    getDetails();
  }, []);
  const getprofile = async () => {
    try {
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
  // console.log("userid:",userData._id)
  const uid = userData._id;
  // console.log("uid:",uid)
  const getDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${HOSTED_SERVER_URL}/order/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("Product found");
      } else {
        console.error("Error fetching product details:", error);
      }
    }
  };
  const cart = async () => {
    console.log("type:", userData.usertype);
    if (userData.usertype == "6582ce130a0dd1bc7fe48dad") {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${HOSTED_SERVER_URL}/add/cart/?pid=${id}&uid=${uid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCartData(response.data.data);
        alert("product added to the cart");
        console.log(response.data.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("not added to cart");
        } else {
          console.error("Error occured:", error);
        }
      }
    } else {
      // alert("Only customers can add items to the cart!")
      setinfo(true);
    }
  };

  const Order = async () => {
    // if (setorder(true)) {
    if (userData.usertype == "6582ce130a0dd1bc7fe48dad") {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${HOSTED_SERVER_URL}/add/order/?pid=${id}&uid=${uid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCartData(response.data.data);
        alert("Thank you so much for your order! ");
        console.log(response.data.data);
     
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("your order is failed");
        } else {
          console.error("Error occured:", error);
        }
      }
    } else {
      // alert("Only customers can place orders!")
      setinfoOrder(true);
    }
    // } else {
    //   alert("please confirm the address");
    // }
  };
  function click() {
    if (userData.usertype == "6582ce130a0dd1bc7fe48dad") {
      setorder(true);
    } else {
      setinfoOrder(true);
    }
  }

  return (
    <>
      {/* <div className="container banner ">
        <div className="poster">
          <div className="image-container">
            <img src={Data.pimage} alt="Site Image" className="site-image" />
          </div>
          <div className="content">
            <div className="site-title">Name: {Data.name}</div>
            <div className="site-description">Category: {Data.category}</div>
            <a href="#" className="button">
              Start Shopping
            </a>
          </div>
        </div>
      </div> */}

      <div className="container  porder m-2" >
        
        <div className="product">
          <p style={{ color: "green" }}>Available stock {Data.quantity}</p>
          <img
            src={`${HOSTED_SERVER_URL}/${Data.pimage}`}
            height={500}
            width={500}
          />

        </div>

        <div className="prodata">
          <table className=" mx-auto">
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{Data.name}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>:</td>
                <td>{Data.category}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>:</td>
                <td>${Data.price}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign: "top" }}>Description</td>
                <td style={{ verticalAlign: "top" }}>:</td>
                <td style={{ verticalAlign: "top" }}>{Data.description}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  {/* <button  onClick={Order} className="btn btn-primary m-2">Order</button> */}
                  {/* <Link to="/address"> */}

                  <button onClick={click} className="btn btn-primary m-2">
                    Order
                  </button>
                  {/* </Link> */}
                  <button onClick={cart} className="btn btn-primary">
                    Add To Cart
                  </button>

                  {/* <button onClick={click} className="btn btn-primary m-2">
                    Address
                  </button> */}
                </td>
              </tr>
            </tbody>
            
          </table>
          
        </div>
        
        
      </div>

     
      {order && <OrderAddress  onPlaceOrder={Order}/>}
       

      {info && <AlertBox onClose={() => setinfo(false)} />}
      {infoOrder && <AlertBox_Order onClose={() => setinfoOrder(false)} />}
    
      {/* {serverSuccess && (
              <Success
                message={validationMsg}
                onClose={() => setServerSuccess(false)}
              />
            )} */}
            {/* {backendError && (
              <ErrorComponent
                message={validationMsg}
                onClose={() => setbackendError("")}
              />
            )} */}
    
    </>
  );
}
