import React, { useState } from 'react';
import { useMutation } from 'react';
import Btn from '../Components/Btn';
import { Grid, TextField, Button } from '@mui/material/';


const DadCreate = () => {
  const [dadName, setDadName] = useState('');

  const handleDadChange = (event) => {
    setDadName(event.target.value);
  };

  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };
  //card component
  //closebtn componet - top right
  //btn component - submit
  //submit logic - need to complete
  const handleDadSubmit = () => {
    const [createDad] = useMutation(CREATE_DAD);
  };

  

  return (
  <>
  <Btn />
  <Grid>
    <input
        type="text"
        value={dadName}
        onChange={handleDadChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={nickname}
        onChange={handleNicknameChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={dadName}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={dadName}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={dadName}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
        <input
        type="text"
        value={dadName}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={dadName}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
        <input
        type="text"
        value={dadName}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
        <input
        type="text"
        value={dadName}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
        <input
        type="text"
        value={dadName}
        onChange={handleInputChange}
        placeholder="Enter something..."
      />
  </Grid>
  </>
  );
};

export default DadCreate;
