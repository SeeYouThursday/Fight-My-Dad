// Importing React Components
import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material/";

//Importing Repo Components
import LoginErr from "../Components/LoginErr";

//Importing Auth
import Auth from "../utils/auth";

//Importing Queries and Mutations
import { QUERY_ME } from "../utils/queries";
import { QUERY_DADS } from "../utils/queries";
import { REMOVE_DAD, UPDATE_WIN } from "../utils/mutations";
import { FightCard, FightCard2 } from "../Components/Card";


const FightBefore = () => {
  ///// Change mydata when auth is working
  const { data: myData, refetch: refetchMyData } = useQuery(QUERY_ME, {
    fetchPolicy: 'network-only',
  });
  const { data: allData, refetch: refetchAllData } = useQuery(QUERY_DADS, {
    fetchPolicy: 'network-only',
  });
  const [totalScoreMyDad, setTotalScoreMyDad] = useState(null);
  const [myDad, setMyDad] = useState("");
  const [opponent, setMyOpponent] = useState("");
  const [selectedMyDad, setSelectedMyDad] = useState("");
  const [selectedOpponent, setSelectedOpponent] = useState("");
  const [selectedDelete, setSelectedDelete] = useState("");
  var [winner, setWinner] = useState("");
  const [deleteDad] = useMutation(REMOVE_DAD);
  const [updateWin] = useMutation(UPDATE_WIN);

  const handleMyDadChange = (event) => {
    console.log("Selected dad ID:", event.target.value);
    const selectedDadId = event.target.value;
    const savedDadIds = myData?.me.savedDads;
    
    // Filter allDads to only include the saved dads
    const myDads = allData?.getAllDads.filter((dad) => savedDadIds.includes(dad._id.toString()));
    
    const selectedMyDad = myDads.find(
      (dad) => dad._id.toString() === selectedDadId
    );
    console.log("Selected dad:", selectedMyDad);
    setMyDad(selectedDadId); // Set myDad to the dad's _id
    setSelectedMyDad(selectedMyDad);
    setWinner("");
  };
  const handleOpponentChange = (event) => {
    const selectedOpponentId = event.target.value;
    const selectedOpponent = allData?.getAllDads.find(
      (dad) => dad._id === selectedOpponentId
    );
    setMyOpponent(selectedOpponentId);
    setSelectedOpponent(selectedOpponent);
    setWinner("");
  };

  const handleDeleteChange = (event) => {
    setSelectedDelete(event.target.value);
    const selectedDelete = allData?.getAllDads.find(
      (dad) => dad._id === event.target.value
    );
  };

  const handleDadFight = async (event) => {

    // random dad number
    const randomDadNumber = Math.floor(Math.random() * 500) + 1;
    const randomOpponentNumber = Math.floor(Math.random() * 500) + 1;

    // dad score
    const totalScoreMyDad =
      selectedMyDad.weight +
      selectedMyDad.armLength +
      selectedMyDad.experience +
      randomDadNumber;

    // opponent score
    const totalScoreOpponent =
      selectedOpponent.weight +
      selectedOpponent.armLength +
      selectedOpponent.experience +
      randomOpponentNumber;

    setTotalScoreMyDad(totalScoreMyDad);

    // find winner!!
    if (totalScoreMyDad > totalScoreOpponent) {
      setWinner("You win :D");
      console.log("You win!");
      await updateWin({
        variables: {
          dadId: selectedMyDad._id,
          isWin: true,
        },
      });
      await updateWin({
        variables: {
          dadId: selectedOpponent._id,
          isWin: false,
        },
      });
    } else {
      setWinner("You lost :(");
      console.log("You lose!");
      await updateWin({
        variables: {
          dadId: selectedOpponent._id,
          isWin: true,
        },
      });
      await updateWin({
        variables: {
          dadId: selectedMyDad._id,
          isWin: false,
        },
      });
    }
    
  };

  console.log("All Dads Data:", allData);


  return (
    <>
      {Auth.loggedIn() ? (
        <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'wrap',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        }}
      >
          {/* <Btn /> */}
          <form
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexWrap: "nowrap",
              flexDirection: "column",
              margin: 0,
              padding: 0,
            }}
          >
            <Grid
            className='fightDiv'
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {/* Fight Img */}
              <img
                className="fightimg"
                src="https://cdn.discordapp.com/attachments/1205909717961015296/1206997441891672195/fmdasset1.png?ex=65de0af7&is=65cb95f7&hm=f4641fed1bc62fb58c3d71ebc0aa7e0eea391940d6231b59e7ccd63fe3157cd7&"
              />
              {/* Selecting Your Dad */}

              <Grid item className='fightside fight1'>
                <FightCard selectedMyDad={selectedMyDad} />
                <FormControl fullWidth className='fightdrop'>
                  <InputLabel id="select-dad">Select Your Dad!</InputLabel>
                  <Select
                    labelId="select-dad"
                    id="select-dad-dropdown"
                    value={myDad} // Set value to myDad
                    label="Dad"
                    onChange={handleMyDadChange}
                  >
                    {myData?.me.savedDads.map((dadId) => {
                      // Find the dad object in allData.getAllDads
                      const dad = allData?.getAllDads.find(
                        (dad) => dad._id.toString() === dadId
                      );

                      // If the dad object is undefined, return null
                      if (!dad) {
                        return null;
                      }

                      return (
                        <MenuItem key={dadId} value={dadId}>
                          {dad.dadName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              

              {/* Select Opposing Dad */}
              <Grid item className='fightside fight2'>
                <FightCard2 selectedOpponent={selectedOpponent} />
                <FormControl fullWidth className='fightdrop'>
                  <InputLabel id="select-oppoent" >
                    Select Your Opponent!
                  </InputLabel>
                  <Select
                    labelId="select-opponent"
                    id="select-opponent-dropdown"
                    value={opponent}
                    label="Dad"
                    onChange={handleOpponentChange}
                  >
                    {allData?.getAllDads.map((dad) => (
                      <MenuItem key={dad._id} value={dad._id}>
                        {dad.dadName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Displaying Results for client to see */}
            <div>Results</div>
            <Grid item xs={12}>
              <TextField
                className='results'
                id="final-winner"
                value={winner}
                variant="outlined"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>

            {/* Button to make them fight */}
            <Button
              className='fightbtn'
              onClick={() => {
                console.log("Button clicked");
                handleDadFight();
              }}
            >
              Make Them Fight!
            </Button>
          </form>
        </div>
      ) : (
        <LoginErr />
      )}
    </>
  );
};

export default FightBefore;
