import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { titleCase } from "title-case";
import './infoBox.css'

export default function InfoBox( {info} ) {
    let imgUrl = {
        rainy: "https://images.unsplash.com/photo-1558409057-bbe679023136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
        cold: "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
        hot: "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };
    
    return (<div>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={(info.humidity > 80) ? imgUrl.rainy : (info.temp > 15) ? imgUrl.hot : imgUrl.cold}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {titleCase(info.city)} {(info.humidity > 80) ? <ThunderstormIcon /> : (info.temp > 15) ? <WbSunnyIcon /> : <AcUnitIcon />}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <div className='container'>
                        <div className='tempInfo'>
                            <p>Temperature : {info.temp}&deg;C</p>
                            <p>Min Temp : {info.tempMin}&deg;C</p>
                            <p>Max Temp : {info.tempMax}&deg;C</p>
                            <p>Humidity : {info.humidity}%</p>
                        </div>
                        <div className='windInfo'>
                            <div className='pressure'>
                            <p>Pressure : {info.pressure}mbar</p>
                            </div>
                            <div className='wind'>
                            <p>Wind : </p>
                            {info.wind_direction} <br />
                            {info.wind_speed}km/h
                            </div>
                        </div>
                    </div>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
    </div>)
}