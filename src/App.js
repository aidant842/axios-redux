import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    useEffect(() => {
        const location = axios.get(
            "http://api.weatherapi.com/v1/current.json?key=15d8d9de53994c4d9a1102250212506&q=London&aqi=no"
        );
    }, []);
    return <div></div>;
}

export default App;
