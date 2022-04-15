import './Content.css';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import { Grid, ListItem } from '@mui/material';

const Contents = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, []);
    return (
        <Grid className='content-container' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg:13 }}>

            {country.map(country => (
                <Grid item xs={4} sm={3} md={3} key={country.name.common}>
                    <ListItem className='content-item'>
                        <Country country={country} ></Country>)
                    </ListItem>
                </Grid>
            ))}

        </Grid>
    );
};

export default Contents;