import "./action.css";
import { CgChevronDown } from "react-icons/cg";
import { BiUser } from "react-icons/bi";

import Logout from "./logout";
const Action =()=>{
    return(
        <>
        <div className="headercontainer">
        <div className="userid">USER ID </div>

            <div className="dropdown">
              <BiUser />
              {/* {userName} */}
             
             <CgChevronDown />
              <div className="dropdown-content">
                <Logout></Logout>
              </div>
            </div>
        </div>

      <div className="headerbtmline"></div>
    </>
        
    )
}
export default Action;