import "./SuccessComponnetCss.css";
import {Link} from 'react-router-dom'
const AlertBox = ({ onClose,message }) => {

return(
    <>
<div id="card" className="animated fadeIn">
  <div id="upper-side">

    <h3 id="status">Only customers can add items to the cart.</h3>
    < button id="contBtn"style={{border:0}} onClick={onClose} >OK
    </button>
  </div>

</div>
</>
)
};
export default AlertBox;