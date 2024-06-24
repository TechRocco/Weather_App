import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox(){
    let [city, setCity] = useState("");

    let handleInput = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
    }

    return(<div>
        <h2>Search for the Weather</h2>
         
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