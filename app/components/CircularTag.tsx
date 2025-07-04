import React from "react";

const CircularTag = ({ name }) => {
    return (
        <div className="inline-flex items-center justify-center rounded-full bg-primary text-primary-content text-xs font-semibold px-3 py-1">
            {name}
        </div>
    );
};

export default CircularTag;