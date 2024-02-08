import React, { useState } from 'react';
import { useMutation } from 'react';
import Btn from '../Components/Btn';
import { Grid, TextField, Button } from '@mui/material/';


const DadCreate = () => {
  const [dadName, setDadName] = useState('');
  const [nickname, setNickname] = useState('');
  const [entryMusic, setEntryMusic] = useState('');
  const [dadJoke, setDadJoke] = useState('');
  const [weight, setWeight] = useState('');
  const [armLength, setArmLength] = useState('');
  const [weapon, setWeapon] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
  
  };

  const handleDadChange = (event) => {
    setDadName(event.target.value);
  };
  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };
  const handleEntryMusicChange = (event) => {
    setEntryMusic(event.target.value);
  };
  const handleDadJokeChange = (event) => {
    setDadJoke(event.target.value);
  };
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const handleArmLengthChange = (event) => {
    setArmLength(event.target.value);
  };
  const handleWeaponChange = (event) => {
    setWeapon(event.target.value);
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
  <form
        style={{
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#41a6de',
          height: '100vh', // 100% of the viewport height
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'nowrap',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        }}
      >
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
        value={entryMusic}
        onChange={handleEntryMusicChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={dadJoke}
        onChange={handleDadJokeChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={weight}
        onChange={handleWeightChange}
        placeholder="Enter something..."
      />
        <input
        type="text"
        value={armLength}
        onChange={handleArmLengthChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={weapon}
        onChange={handleWeaponChange}
        placeholder="Enter something..."
      />

  <Button style={{}} onClick={handleFormSubmit}>
          BET!#2
  </Button>
  </form>
  </Grid>
  </>
  );
};

export default DadCreate;
