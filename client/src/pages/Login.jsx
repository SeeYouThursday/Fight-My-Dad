import React, { useState } from 'react';
import loginImage from '../assets/images/login-signup/login.png'; //background for form
// import loginLabel from '../assets/images/login-signup/labels/login-animated.gif'; //label for form
import smallLogin from '../assets/images/login-signup/labels/login300200.gif'; //label for form
import { Grid, TextField, Button, Box } from '@mui/material/';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [formError, setFormError] = useState(false);

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
      setFormError(false);
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      setFormError(true);
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };

  return (
    <Grid
      style={{
        margin: 60,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {' '}
      <form
        style={{
          // backgroundImage: `url(${loginImage})`,
          // backgroundSize: 'contain',
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'center',
          // backgroundColor: '#E8B717',
          height: '60vh', // 100% of the viewport height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'nowrap',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        }}
      >
        <img
          className="loginLogo"
          src="https://cdn.discordapp.com/attachments/551452864615153665/1206631191319543878/fmdasset6.png?ex=65dcb5de&is=65ca40de&hm=5774d5aa5822b7476f01e8de7f42329424139b4066c63b496bd3bc7d63201128&"
          alt="Login"
        />
        {/* <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          ></Box> */}

        {/* //! Refactor using map method! */}
        <TextField
          error={Boolean(formError)}
          helperText={!formError ? '' : 'Try again!'}
          shrink="true"
          spacing={2}
          className="filled-basic loginInput"
          label="Username"
          variant="filled"
          name="username"
          type="username"
          autoFocus={true}
          value={formState.username}
          onChange={handleChange}
          required
          // helperText={'try harder'}
        />
        <TextField
          error={Boolean(formError)}
          helperText={!formError ? '' : 'Try again!'}
          shrink="true"
          className="filled-basic loginInput"
          label="Password"
          variant="filled"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
          required
        />
        <Button onClick={handleFormSubmit}>BET!</Button>
        {/* <Link to={'/signup'}>Sign Up!</Link> //! Does not work */}
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

export default Login;

{/* <Grid
      style={{
        margin: 60,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {' '}
      <form
        style={{
          // backgroundImage: `url(${loginImage})`,
          // backgroundSize: 'contain',
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'center',
          // backgroundColor: '#E8B717',
          height: '60vh', // 100% of the viewport height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'nowrap',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
        }}
      >
        <img
          className="loginLogo"
          src="https://cdn.discordapp.com/attachments/551452864615153665/1206631191319543878/fmdasset6.png?ex=65dcb5de&is=65ca40de&hm=5774d5aa5822b7476f01e8de7f42329424139b4066c63b496bd3bc7d63201128&"
          alt="Login"
        />
        {/* <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          ></Box> */}

        {/* //! Refactor using map method! */}
        // <TextField
        //   error={Boolean(formError)}
        //   helperText={!formError ? '' : 'Try again!'}
        //   shrink="true"
        //   spacing={2}
        //   className="filled-basic loginInput"
        //   label="Username"
        //   variant="filled"
        //   name="username"
        //   type="username"
        //   autoFocus={true}
        //   value={formState.username}
        //   onChange={handleChange}
        //   required
        //   // helperText={'try harder'}
        // />
        // <TextField
        //   error={Boolean(formError)}
        //   helperText={!formError ? '' : 'Try again!'}
        //   shrink="true"
        //   className="filled-basic loginInput"
        //   label="Password"
        //   variant="filled"
        //   name="password"
        //   type="password"
        //   value={formState.password}
        //   onChange={handleChange}
        //   required
        // />
        // <Button onClick={handleFormSubmit}>BET!</Button>
        {/* <Link to={'/signup'}>Sign Up!</Link> //! Does not work */}
    //   </form>
    //   <img
    //     className="asset1"
    //     src="https://cdn.discordapp.com/attachments/551452864615153665/1206408557239476306/fmdasset1.png?ex=65dbe686&is=65c97186&hm=374105d2f333b86832c3887f7edbe3be785e1783185e16c1892444017d45ed6f&"
    //   />
    //   <img
    //     className="asset2"
    //     src="https://cdn.discordapp.com/attachments/551452864615153665/1206416165975621672/fmdasset2.png?ex=65dbed9c&is=65c9789c&hm=59ce95656da56ac45e0aa191816313ee34bc13596dea0145836ac91a920e067d&"
    //   />
    // </Grid> */}