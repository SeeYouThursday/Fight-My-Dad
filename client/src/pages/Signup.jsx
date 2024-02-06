import loginImage from '../assets/images/login.png';
import Logo from '../assets/images/FIGHTMYDAD.gif';
import { Grid, TextField, Button } from '@mui/material/';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutationsStandIn';
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
        margin="dense"
        name={label}
        onChange={handleChange}
      />
    );
  });

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
          <h2>Sign In</h2>
          {InputFields}
          <Button
            style={{ backgroundImage: `url(${Logo})` }}
            onClick={handleFormSubmit}
          >
            BET!
          </Button>
        </form>
      </div>
    </Grid>
  );
};

export default Signup;
