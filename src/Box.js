import React from "react";

function Box({id, backgroundColor="blue", height=5, width=5, handleRemove}) {
    const remove = () => handleRemove(id)
    return (
        <div>
            <div 
                style={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor
                }}
            />
            <button onClick={remove}>Remove Box</button>
        </div>
    )
}

export default Box;