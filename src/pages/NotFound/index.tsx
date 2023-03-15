import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Helmet } from 'react-helmet';

import warning from '../../assets/img/warning.png';
import notPizza from '../../assets/not-pizza.png';

import './notfound.scss';

const NotFoundBlock: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="notpage text-center">
      <Helmet>
        <title>Page Not Found</title>
        <link rel="icon" type="image/png" href={warning} sizes="16x16" />
      </Helmet>
      <div className="d-flex align-center justify-center pb-40">
        <h2 className="notpage-n1">4</h2>
        <img width={200} height={200} src={notPizza} alt="notPizza" />
        <h2 className="notpage-n2">4</h2>
      </div>
      <h1 className="pb-20">Oops... page not found</h1>
      <p className="pb-35">The page you are looking for does not exist</p>
      <Button size="large" variant="contained" color="error" onClick={() => navigate('/')}>
        Go back
      </Button>
    </div>
  );
};

export default NotFoundBlock;
