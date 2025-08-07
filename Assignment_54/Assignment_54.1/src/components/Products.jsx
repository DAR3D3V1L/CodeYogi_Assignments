import React from "react";

function Products({ products, children }) {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="bg-white shadow-lg p-12 mx-0 my-15 w-full max-w-6xl">
                <div className="flex justify-end mb-4">{children}</div>
                <div className="grid grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Product key={product.id} data={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Product({ data }) {
    return (
        <div className="bg-white  shadow-sm border border-gray-200 overflow-hidden">
            
            {/* Product Image */}
            <div className="relative bg-white h-48 flex items-center justify-center">
                <img
                    src={data.photo}
                    alt={data.title}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
            
            {/* Product Info */}
            <div className="p-4">
                {/* Category */}
                <div className="text-gray-500 font-semibold text-xs mb-1">
                    {data.category}
                </div>
                
                {/* Title */}
                <div className="text-2xl font-semibold text-gray-600 mb-2 line-clamp-2">
                    {data.title}
                </div>
                {/* Stars Rating */}
                {data.stars && (
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <img key={i} src={data.stars} alt="star" className="w-4 h-4" />
                    ))}
                  </div>
                )}
                {/* Price */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-gray-600">
                        {data.price}
                    </span>
                    {data.originalPrice && (
                        <span className="text-xs line-through text-gray-400">
                            {data.originalPrice}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Products;
