import React from "react";
import logo from "../assets/images/logo.svg";

function Navbar() {
    return (
        <div className="bg-white p-4">
            <div className="container ml-30 py-5 flex items-center justify-between">
                <img src={logo} alt="Logo" className="h-8" />
            </div>
        </div>
    );
}

export default Navbar;