import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Button, Link } from '@mui/material';
import Independent from './../Independent/Independent';
import NotIndependent from '../NotIndependentent/NotIndependent';
import { RingContext } from './../../App';


const Detail = () => {
    const params = useParams();
    let name = '';
    name = params.any;
    // console.log('name from params?:', name);


    const [country, setCountry] = useState([]);
    // console.log('country?:', country[0]);
    // console.log('country?:', country[0].name.common);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, []);


    const navigate = useNavigate();
    const handleShowAllCountries = () => {
        navigate('/content');
    };

    let condition = '';
    condition = country[0]?.independent;
    // console.log(condition);

    const gift = useContext(RingContext);
    console.log(gift)

    return (
        <div>
            <h2>Hello from detail!</h2>

            <Card sx={{ maxWidth: 345 }} style={{margin:'auto'}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={country[0]?.flags?.svg}
                    alt="green iguana"
                />
                <CardContent>
                    <h4 variant="h5" component="div">
                        {country[0]?.name?.common}
                    </h4>
                    <h5>Capital: {country[0]?.capital}</h5>
                    <p variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo amet non tenetur dolorum reprehenderit
                    </p>
                    <h4>Continet: {country[0]?.continents}</h4>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handleShowAllCountries()} variant='contained' style={{margin:'auto'}}>Go To ALL Contents</Button>
                </CardActions>
            </Card>

            {condition ? <Independent/> : <NotIndependent/>}

            <h4 className='gift' style={{backgroundColor:'pink', color: 'red', display:'inline'}}>Gift from me: {gift} </h4>
        </div>
    );
};

export default Detail;