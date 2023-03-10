import React from "react";
import {createRoot} from "react-dom/client"
import AppJson from "./assigment/Json1stAssignment/AppJson";
import App from "./assigment/netflix/App";
import App1 from "./assigment/props/App1";
import P1 from "./assigment/propsFunction/P1";




createRoot(document.getElementById('root')).render(<App/>)
createRoot(document.getElementById('root')).render(<App1/>)
createRoot(document.getElementById('root')).render(<P1/>)
createRoot(document.getElementById('root')).render(<AppJson/>)
