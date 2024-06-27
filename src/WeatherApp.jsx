import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import Alert from '@mui/material/Alert';

export default function WeatherApp() {

    let [err, setErr] = useState(false);
    const [weather, setWeather] = useState({
        city: "Delhi",
        temp: 34.96,
        tempMin: 34.96,
        tempMax: 34,
        humidity: 63,
        feelsLike: 41.96,
        weather: "haze",
        pressure: 1000,
        wind_speed: 3.09, //in km/h
        wind_direction: "NorthEast"
    });

    let updateWeather = (newWeather) => {
        setWeather(newWeather);
    }
    let isError = (anyError) => {
        setErr(anyError);
    }

    return (<div>
        <h2>Weather App</h2>
        <SearchBox updateWeather={updateWeather} isError={isError} />
        <br /><br />
        {
            err ?  <Alert severity="warning" onClose={() => { setErr(false) }}>
            There is no any data available.
        </Alert> : <InfoBox info={weather} />
        }
        
    </div>)
}