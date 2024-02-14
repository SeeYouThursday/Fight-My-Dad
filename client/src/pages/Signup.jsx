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
          // backgroundImage: `url(${loginImage})`,
          // backgroundSize: 'contain',
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'center',
          // backgroundColor: '#41a6de',
          height: '60vh', // 100% of the viewport height
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'nowrap',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        }}
      >
        {/* <img
          src={signUpImage}
          alt="Sign Up"
          height={'30%'}
          width={'30%'}
          style={{ overflow: 'hidden' }}
        /> */}
        <img
          className="loginLogo"
          src="https://cdn.discordapp.com/attachments/551452864615153665/1206632850254860288/fmdasset7.png?ex=65dcb769&is=65ca4269&hm=4d3bfd646144909d23e19bf3b2271ffd3125eb8e4b9ab55bb04e14358ec16c39&"
          alt="Sign Up"
        />

        {/* {InputFields} */}
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
          className="loginInput"
          id="filled-basic"
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
        src="https://cdn.discordapp.com/attachments/551452864615153665/1206408557239476306/fmdasset1.png?ex=65dbe686&is=65c97186&hm=374105d2f333b86832c3887f7edbe3be785e1783185e16c1892444017d45ed6f&"
      />
      <img
        className="asset2"
        src="https://cdn.discordapp.com/attachments/551452864615153665/1206416165975621672/fmdasset2.png?ex=65dbed9c&is=65c9789c&hm=59ce95656da56ac45e0aa191816313ee34bc13596dea0145836ac91a920e067d&"
      />
    </Grid>
  );
};

export default Signup;
