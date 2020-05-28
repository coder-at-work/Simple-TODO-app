import React from "react";

const Display = props => {
    const { data } = props;
    const clickHandler = index => {
        if (props.shouldBeClicked)
            props.click(index);
    };
    return (
        <div>
            {data &&
                data.map((entry, index) => (
                    <div key={index} onClick={() => clickHandler(index)} style={props.shouldBeClicked ? { cursor: 'pointer', textAlign: 'center' } : { textAlign: 'center' }}>
                        {entry}
                    </div>
                ))}
        </div>
    );
};

export default Display;
