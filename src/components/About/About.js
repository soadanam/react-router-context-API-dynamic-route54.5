import { CircularProgress } from '@mui/material';
import React from 'react';

const About = () => {
    let x = 0;
    return (
        <div>
            <h4>About!!</h4>
            {
                x || <CircularProgress />
            }
            <CircularProgress />
            <CircularProgress />
        </div>
    );
};

export default About;