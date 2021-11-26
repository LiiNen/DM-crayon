import React, { useState, useEffect } from 'react';
import { Box, InputLabel, MenuItem, Select, FormControl } from '@mui/material';

import Container from '../components/Container';
import Keyword from '../components/Home/Keyword';

import tempData from '../Data/temp';
import searchData from '../Data';

function sortingData(data) {
  let res = Object.values(data).sort((a, b) => b.data.length - a.data.length);
  console.log('res', res);
  return res;
}

console.log(searchData);

const Home = () => {
  const [option, setOption] = useState({ category: '', date: '' });
  const [data, setData] = useState(null);
  console.log(data);

  const handleChange = event => {
    event.target.name === 'category'
      ? setOption({ [event.target.name]: event.target.value, date: '' })
      : setOption({ ...option, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (option.date !== '') {
      setData(sortingData(searchData[option.category][option.date]));
      console.log('update');
    }
  }, [option]);

  return (
    <Container style={{ maxWidth: '1180px', margin: '0 auto' }}>
      {/* {date ? <Keyword></Keyword> : <h1>Select Date!</h1>} */}
      <Box sx={{ display: 'flex', gap: 2, width: '50%', justifyContent: 'space-around' }}>
        <Box sx={{ flexBasis: '40%', flexShrink: 0 }}>
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
        <Box sx={{ flexBasis: '40%', flexShrink: 0 }}>
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
                Object.keys(searchData[option.category]).map((el, idx) => (
                  <MenuItem value={el} key={idx}>
                    {el}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      {data && <Keyword keyword={data}></Keyword>}
    </Container>
  );
};

export default Home;
