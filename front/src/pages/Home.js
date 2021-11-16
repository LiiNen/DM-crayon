import React, { useState } from 'react';

import Container from '../components/Container';
import Keyword from '../components/Home/Keyword';

const Home = () => {
  const [date, setDate] = useState(null);
  return <Container>{date ? <Keyword></Keyword> : <h1>Select Date!</h1>}</Container>;
};

export default Home;
