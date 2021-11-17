import React from 'react';

import snniper from "../assest/spinner.gif";

const Loading = () => {
    return (
        <div>
            <img src={snniper} alt="loading"></img>
            <h3>Loading ...</h3>
        </div>
    );
};

export default Loading;