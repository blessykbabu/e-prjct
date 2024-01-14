import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Order() {
  const { id } = useParams("");
  // console.log("user id get:",id)

const[empty,setempty]=useState(false);
const [orderProducts, setOrderProducts] = useState([]);
 
  
  useEffect(() => {
 
    getOrder();
  }, []);

  const getOrder = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:3000/fetch/order/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data); 
        setOrderProducts(response.data.data);
        if((response.data.data).length == 0){
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

  const Delete = async (id) =>{
    try {
      const token = localStorage.getItem("token");
        const response = await axios.delete(
          `http://localhost:3000/delete/order/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        getOrder();
        alert("Order canceled")
    } catch (error) {
      console.log("error:",error)
    }
  }
  
  return (
    <>
     {/* <h3 >My Orders</h3> */}
      <div className="container">
       
      <h3  style={{textAlign:"center",color:"gray"}}>My Orders</h3>
      {empty && <div className="empty text-center m-4"><div className="inner-div">You have not placed any orders yet</div></div>}
          {orderProducts.map((item) => {
            return(
          <div key={item._id} className="mb-3">
            <div className="row" >
              
              <div className="col-md-3" >
                <div className="card mb-3">
                  <img
                    src={item.pid.pimage}
                    height={300}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title"> {item.pid.name}</h5>
                    <p className="card-text"> ${item.pid.price}
                      <span className="text-warning"></span>
                     
                    </p>

                    <button
                      onClick={() => Delete(item.pid._id)} 
                      className="btn btn-primary"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/* );
        })} */}
        </div>
            )
})}
      </div>
    </>
  );
}