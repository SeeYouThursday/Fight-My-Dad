import loginImage from '../assets/images/login-signup/login.png';
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
  const [formError, setFormError] = useState(false);

  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setFormError(false);
      const response = await addUser({
        variables: { ...userFormData },
      });
      console.log(response, 'response');
      Auth.login(response.data.addUser.token);
    } catch (err) {
      setFormError(true);
      console.error(err);
    }
  };

  return (
    <Grid
      style={{
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
        <img
          className="loginLogo"
          src="src/assets/images/ComponentAssets/fmdassetsignup.png"
          alt="Sign Up"
        />
        {/* InputFields */}
        <TextField
          required
          error={Boolean(formError)}
          helperText={!formError ? '' : 'Try again!'}
          className="loginInput"
          label="First Name"
          variant="filled"
          margin="none"
          name="firstName"
          defaultValue={userFormData.firstName}
          onChange={handleInputChange}
        />
        <TextField
          required
          error={Boolean(formError)}
          helperText={!formError ? '' : 'Try again!'}
          className="loginInput"
          label="Last Name"
          variant="filled"
          margin="none"
          name="lastName"
          defaultValue={userFormData.lastName}
          onChange={handleInputChange}
        />
        <TextField
          required
          error={Boolean(formError)}
          helperText={!formError ? '' : 'Try again!'}
          className="loginInput"
          label="Username"
          variant="filled"
          margin="none"
          name="username"
          defaultValue={userFormData.username}
          onChange={handleInputChange}
        />
        <TextField
          required
          error={Boolean(formError)}
          helperText={!formError ? '' : 'Try again!'}
          className="loginInput"
          label="Password"
          variant="filled"
          margin="none"
          name="password"
          type="password"
          defaultValue={userFormData.password}
          onChange={handleInputChange}
        />
        <Button style={{}} onClick={handleFormSubmit}>
          BET!
        </Button>
      </form>
      <img
        className="asset1"
        src="src/assets/images/ComponentAssets/fmdassetbottom.png"
      />
      <img
        className="asset2"
        src="src/assets/images/ComponentAssets/fmdassettop.png"
      />
    </Grid>
  );
};

export default Signup;
