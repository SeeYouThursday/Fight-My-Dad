import React, { useState } from 'react';
import Btn from '../Components/Btn'
import { Button, FormControl, InputLabel, MenuItem, Select} from '@mui/material/';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const FightBefore = () => {
  // Select Dad to use and opponent to fight against
  // Form Component Loop through Dad data
  // Use GlobalContext to save Dad selection?

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
        <MenuItem value={10}>Mike</MenuItem>
        <MenuItem value={20}>Bob</MenuItem>
        <MenuItem value={30}>Joel</MenuItem>
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
        <MenuItem value={10}>Mike</MenuItem>
        <MenuItem value={20}>Bob</MenuItem>
        <MenuItem value={30}>Joel</MenuItem>
      </Select>
      </FormControl>
    </Grid>

    </Grid>
    <Button onSubmit={handleFormSubmit}>YEET!</Button>
    </>
  )
};

export default FightBefore;
