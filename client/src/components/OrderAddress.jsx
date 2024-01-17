import React, { useState, useEffect } from "react";
import axios from "axios";
export default function OrderAddress(onClose) {
  const [userData, setuserData] = useState({});
 
  useEffect(() => {
    getprofile();
  }, []);
  const getprofile = async () => {
    try {
      // console.log("call getprofile");
      const token = localStorage.getItem("token");
      // console.log("token:", token);

      const response = await axios.get(
        "http://localhost:3000/address",

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

  return (
    <>
     {/* <h3 style={{ color: "gray", fontSize: "20px", textAlign: "center",fontWeight:"bold"}} className="m-3 ms-4">
        My Profile
      </h3> */}
      <div className="container"style={{width:"50%"}}>
        <form>
          <div className="container text-center " style={{width:"50%"}}>
            <div className="mb-3" style={{backgroundColor:"lightblue",color:"white",display:"block"}}  >
              <label className="form-label text-center" >Has the order been placed at this address?</label>
              <textarea
                className="form-control"
                value={userData.address}
                style={{ width: 300, margin: "0 auto",textAlign:"center",backgroundColor:"lightblue",color:"white",outline:"none",border:"none"}}
              />
              <input className="form-control text-center"  style={{backgroundColor:"lightblue",color:"white",border:"none"}} value={userData.phone}/>
              {/* <h5>Has the order been placed at this address?</h5>
              <p>{userData.address}</p>
              <p>Phone:{userData.phone}</p> */}

         <button className="btn btn-primary" onClick={onClose}>Yes</button>
            </div>

          

          

           
          </div>
        </form>
      </div>
    </>
  );
}
