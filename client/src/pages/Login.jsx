import React, { useState } from 'react';
import loginImage from '../assets/images/login-signup/login.png'; //background for form
// import loginLabel from '../assets/images/login-signup/labels/login-animated.gif'; //label for form
import smallLogin from '../assets/images/login-signup/labels/login300200.gif'; //label for form
import { Grid, TextField, Button } from '@mui/material/';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);

    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
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
            // backgroundImage: `url(${loginImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'var(--darkest)',
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
            className="filled-basic"
            label="Username"
            variant="filled"
            name='username'
            type='username'
            autoFocus={true}
            value={formState.username}
            onChange={handleChange}
          />
          <TextField
            shrink="true"
            className="filled-basic"
            label="Password"
            variant="filled"
            name='password'
            type='password'
            value={formState.password}
            onChange={handleChange}
          />
          <Button onClick={handleFormSubmit}>BET!</Button>
          {/* <Link to={'/signup'}>Sign Up!</Link> //! Does not work */}
        </form>
      </div>
    </Grid>
  );
};

export default Login;
