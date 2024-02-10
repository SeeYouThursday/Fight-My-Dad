import loginImage from '../assets/images/login-signup/login.png';
// import Logo from '../assets/images/FIGHTMYDAD.gif';
import signUpImage from '../assets/images/login-signup/labels/signup.png';

import { Grid, TextField, Button } from '@mui/material/';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [userFormData, setUserFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('hi', userFormData);

    try {
      const response = await addUser({
        variables: { ...userFormData },
      });
      console.log(response, 'response');
      Auth.login(response.data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

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
        {/* {InputFields} */}
        <TextField
          id="filled-basic"
          label="First Name"
          variant="filled"
          margin="none"
          name="firstName"
          defaultValue={userFormData.firstName}
          onChange={handleInputChange}
        />
        <TextField
          id="filled-basic"
          label="Last Name"
          variant="filled"
          margin="none"
          name="lastName"
          defaultValue={userFormData.lastName}
          onChange={handleInputChange}
        />
        <TextField
          id="filled-basic"
          label="Username"
          variant="filled"
          margin="none"
          name="username"
          defaultValue={userFormData.username}
          onChange={handleInputChange}
        />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          margin="none"
          name="password"
          defaultValue={userFormData.password}
          onChange={handleInputChange}
        />
        <Button style={{}} onClick={handleFormSubmit}>
          BET!
        </Button>
      </form>
    </Grid>
  );
};

export default Signup;
