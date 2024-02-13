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
import Btn from "../Components/Btn";
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
  const [updateWin] = useMutation(UPDATE_WIN);

  const handleMyDadChange = (event) => {
    console.log("Selected dad ID:", event.target.value);
    const selectedDadId = event.target.value;
    const selectedDad = allData?.getAllDads.find(
      (dad) => dad._id === selectedDadId
    );
    console.log("Selected dad:", selectedDad);
    setMyDad(selectedDadId);
    setSelectedMyDad(selectedDad);
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
    setSelectedOpponent(selectedDelete);
    setSelectedOpponent("");
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
      setWinner("You win :D" + selectedMyDad._id);
      console.log("You win!" + totalScoreMyDad);
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
      setWinner("You lost :(" + selectedOpponent._id);
      console.log("You lose!" + totalScoreOpponent);
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
        <>
          <Btn />
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
              {/* Selecting Your Dad */}
              <Grid item xs={2}>
                <FightCard selectedMyDad={selectedMyDad} />
                <FormControl fullWidth className='fightdrop'>
                  <InputLabel id="select-dad">Select Your Dad!</InputLabel>
                  <Select
                    labelId="select-dad"
                    id="select-dad-dropdown"
                    value={myDad}
                    label="Dad"
                    onChange={handleMyDadChange}
                  >
                    {allData?.getAllDads.map((dad) => (
                      <MenuItem key={dad._id} value={dad._id}>
                        {dad.dadName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Fight Img */}
              <img
                className="fightimg"
                src="https://cdn.discordapp.com/attachments/1205909717961015296/1206400263603355688/fightmydadlogo.png?ex=65dbdecc&is=65c969cc&hm=079dbc68119d233df4b51113a78d65a03477b9d4924d1aa2f50790df0eebb611&"
              />

              {/* Select Opposing Dad */}
              <Grid item xs={2}>
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

            {/* <FormControl fullWidth>
              <InputLabel id="select-oppoent">Select dad to delete!</InputLabel>
              <Select
                labelId="select-delete"
                id="select-delete-dropdown"
                value={selectedDelete}
                label="Dad"
                onChange={handleDeleteChange}
              >
                {allData?.getAllDads.map((dad) => (
                  <MenuItem key={dad._id} value={dad._id}>
                    {dad.dadName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              onClick={() => {
                deleteDad({
                  variables: {
                    dadId: selectedDelete,
                  },
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
            </Button> */}
          </form>
        </>
      ) : (
        <LoginErr />
      )}
    </>
  );
};

export default FightBefore;
