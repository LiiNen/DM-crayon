import React, { useState } from 'react';

import Container from '../components/Container';
import Keyword from '../components/Home/Keyword';

import tempData from '../Data/temp';

const Home = () => {
  const [date, setDate] = useState(null);
  const data = Object.values(tempData).sort((a, b) => b.data.length - a.data.length);
  console.log(data);
  return (
    <Container>
      {/* {date ? <Keyword></Keyword> : <h1>Select Date!</h1>} */}
      <Keyword keyword={data}></Keyword>
    </Container>
  );
};

export default Home;
