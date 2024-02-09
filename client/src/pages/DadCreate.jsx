import React, { useState } from 'react';
import { useMutation } from 'react';
import Btn from '../Components/Btn';
import { Grid, TextField, Button } from '@mui/material/';
import {SAVE_DAD} from '../utils/mutations';

const DadCreate = () => {
  const [dadName, setDadName] = useState('');
  const [nickname, setNickname] = useState('');
  const [entryMusic, setEntryMusic] = useState('');
  const [dadJoke, setDadJoke] = useState('');
  const [weight, setWeight] = useState('');
  const [armLength, setArmLength] = useState('');
  const [weapon, setWeapon] = useState('');

  const [saveDad] = useMutation(SAVE_DAD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await saveDad({
        variables: { ...formData },
      });

      navigate(`/saveDad/${data.saveDad._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      DadName: 'JavaScript',
      nickname: 'JavaScript',
      entryMusic: 'JavaScript',
      dadJoke: 'JavaScript',
      weight: 'JavaScript',
      armLength: 'JavaScript',
      weapon: 'JavaScript',
      winNum: 'JavaScript',
      lossNum: 'JavaScript',
    });
  };

  const handleDadChange = (event) => {
    const{name,value} = event.target;
    setFormData({
      [name]:value,
    });
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
        onChange={handleDadChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={entryMusic}
        onChange={handleDadChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={dadJoke}
        onChange={handleDadChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={weight}
        onChange={handleDadChange}
        placeholder="Enter something..."
      />
        <input
        type="text"
        value={armLength}
        onChange={handleDadChange}
        placeholder="Enter something..."
      />
      <input
        type="text"
        value={weapon}
        onChange={handleDadChange}
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
