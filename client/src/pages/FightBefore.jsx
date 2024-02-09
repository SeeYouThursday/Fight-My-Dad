import React, { useState } from 'react';
import Btn from '../Components/Btn'
import { Button, FormControl, InputLabel, MenuItem, Select} from '@mui/material/';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {GET_MY_DADS} from '../utils/queries';
import {GET_ALL_DADS} from '../utils/queries';

const FightBefore = () => {
  ///// UPDATE WHEN MUTATION DONE
    const { myData } = useQuery(GET_MY_DADS);
    const { allData } = useQuery(GET_ALL_DADS);

    const [myDad, setMyDad] = useState('');
    const [opponent, setMyOpponent] = useState('');

    const handleMyDadChange = (event) => {
      setMyDad(event.target.value);
    };
    const handleOpponentChange = (event) => {
      setMyOpponent(event.target.value);
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();

  };

///// NOTE:  need to hook dropdown to db
///// NOTE: currently hard coded with vaules
  return (
    <>
      <Btn />

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

      <Grid item xs={2}>
        <FormControl fullWidth>

        <InputLabel id="select-dad">Select Your Dad!</InputLabel>

        <Select
          labelId="select-dad"
          id="select-dad-dropdown"
          value={myDad}
          label="Dad"
          onChange={handleMyDadChange}
        >
          {myData.dads.map(dad => (
                  <MenuItem key={dad._id} value={dad._id}>{dad.DadName}</MenuItem>
          ))}
        </Select>

        </FormControl>

      </Grid>

      <Grid item xs={8}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Grid xs={6}>
          <div> - </div>
        </Grid>
        <Grid xs={6}>
          <div>Name:</div>
        </Grid>
        <Grid xs={6}>
          <div>Nickname:</div>
        </Grid>
        <Grid xs={6}>
          <div>Entry Music:</div>
        </Grid>
        <Grid xs={6}>
          <div>Dad Joke:</div>
        </Grid>
        <Grid xs={6}>
          <div>Weight:</div>
        </Grid>
        <Grid xs={6}>
          <div>Arm Length:</div>
        </Grid>
        <Grid xs={6}>
          <div>Win Num:</div>
        </Grid>
        <Grid xs={6}>
          <div>Loss Num:</div>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid xs={6}>
          <div>My Dad</div>
        </Grid>
        <Grid id="my-dad-name" xs={6}>
          <div>1</div>
        </Grid>
        <Grid id="my-dad-nickname" xs={6}>
          <div>1</div>
        </Grid>
        <Grid id="my-dad-entry-music" xs={6}>
          <div>1</div>
        </Grid>
        <Grid id="my-dad-dad-joke"xs={6}>
          <div>1</div>
        </Grid>
        <Grid id="my-dad-weight" xs={6}>
          <div>1</div>
        </Grid>
        <Grid id="my-dad-arm-length" xs={6}>
          <div>1</div>
        </Grid>
        <Grid id="my-dad-win-num" xs={6}>
          <div>1</div>
        </Grid>
        <Grid id="my-dad-loss-num" xs={6}>
          <div>1</div>
        </Grid>

      </Grid>

      <Grid item xs={6}>
        <Grid xs={6}>
          <div>Opponent</div>
        </Grid>
        <Grid id="opponent-name" xs={6}>
          <div>2</div>
        </Grid>
        <Grid id="opponent-nickname" xs={6}>
          <div>2</div>
        </Grid>
        <Grid id="opponent-entry-music" xs={6}>
          <div>2</div>
        </Grid>
        <Grid id="opponent-dad-joke" xs={6}>
          <div>2</div>
        </Grid>
        <Grid id="opponent-weight" xs={6}>
          <div>2</div>
        </Grid>
        <Grid id="opponent-arm-length" xs={6}>
          <div>2</div>
        </Grid>
        <Grid id="opponent-win-num" xs={6}>
          <div>2</div>
        </Grid>
        <Grid id="opponent-loss-num" xs={6}>
          <div>1</div>
        </Grid>

      </Grid>
      </Grid>
      </Grid>

      <Grid item xs={2}>
      <FormControl fullWidth>
      <InputLabel id="select-oppoent">Select Your Oppoent!</InputLabel>
      <Select
        labelId="select-opponent"
        id="select-opponent-dropdown"
        value={opponent}
        label="Dad"
        onChange={handleOpponentChange}
      >
        {allData.dads.map(dad => (
                  <MenuItem key={dad._id} value={dad._id}>{dad.DadName}</MenuItem>
          ))}
      </Select>
      </FormControl>
    </Grid>

    </Grid>
    <Button onSubmit={handleFormSubmit}>YEET!</Button>
    </>
  )
};

export default FightBefore;
