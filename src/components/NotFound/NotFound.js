import React from 'react';
import './NotFound.css';
import { Button } from '@mui/material';
import img from '../../images/404.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found-div'>
            <img src={img} className='image' alt="" />
            <h5>Page not found!</h5>
            <p>The page you want to go is not currently available</p>
            <Button onClick={()=> navigate('/home')} className='btn-1' variant='contained'>Home Page</Button>
            <Button className='btn-2' variant='outlined'>Back</Button>
        </div>
    );
};

export default NotFound;