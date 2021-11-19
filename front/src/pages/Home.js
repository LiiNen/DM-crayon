import React, { useState } from 'react';
import { Box, InputLabel, MenuItem, Select, FormControl } from '@mui/material';

import Container from '../components/Container';
import Keyword from '../components/Home/Keyword';

import tempData from '../Data/temp';

function sortingData(data) {
  return Object.values(data).sort((a, b) => b.data.length - a.data.length);
}

const searchData = { IT: ['11_1', '11_2', '11_3'], positics: ['10_1', '10_2'] };

const Home = () => {
  const [option, setOption] = useState({ category: '', date: '' });
  const data = Object.values(tempData).sort((a, b) => b.data.length - a.data.length);
  console.log(option);

  const handleChange = event => {
    setOption({ ...option, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      {/* {date ? <Keyword></Keyword> : <h1>Select Date!</h1>} */}
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option.category}
            name="category"
            label="category"
            onChange={handleChange}
          >
            {Object.keys(searchData).map((el, idx) => (
              <MenuItem value={el} key={idx}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option.date || ''}
            name="date"
            label="date"
            disabled={!option.category}
            onChange={handleChange}
          >
            {option.category &&
              searchData[option.category].map((el, idx) => (
                <MenuItem value={el} key={idx}>
                  {el}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <Keyword keyword={data}></Keyword>
    </Container>
  );
};

export default Home;
