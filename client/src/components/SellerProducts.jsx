import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import "./Sproduct.css";
export default function SellerProducts() {
  const { id } = useParams("");
  console.log("user id get in seller:", id);
  // const [userData, setuserData] = useState({});
  // const[cartData,setCartData]=useState({})

  const [Products, setProducts] = useState([]);
  const[empty,setempty]=useState(false);

  useEffect(() => {
    // getprofile();
    myProducts();
  }, []);

  // const getprofile = async () => {
  //   try {
  //     console.log("call getprofile");
  //     const token = localStorage.getItem("token");
  //     console.log("token:", token);

  //     const response = await axios.get(
  //       "http://localhost:3000/user/profile",

  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     setuserData(response.data.data);
  //   } catch {
  //     if (error.response && error.response.status === 404) {
  //       //  not found error
  //       console.log("user not  found");
  //     } else {
  //       console.error("Error fetching  details:", error);
  //     }
  //   }
  // };
  // // console.log("userid:",userData._id)
  // var uid = userData._id;
  // console.log("uid in cart:", uid);
  const myProducts = async () => {
    try {
      // console.log("user id inside getcart:",uid);
      const token = localStorage.getItem("token");
    //   console.log("token in cart product", token);
      const response = await axios.get(
        `http://localhost:3000/seller/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      setProducts(response.data.data);
      if( (response.data.data).length == 0){
        // alert("No products have been added yet")
        setempty(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("Product not  found");
      } else {
        console.error("Error fetching product details:", error);
      }
    }
  };
 

  return (
    <>
     
      <div className="container">
      <h3 style={{textAlign:"center",color:"gray"}}>My Store</h3>

        <div className="row">
        {empty && <div className="empty text-center m-4"><div className="inner-div">No products have been added yet</div></div>}
          {Products.map((item) => (
            <div key={item._id} className="col-md-3 mb-3">
              <div className="card">
                <img
                //   src={item.pid.pimage}
                  height={300}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <div className="cbutn d-flex align-items-center justify-content-between">

                  
                  {/* <button onClick={() => Delete(item.pid._id)}  className="btn btn-primary"> Remove </button> */}
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
