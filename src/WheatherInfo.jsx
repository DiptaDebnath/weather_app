import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./WheatherInfo.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function WheaterInfo({info}){
    return(
        <div className='info'>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80? "./src/assets/Rain.jpg": info.temp > 15? "./src/assets/Hot.jpg" : "./src/assets/Cold.jpg" }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.cityName.toUpperCase()}
                    &nbsp;&nbsp;
                    {info.humidity > 80? <ThunderstormIcon/>: info.temp > 15? <WbSunnyIcon/> : <AcUnitIcon/> }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature = {info.temp}&deg;C</p>
                    <p>Humidity = {info.humidity}</p>
                    <p>Pressure ={info.pressure} pascal</p>
                    <p>Maximum Temperature = {info.tempMax}&deg;C</p>
                    <p>Minimum Temperature ={info.temp_min}&deg;C</p>
                    <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C </p>
                </Typography>
            </CardContent>
        </Card>
        </div>
        
    );
}