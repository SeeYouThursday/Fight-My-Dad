import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Btn from '../Components/Btn';
import { Modal, Box, Grid, TextField, Button } from '@mui/material/';
import {SAVE_DAD} from '../utils/mutations';
//import Auth from '../utils/auth.js'
import { Link } from 'react-router-dom';

const DadCreate = () => {
  const [formData, setFormData] = useState({
    dadName: '',
    nickname: '',
    entryMusic: '',
    dadJoke: '',
    weight: '',
    armLength: '',
    experience: '',
    userId: 'LOLFAKE', 
  });

  const [saveDad, { data, error }] = useMutation(SAVE_DAD);
  const [showModal, setShowModal] = useState(false);

const handleFormSubmit = async (event) => {
  event.preventDefault();

  // Convert form fields to the correct data types
  const convertedFormData = {
    ...formData,
    weight: parseInt(formData.weight),
    armLength: parseInt(formData.armLength),
    experience: parseInt(formData.experience)
  };

  try {
    console.log('Form data:', convertedFormData); 
    await saveDad({
      variables: { newDad: convertedFormData },
    });
    setShowModal(true);
  } catch (err) {
    console.error('Error submitting form:', err); 
    setShowModal(true);
  }
};


  const handleDadChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //card component
  //closebtn componet - top right
  //btn component - submit
  //submit logic - need to complete
  const handleDadSubmit = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <>
      <Grid>
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
          onSubmit={handleFormSubmit}
        >
          
          <TextField
            type="text"
            name="dadName"
            value={formData.dadName}
            onChange={handleDadChange}
            placeholder="Dad Name"
          />
          <TextField
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleDadChange}
            placeholder="Nickname"
          />
          <TextField
            type="text"
            name="entryMusic"
            value={formData.entryMusic}
            onChange={handleDadChange}
            placeholder="Choose some entry music!"
          />
          <TextField
            type="text"
            name="dadJoke"
            value={formData.dadJoke}
            onChange={handleDadChange}
            placeholder="Add your dad's favorite joke!"
          />
          <TextField
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleDadChange}
            placeholder="Weight"
          />
          <TextField
            type="text"
            name="armLength"
            value={formData.armLength}
            onChange={handleDadChange}
            placeholder="Arm Length"
          />
          <TextField
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleDadChange}
            placeholder="Experience Score"
          />

          <Button type="submit" style={{}}>
            Submit
          </Button>
        </form>
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
            Success! Data: {convertedFormData}
          </p>
        )}
        {error && (
      <p id="result-modal-description">
        FAIL! Error: {error.message}. Dad Name: {convertedFormData.dadName}
      </p>
    )}
        <Button onClick={handleCloseModal}>Close</Button>
      </Box>
    </Modal>
  
  </>
);

/*

  return (
    <>
      <Btn />
      //{ Conditionally render CreateDad page based on Logged In }
      {Auth.loggedIn() ? (
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
            }}>
            
            //{ Form Inputs }

            <input
              type="text"
              name="DadName"
              value={formData.DadName}
              onChange={handleDadChange}
              placeholder="Dad Name"
            />
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleDadChange}
              placeholder="Nickname"
            />
            <input
              type="text"
              name="entryMusic"
              value={formData.entryMusic}
              onChange={handleDadChange}
              placeholder="Choose some entry music!"
            />
            <input
              type="text"
              name="dadJoke"
              value={formData.dadJoke}
              onChange={handleDadChange}
              placeholder="Add your dad's favorite joke!"
            />
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleDadChange}
              placeholder="Weight"
            />
            <input
              type="text"
              name="armLength"
              value={formData.armLength}
              onChange={handleDadChange}
              placeholder="Arm Length"
            />
            <input
              type="text"
              name="weapon"
              value={formData.experience}
              onChange={handleDadChange}
              placeholder="Experience Score"
            />

            <Button style={{}} onClick={handleFormSubmit}>
                    BET!#2
            </Button>
          </form>
        </Grid>
      ) : (
        <p>
          You must be logged in to create your dad!
          <Link to="/login">Login</Link> or <Link to="/signup">Sign up!</Link>
        </p>
      )}
     
    </>
  );

*/


};

export default DadCreate;