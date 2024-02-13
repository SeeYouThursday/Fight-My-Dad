import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Btn from '../Components/Btn';
import { Modal, Box, Grid, TextField, Button } from '@mui/material/';
import { SAVE_DAD } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth.js';
import { Link } from 'react-router-dom';
import LoginErr from '../Components/LoginErr';
import dadIcons from '../utils/dadIcons.js';
import { CreateCard } from '../Components/Card'

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
  });

  const { data: myData } = useQuery(QUERY_ME);
  const [addDad, { data, error }] = useMutation(SAVE_DAD);
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
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

        const  {data}  = await addDad({
          variables: { newDad: convertedFormData },
        });
        

        setShowModal(true);
      } catch (err) {
        console.error('Error submitting form:', err);
        setShowModal(true);
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

  //card component
  //closebtn componet - top right
  //btn component - submit
  //submit logic - need to complete

  return (
    <>
      {Auth.loggedIn() ? (
        <>
        <Btn/>
          <Grid className='createContainer'>
            {/* Form for Creating the Dads  */}
            <form
              style={{
                height: '60vh',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'nowrap',
                flexDirection: 'column',
                margin: 0,
                padding: 0,

              }}
            >
              <TextField
                className='createInput'
                type="text"
                name="dadName"
                value={formData.dadName}
                onChange={handleDadChange}
                placeholder="Dad Name"
              />
              <TextField
                className='createInput'
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleDadChange}
                placeholder="Nickname"
              />
              <TextField
                className='createInput'
                type="text"
                name="entryMusic"
                value={formData.entryMusic}
                onChange={handleDadChange}
                placeholder="Choose some entry music!"
              />
              <TextField
                className='createInput'
                type="text"
                name="dadJoke"
                value={formData.dadJoke}
                onChange={handleDadChange}
                placeholder="Add your dad's favorite joke!"
              />
              <TextField
                className='createInput'
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleDadChange}
                placeholder="Weight"
              />
              <TextField
                className='createInput'
                type="text"
                name="armLength"
                value={formData.armLength}
                onChange={handleDadChange}
                placeholder="Arm Length"
              />
              <TextField
                className='createInput'
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleDadChange}
                placeholder="Experience Score"
              />

              {/* Icon select at this time? */}
              {/* <SelectIcon type="object" name="icon" value={formData.icon} onChange={handleDadChange} /> */}

              <Button onClick={handleFormSubmit} style={{}}>
                Submit
              </Button>
            </form>
            {/* FOR MVP: Make formData appear on Card as a Preview */}
            <CreateCard formData={formData}/>
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
                <p id="result-modal-description">
                  Success! Data:
                  {formData.dadName}
                </p>
              )}
              {error && (
                <p id="result-modal-description">
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
