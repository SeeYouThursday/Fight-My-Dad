import React, { useState } from 'react';
import loginImage from '../assets/images/login.png'; //background for form
import loginLabel from '../assets/images/labels/login-animated.gif'; //label for form
import smallLogin from '../assets/images/labels/login300200.gif'; //label for form
import { Grid, TextField, Button } from '@mui/material/';
// import Auth from '../utils/auth';
// import { LOGIN_USER } from '../utils/mutationsStandIn';
// import { useMutation } from '@apollo/client';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  // const [login] = useMutation(LOGIN_USER);

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
      // const { data } = await login({
      //   variables: { ...formState },
      // });
      //! change login based on what we have in our mutations
      // Auth.login(data.login.token);
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // This sets the height to the full height of the viewport
        }}
      >
        <form
          style={{
            backgroundImage: `url(${loginImage})`,
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
          }}
        >
          <img
            src={smallLogin}
            alt="Login label"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              margin: '0 auto',
              padding: '0 auto',
            }}
          />{' '}
          {/* <img
            src={loginLabel}
            alt="Login label"
            // height={'30%'}
            // width={'40%'}
          /> */}
          {/* current img is sized to look best on mobile //Consider making a breakpoint  */}
          {/* //! Refactor using map method! */}
          <TextField
            shrink="true"
            spacing={2}
            id="filled-basic"
            label="Username"
            variant="filled"
            autoFocus={true}
            // defaultValue={username}
            onChange={handleChange}
          />
          <TextField
            shrink="true"
            id="filled-basic"
            label="Password"
            variant="filled"
            // defaultValue={password}
            onChange={handleChange}
          />
          <Button onSubmit={handleFormSubmit}>BET!</Button>
          {/* <Link to={'/signup'}>Sign Up!</Link> //! Does not work */}
        </form>
      </div>
    </Grid>
  );
};

export default Login;
