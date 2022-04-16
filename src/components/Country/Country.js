import { Card, CardActions, CardContent, CardMedia, Button, Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    // console.log(props.country.name.common);
    
    const navigate = useNavigate();
    const handleDetail = (name) =>{
        navigate(`/detail/${name}`);
    };

    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.country.flags.svg}
                alt="green iguana"
            />
            <CardContent>
                <h4 variant="h5" component="div">
                    {props.country.name.common}
                </h4>
                <p variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo amet non tenetur
                </p>
                
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Link>
                    <Button onClick={()=>handleDetail(props.country.name.common)} variant="contained">Learn More</Button>
                </Link>
            </CardActions>
        </Card>

    );
};

export default Country;