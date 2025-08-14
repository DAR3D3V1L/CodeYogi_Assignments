import React from "react";
import Button from "./Button";
import Image from "./Image";
function ProductDetails({ img, heading, price, desc }) {
    return (
        <div className="flex max-w-5xl w-full border bg-white pt-5 pb-4 pl-5">
            <Image img={img} />
            <div className="flex flex-col justify-start items-start w-md gap-5 ml-10 text-gray-600">
                <h1 className=" text-3xl">{heading}</h1>
                <p className="font-semibold text-2xl">Price: ${price}</p>
                <p>{desc}</p>
                <Button />
            </div>
        </div>
    );
}
export default ProductDetails;
export { Button };
export { Image };
