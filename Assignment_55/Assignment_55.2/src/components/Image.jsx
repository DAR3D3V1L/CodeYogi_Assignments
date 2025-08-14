import React from "react";

function Image({ img }) {
    return (
        <div>
            <img src={img} alt="mug-image" style={{ width: '360px', height: 'auto' }} />
        </div>
    );
}

export default Image;
