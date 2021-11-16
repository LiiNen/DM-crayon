import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import Container from '.././components/Container';
import StyledLink from '.././components/StyledLink';

const Notfound = () => {
  return (
    <Container style={{ flexDirection: 'column' }}>
      <h1 style={{ color: 'black' }}>Wrong URL!</h1>
      <StyledLink to="/">
        <Button variant="outlined" size="large">
          <h2 style={{ margin: 0 }}>Go back to main page</h2>
        </Button>
      </StyledLink>
    </Container>
  );
};

export default Notfound;
