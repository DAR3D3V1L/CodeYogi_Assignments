import React from "react";

function Button(){
    return (
        <div className="flex gap-2">
            <input className="border w-20 px-2 py-1" type="number" name="" id="" />
            <button className="border-4 p-2 pl-10 pr-10 border-none rounded-md  bg-orange-600 text-white font-semibold">ADD TO CART</button>
        </div>
    );
}
export default Button;