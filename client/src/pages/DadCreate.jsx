import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
// import Btn from '../Components/Btn';
import { Modal, Box, Grid, TextField, Button } from '@mui/material/';

import { SAVE_DAD } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth.js';
// import { Link } from 'react-router-dom';
import LoginErr from '../Components/LoginErr';
import dadIcons from '../utils/dadIcons.js';
import { CreateCard } from '../Components/Card';

const DadCreate = () => {
  const [formData, setFormData] = useState({
    armLength: '',
    dadJoke: '',
    dadName: '',
    entryMusic: '',
    experience: '',
    nickname: '',
    userId: '',
    weight: '',
    icon: '',
  });
  const [formError, setFormError] = useState(false);

  const { data: myData } = useQuery(QUERY_ME);
  const [addDad, { data, error }] = useMutation(SAVE_DAD);
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormError(false);

    if (Auth.loggedIn()) {
      const userId = Auth.getProfile().data._id;
      // Convert form fields to the correct data types
      const convertedFormData = {
        ...formData,
        weight: parseInt(formData.weight),
        armLength: parseInt(formData.armLength),
        experience: parseInt(formData.experience),
        userId: userId,
      };

      try {
        const { data } = await addDad({
          variables: { newDad: convertedFormData },
        });

        setShowModal(true);
      } catch (err) {
        // setShowModal(true); //! Not necessary with helper text
        setFormError(true);
      }
    }
  };

  const handleDadChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log('Updated form data:', formData);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const randomIndex = Math.floor(Math.random() * dadIcons.length);

  const randomImage = () => {
    console.log('hi');
    const newicon = dadIcons[randomIndex];
    setFormData({ ...formData, icon: newicon });
    console.log('updated formdata', formData);
  };
  //card component
  //closebtn componet - top right
  //btn component - submit
  //submit logic - need to complete

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          {/* <Btn/> */}
          <h1>REGISTER YOUR DAD!</h1>
          <Grid
            className="createContainer"
            // style={{
            //   display: 'flex',
            //   flexDirection: 'row',
            //   flexWrap: 'wrap',
            //   justifyContent: 'center',
            //   alignItems: 'center',
            // }}
          >
            {/* Form for Creating the Dads  */}
            <div className="createDad">
              <form
                noValidate
                style={{
                  height: 'auto',
                  display: 'flex',
                  // justifyContent: 'flex-start',
                  // alignItems: 'center',
                  flexWrap: 'nowrap',
                  flexDirection: 'column',
                  margin: '50px',
                  padding: 0,
                }}
              >
                <TextField
                  required
                  error={Boolean(formError)}
                  helperText={!formError ? '' : 'Try again!'}
                  className="createInput"
                  type="text"
                  name="dadName"
                  label="Dad Name"
                  value={formData.dadName}
                  onChange={handleDadChange}
                  placeholder="Dad Name"
                  margin="dense"
                />
                <TextField
                  required
                  error={Boolean(formError)}
                  helperText={!formError ? '' : 'Try again!'}
                  className="createInput"
                  type="text"
                  name="nickname"
                  label="Nickname"
                  value={formData.nickname}
                  onChange={handleDadChange}
                  placeholder="Nickname"
                  margin="dense"
                />
                <TextField
                  required
                  error={Boolean(formError)}
                  helperText={!formError ? '' : 'Try again!'}
                  className="createInput"
                  type="text"
                  name="entryMusic"
                  label="Entry Music"
                  value={formData.entryMusic}
                  onChange={handleDadChange}
                  placeholder="Choose some entry music!"
                  margin="dense"
                />
                <TextField
                  required
                  error={Boolean(formError)}
                  helperText={!formError ? '' : 'Try again!'}
                  className="createInput"
                  type="text"
                  name="dadJoke"
                  label="Dad Joke"
                  value={formData.dadJoke}
                  onChange={handleDadChange}
                  placeholder="Add your dad's favorite joke!"
                  margin="dense"
                />
                <TextField
                  required
                  error={Boolean(formError)}
                  helperText={!formError ? '' : 'Try again!'}
                  className="createInput"
                  type="number"
                  name="weight"
                  label="Weight"
                  value={formData.weight}
                  onChange={handleDadChange}
                  placeholder="Weight"
                  margin="dense"
                />
                <TextField
                  required
                  error={Boolean(formError)}
                  helperText={!formError ? '' : 'Try again!'}
                  className="createInput"
                  type="number"
                  label="Arm Length"
                  name="armLength"
                  value={formData.armLength}
                  onChange={handleDadChange}
                  placeholder="Arm Length"
                  margin="dense"
                />
                <TextField
                  required
                  error={Boolean(formError)}
                  helperText={!formError ? '' : 'Try again!'}
                  className="createInput"
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleDadChange}
                  label="Years Fighting"
                  placeholder="9"
                  margin="dense"
                />

                {/* Icon select at this time? */}
                <Button
                  name="icon"
                  value={formData.icon}
                  onClick={randomImage}
                  style={{}}
                >
                  Choose Your Image
                </Button>
                <Button onClick={handleFormSubmit} style={{}}>
                  Submit
                </Button>
              </form>
            </div>
            {/* FOR MVP: Make formData appear on Card as a Preview */}

            <CreateCard formData={formData} />
          </Grid>

          <Modal
            open={showModal}
            onClose={handleCloseModal}
            aria-labelledby="result-modal"
            aria-describedby="result-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 id="result-modal">Result</h2>
              {data && (
                <p className="result-modal-description">
                  Success! Data:
                  {formData.dadName}
                </p>
              )}
              {error && (
                <p className="result-modal-description">
                  FAIL! Error: {error.message}. Dad Name:
                  {formData.dadName}
                  Dad Joke:
                  {formData.dadJoke}
                </p>
              )}
              <Button onClick={handleCloseModal}>Close</Button>
            </Box>
          </Modal>
        </>
      ) : (
        <LoginErr />
      )}
    </>
  );
};

export default DadCreate;
