import React, { useState } from 'react';
// import Link from 'react-router-dom';
import loginImage from '../assets/images/login.png';
import { Grid, TextField, Button } from '@mui/material/';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutationsStandIn';
import { useMutation } from '@apollo/client';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      //! change login based on what we have in our mutations
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Grid>
      <div
        style={{
          backgroundImage: `url(${loginImage})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '100vh', // This sets the height to the full height of the viewport
        }}
      >
        <form
          style={{
            backgroundImage: `url(${loginImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh', // 100% of the viewport height
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'column',
          }}
        >
          <h2>Log In</h2>
          {/* //! Refactor using map method! */}
          <TextField
            id="filled-basic"
            label="Username - i.e. PoopyPantsMcGee"
            variant="filled"
            autoFocus="true"
            defaultValue={username}
          />
          <TextField
            id="filled-basic"
            label="Password"
            variant="filled"
            defaultValue={password}
            onChange={() => handleChange()}
          />
          <Button onSubmit={handleFormSubmit}>BET!</Button>
          {/* <Link to={'/signup'}>Sign Up!</Link> //! Does not work */}
        </form>
      </div>
    </Grid>
  );
};

export default Login;
