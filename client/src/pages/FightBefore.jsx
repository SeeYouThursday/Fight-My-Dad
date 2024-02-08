import React, { useState } from 'react';
import Btn from '../Components/Btn'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material/';

const FightBefore = () => {
  // Select Dad to use and opponent to fight against
  // Form Component Loop through Dad data
  // Use GlobalContext to save Dad selection?

    const [myDad, setMyDad] = useState('');

    const handleMyDadChange = (event) => {
      setMyDad(event.target.value);
    };

///// NOTE:  need to hook dropdown to db
///// NOTE: currently hard coded with vaules
  return (
    <>
      <Btn />
      <FormControl fullWidth>
      <InputLabel id="select-dad">Select Your Dad!</InputLabel>
      <Select
        labelId="select-dad"
        id="select-dad-dropdown"
        value={myDad}
        label="Dad"
        onChange={handleMyDadChange}
      >
        <MenuItem value={10}>Mike</MenuItem>
        <MenuItem value={20}>Bob</MenuItem>
        <MenuItem value={30}>Joel</MenuItem>
      </Select>
      </FormControl>
    </>
  )
};

export default FightBefore;
