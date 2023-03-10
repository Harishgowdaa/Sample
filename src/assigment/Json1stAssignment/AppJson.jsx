import React from 'react';
import Data from "./Data"
import JSON from "./Json.json"
import "./global.css"

const AppJson = () => {
    return (
        <>
        <Data pass={JSON} />  
        </>
    );
}

export default AppJson;
