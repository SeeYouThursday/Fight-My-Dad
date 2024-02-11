
import React, { useState } from 'react';
import Btn from '../Components/Btn';
import { useQuery, useMutation } from '@apollo/client';
import { Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material/';
import {QUERY_ME} from '../utils/queries';
import {QUERY_DADS} from '../utils/queries';
import Auth from '../utils/auth';
import LoginErr from '../Components/LoginErr';
import {REMOVE_DAD} from '../utils/mutations';

//// ADD EXPERIENCE

//// FIGHT EQUATION FUNCTION
/*const Fight = () => {
  //setTimeout
  //Cards
  //Form - inputs are btns or Options
  const fightAnimationText = () => {
    //use setTimeout/setInterval to show each Pow/Bam/Bang/etc. -> then conditionally load results on completion?
  };
  const handleFightStart = () => {
    //onClick={runFightAnimation}
  };
  const handleFight = () => {
    //Create code for Fight Page
    //Add Dad1's Weight + 
  };

  return (
    <>
    </>
  )
};

*/


const FightBefore = () => {
  ///// Change mydata when auth is working
    const { data: myData } = useQuery(QUERY_ME);
    const { data: allData } = useQuery(QUERY_DADS);
    const [totalScoreMyDad, setTotalScoreMyDad] = useState(null);
    const [myDad, setMyDad] = useState("");
    const [opponent, setMyOpponent] = useState("");
    const [selectedMyDad, setSelectedMyDad] = useState("");
    const [selectedOpponent, setSelectedOpponent] = useState("");
    const [selectedDelete, setSelectedDelete] = useState("");
    var [winner, setWinner] = useState("");
    const [deleteDad] = useMutation(REMOVE_DAD);


    const handleMyDadChange = (event) => {
      setMyDad(event.target.value);
      const selectedDad = allData?.getAllDads.find(dad => dad._id === event.target.value);
      setSelectedMyDad(selectedDad);
      setWinner("");
    };

    const handleOpponentChange = (event) => {
      setMyOpponent(event.target.value);
      const selectedOpponent = allData?.getAllDads.find(dad => dad._id === event.target.value);
      setSelectedOpponent(selectedOpponent);
      setWinner("");
    };

    const handleDeleteChange = (event) => {
      setSelectedDelete(event.target.value);
      const selectedDelete = allData?.getAllDads.find(dad => dad._id === event.target.value);
      setSelectedOpponent(selectedDelete);

    };

  const handleDadFight = async (event) => {
    event.preventDefault();
    /*
    const selectedMyDad = {
      weight: 100,
      armLength: 80,
      experience: 70,
    };
  
    const selectedOpponent = {
        weight: 120,
        armLength: 90,
        experience: 80,
    };*/
    

    // random dad number
    const randomDadNumber = Math.floor(Math.random() * 500) + 1;
    const randomOpponentNumber = Math.floor(Math.random() * 500) + 1;
        
    // dad score
    const totalScoreMyDad = selectedMyDad.weight + selectedMyDad.armLength + selectedMyDad.experience + randomDadNumber;

    // opponent score
    const totalScoreOpponent = selectedOpponent.weight + selectedOpponent.armLength + selectedOpponent.experience + randomOpponentNumber;

    setTotalScoreMyDad(totalScoreMyDad);
    
    // find winner!!
    if (totalScoreMyDad > totalScoreOpponent) {
      setWinner("You win :D");
      console.log('You win!' + totalScoreMyDad);
    } else {
      setWinner("You lost :(");
      console.log('You lose!' + totalScoreOpponent);
    }
};
  

  console.log('All Dads Data:', allData);

///// NOTE:  need to hook dropdown to db
///// NOTE: currently hard coded with vaules
  return (
    <>
    {Auth.loggedIn() ? (
      <>
      <form
            style={{
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#41a6de',
              height: '100vh',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexWrap: 'nowrap',
              flexDirection: 'column',
              margin: 0,
              padding: 0,
            }}
            
      >
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
          {allData?.getAllDads.map(dad => (
                <MenuItem key={dad._id} value={dad._id}>{dad.dadName}</MenuItem>
              ))}
        </Select>

        </FormControl>

      </Grid>

      <Grid item xs={4}>
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
          {selectedMyDad && <div>{selectedMyDad.dadName}</div>}
        </Grid>
        <Grid id="my-dad-nickname" xs={6}>
          {selectedMyDad && <div>{selectedMyDad.nickname}</div>}
        </Grid>
        <Grid id="my-dad-entry-music" xs={6}>
          {selectedMyDad && <div>{selectedMyDad.entryMusic}</div>}
        </Grid>
        <Grid id="my-dad-dad-joke"xs={6}>
          {selectedMyDad && <div>{selectedMyDad.dadJoke}</div>}
        </Grid>
        <Grid id="my-dad-weight" xs={6}>
          {selectedMyDad && <div>{selectedMyDad.weight}</div>}
        </Grid>
        <Grid id="my-dad-arm-length" xs={6}>
          {selectedMyDad && <div>{selectedMyDad.armLength}</div>}
        </Grid>
        <Grid id="my-dad-experience" xs={6}>
          {selectedMyDad && <div>{selectedMyDad.experience}</div>}
        </Grid>
        <Grid id="my-dad-win-num" xs={6}>
          {selectedMyDad && <div>{selectedMyDad.winNum}</div>}
        </Grid>
        <Grid id="my-dad-loss-num" xs={6}>
          {selectedMyDad && <div>{selectedMyDad.nickname}</div>}
        </Grid>

      </Grid>

      <Grid item xs={6}>
        <Grid xs={6}>
          <div>Opponent</div>
        </Grid>
        <Grid id="opponent-name" xs={6}>
          {selectedOpponent && <div>{selectedOpponent.dadName}</div>}
        </Grid>
        <Grid id="opponent-nickname" xs={6}>
          {selectedOpponent && <div>{selectedOpponent.dadName}</div>}
        </Grid>
        <Grid id="opponent-entry-music" xs={6}>
          {selectedOpponent && <div>{selectedOpponent.entryMusic}</div>}
        </Grid>
        <Grid id="opponent-dad-joke" xs={6}>
          {selectedOpponent && <div>{selectedOpponent.dadJoke}</div>}
        </Grid>
        <Grid id="opponent-weight" xs={6}>
          {selectedOpponent && <div>{selectedOpponent.weight}</div>}
        </Grid>
        <Grid id="opponent-arm-length" xs={6}>
          {selectedOpponent && <div>{selectedOpponent.armLength}</div>}
        </Grid>
        <Grid id="opponent-experience" xs={6}>
          {selectedOpponent && <div>{selectedOpponent.experience}</div>}
        </Grid>
        <Grid id="opponent-win-num" xs={6}>
          {selectedOpponent && <div>{selectedOpponent.winNum}</div>}
        </Grid>
        <Grid id="opponent-loss-num" xs={6}>
          {selectedOpponent && <div>{selectedOpponent.lossNum}</div>}
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
        value={selectedOpponent}
        label="Dad"
        onChange={handleOpponentChange}
      >
        {allData?.getAllDads.map(dad => (
            <MenuItem key={dad._id} value={dad._id}>{dad.dadName}</MenuItem>
          ))}
      </Select>
      </FormControl>
      </Grid>

      </Grid>

      <div>Results</div>
      <Grid item xs={12}>
        <TextField
          id="final-winner"
          value={winner}
          variant="outlined"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>

      <Button onClick={() => 
        {
          console.log("Button clicked"); handleDadFight();
        }
      }
      >Make Them Fight!</Button>

      <FormControl fullWidth>
      <InputLabel id="select-oppoent">Select dad to delete!</InputLabel>
      <Select
        labelId="select-delete"
        id="select-delete-dropdown"
        value={selectedDelete}
        label="Dad"
        onChange={handleDeleteChange}
      >
        {allData?.getAllDads.map(dad => (
            <MenuItem key={dad._id} value={dad._id}>{dad.dadName}</MenuItem>
          ))}
      </Select>
      </FormControl>
    <Button

    
    onClick={() => {
      deleteDad({
        variables: {
          dadId: selectedDelete
        }
      })
        .then((res) => {
          console.log("The dad has been deleted:", res);
        })
        .catch((err) => {
          console.error("Error deleting dad:", err);
        });
    }}
  >
    Delete Dad
  </Button>
    </form>
     </>
      ) : (
        <LoginErr />
      )}
    </>
  );
};

export default FightBefore;