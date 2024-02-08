import loginImage from '../assets/images/login-signup/login.png';
// import Logo from '../assets/images/FIGHTMYDAD.gif';
import signUpImage from '../assets/images/login-signup/labels/signup.png';

import { Grid, TextField, Button } from '@mui/material/';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const labels = ['First Name', 'Last Name', 'Username', 'Password'];

  const InputFields = labels.map((label, index) => {
    return (
      <TextField
        key={index}
        id="filled-basic"
        label={label}
        variant="filled"
        margin="none"
        name={label}
        onChange={handleChange}
      />
    );
  });

  return (
    <Grid>
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
          src={signUpImage}
          alt="Sign Up"
          height={'30%'}
          width={'30%'}
          style={{ overflow: 'hidden' }}
        />
        {InputFields}
        <Button style={{}} onClick={handleFormSubmit}>
          BET!
        </Button>
      </form>
    </Grid>
  );
};

export default Signup;
