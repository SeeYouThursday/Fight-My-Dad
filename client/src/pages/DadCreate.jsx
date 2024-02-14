//NECESSARY IMPORTS
import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Modal, Box, Grid, TextField, Button } from '@mui/material/';
import { Link } from 'react-router-dom';

//LOCAL IMPORTS
import LoginErr from '../Components/LoginErr';
import { CreateCard } from '../Components/Card'

//QUERIES, MUTATIONS, + ETC
import { SAVE_DAD } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import dadIcons from '../utils/dadIcons.js';
import Auth from '../utils/auth.js';


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

  const { data: myData } = useQuery(QUERY_ME);
  const [addDad, { data, error }] = useMutation(SAVE_DAD);
  const [showModal, setShowModal] = useState(false);

  //Submits Form When Submit Button is Clicked
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

  // Uses setFormData() to change any Dad Value to the value entered in an event's given input box
  const handleDadChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log('Updated form data:', formData);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //FOR THE RANDOM IMAGE:

  //Getting a random number to use in randomImage()
  const randomIndex = Math.floor(Math.random() * dadIcons.length)

  //Uses randomIndex and setFormData to change the newDad's icon to the randomIndex number
  const randomImage = () => {
    console.log('hi')
    const newicon = dadIcons[randomIndex]
    setFormData({ ...formData, icon: newicon});
    console.log('updated formdata', formData)
  }

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <Grid className='createContainer'>
            {/* Form for Creating the Dads  */}
            <div className='createDad'>
            <form
              style={{
                height: 'auto',
                display: 'flex',
                flexWrap: 'nowrap',
                flexDirection: 'column',
                margin: '50px',
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

              {/* Randomly Selected Image */}
              <Button name="icon" value={formData.icon} onClick={randomImage} style={{}}>
                Choose Your Image
              </Button>
              <Button onClick={handleFormSubmit} style={{}}>
                Submit
              </Button>
            </form>
            </div>
            
            <CreateCard formData={formData}/>
          </Grid>

          {/* When Form is Submitted, Throw a Modal with the Result */}
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
              {/* Success */}
              <h2 id="result-modal">Result</h2>
              {data && (
                <p id="result-modal-description">
                  Success! Data:
                  {formData.dadName}
                </p>
              )}
              {/* Fail */}
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
        // If You're not logged in, Throw error screen!
        <LoginErr />
      )}
    </>
  );
};

export default DadCreate;
