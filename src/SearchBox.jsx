import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { convertDegreesToDirection8 } from './helper';



export default function SearchBox({updateWeather, isError}){
    let [city, setCity] = useState("");

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    // console.log(import.meta.env.VITE_WEATHER_API_KEY);

    let getWeatherInfo = async() => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            pressure: jsonResponse.main.pressure,
            wind_speed: jsonResponse.wind.speed, //in km/h
            wind_direction: convertDegreesToDirection8(jsonResponse.wind.deg)
        };
        
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
    };


    let handleInput = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let weather = await getWeatherInfo();
        updateWeather(weather);
        }
        catch(err){
            isError(true);
        }
    }

    return(<div>

        <form onSubmit={handleSubmit}>
        <TextField id="city" 
        label="City" 
        variant="outlined" 
        required
        value={city}
        onChange={handleInput}
        />
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
        </form>

        </div>)
}