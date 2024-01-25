import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./Searchbox.css";


export default function Searchbox({updateInfo}){
    let [city,setCity] = useState("")
    let [error,setError] = useState(false)
    let handleTextField = (event) =>  {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) =>{
        event.preventDefault();
        try{
            await getWheatherInfo();
        }
        catch(err){
            console.log("did not exist")
            setError(true);
        }
        setCity("");

    }

   const API_URL =  "https://api.openweathermap.org/data/2.5/weather"
   const API_KEY = "494581c8bba2a3b80603439d55cada06"

   let getWheatherInfo = async() =>{
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        

        let weatherDetails = {
            cityName: city,
            feelsLike: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            temp_min: jsonResponse.main.temp_min,
            weather: jsonResponse.weather[0].description,
        };
        updateInfo(weatherDetails);
    }
    catch(err){
        throw err;
    }
        
   }


    return(
        <div className='SearchOption'>         
            <h1>Wheather Report</h1>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="searc" label="City Name" variant="outlined" value= {city} onChange={handleTextField} required/>
                <br />
                <Button variant="contained" type='submit'>Submit</Button>
            </form>
            {error && <h3 style={{color:"red"}}>location didn't exixt</h3>} 
        </div>
    );
}