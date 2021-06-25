import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    //State
    const [weather, setWeather] = useState(null);
    const [input, setInput] = useState("");
    //functions
    const fetchData = async () => {
        let response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=auto:IP`
        );
        let localWeather = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${response.data.location.name}`
        );
        setWeather(localWeather.data);
    };
    //useEffect
    useEffect(() => {
        fetchData();
    }, []);
    //Event
    const weatherInput = (e) => {
        setInput(e.target.value);
    };
    const searchWeather = async () => {
        let response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`
        );
        setWeather(response.data);
    };
    return (
        <div>
            {weather && (
                <div>
                    <div className="search">
                        <input onChange={weatherInput} type="text" />
                        <button onClick={searchWeather}>Search</button>
                    </div>
                    <div className="weather-info">
                        <div className="location">
                            <h1>
                                Current weather for {weather.location.region}(
                                {weather.location.name}),{" "}
                                {weather.location.country}
                            </h1>
                        </div>
                        <div className="condition">
                            <h3>{weather.current.condition.text}</h3>
                            <img
                                src={weather.current.condition.icon}
                                alt="Weather Icon"
                            />
                            <h3>{weather.current.temp_c}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
