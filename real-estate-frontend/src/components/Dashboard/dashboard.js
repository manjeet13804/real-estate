import React from "react";
import Sidebar from "./sidebar";
import Search from "./search";
import Action from "./action";
import "./dashboard.css";
const Dashboard=()=>{
    return (
      <>
            <div className="maincontainer">
            <div className="sidenav">
                <Sidebar></Sidebar>
            </div>
            <div className="subpart">
                    <div className="headerpart">
                        <Action />
                    </div>
                    <div className="searchpart">
                        <Search />
                    </div>

            
                </div>
            </div>
        </>
    );
}
export default Dashboard;