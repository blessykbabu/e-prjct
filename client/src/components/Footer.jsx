import React from "react";
import facebook from "../image/facebook.png";
import insta from "../image/insta.png";
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <>

<div className="container border-top m-5">
        <footer>
          <div className="row mt-4">
            <div className="col border-end">
              <h5>CUSTOMER SERVICE</h5>
              <ul style={{listStyle:"none"}}>
              <Link to="/contact" style={{textDecoration:"none",color:"black"}}><li>Contact us</li></Link> 
                {/* <li></li>
                <li>Shipping</li> */}
              </ul>
            </div>
            <div className="col border-end">
            <h5 className="ms-4">LINKS</h5>
              <ul style={{listStyle:"none"}}>
                {/* <li >ABOUT</li> */}
               <Link to="/about" style={{textDecoration:"none",color:"black"}}><li>About us</li></Link> 
                {/* <li>Shipping</li> */}
              </ul>
            </div>
            <div className="col">
            <h5>NEWSLETTER</h5>
              <h6>Sign Up for Our Newsletter</h6>
              <form>
  <div className="mb-3">
    {/* <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label> */}
    <input
      type="email"
      className="form-control m-3"
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
          <div className="container text-center m-5"> 
           <h6>@ 2024 EZY MART</h6>
           <div className="footer-image ">
            <img className="m-3" src={insta} height={20}/>
            <img src={facebook} height={20}/>


           </div>
          </div>
        </footer>
      </div>
        </>
    )
}