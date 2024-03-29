//NECESSARY IMPORTS
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material/';

//LOCAL IMPORTS
import LoginErr from '../Components/LoginErr';
import { DashStat } from '../Components/Stat';
// import DadCard from "../Components/Card";

//QUERIES, MUTATIONS, + ETC
import Auth from '../utils/auth.js';
import { QUERY_DADS } from '../utils/queries';
import { REMOVE_DAD } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

const styles = {
  mainSection: {
    display: 'flex',
    margin: '20px',
    justifyContent: 'flex-end',
  },
  user: {
    height: 'auto',
    padding: '10px',
    borderRadius: '10px',
    fontFamily: 'Permanent Marker',
    color: 'var(--light)',
    fontSize: '40px',
    alignSelf: 'center',
    textAlign: 'center',
  },
  user2: {
    height: 'auto',
    padding: '5px',
    letterSpacing: '3px',
    borderRadius: '10px',
    fontFamily: 'Permanent Marker',
    color: 'var(--light)',
    fontSize: '20px',
    alignSelf: 'center',
    textAlign: 'center',
  },
  divider: {
    background: 'var(--dark)',
    padding: '10px',
    borderRadius: '10px',
  },
  dads: {
    background: '#142f36',
    padding: '10px',
    borderRadius: '10px',
    margin: '20px',
  },
  container: {
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    background: 'var(--primary)',
    borderRadius: '5px',
    width: '80vw',
    alignItems: 'center',
  },
  userContainer: {
    margin: '1vw 10vw',
    background: 'var(--darkest)',
    borderRadius: '5px',
    width: 'auto',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
};

const Dashboard = () => {
  const [selectedDelete, setSelectedDelete] = useState('');
  const [formError, setFormError] = useState(false);
  const [myDads, setMyDad] = useState([]);
  const [deleteDad] = useMutation(REMOVE_DAD);
  const { data: allData } = useQuery(QUERY_DADS);

  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me;

  if (loading || !userData) {
    return <h2>LOADING...</h2>;
  }

  // const dadArray = allData.getAllDads.map((dad) => data.me._id === dad.userId)

  const handleDeletedDad = (event) => {
    const updatedDads = allData?.getAllDads.find(
      (dad) => dad._id !== event.target.value && data.me._id === dad.userId
    );
    setMyDad(updatedDads);
  };

  const handleDelete = () => {
    try {
      deleteDad({
        variables: {
          dadId: selectedDelete,
        },
      });
    } catch (err) {
      setFormError(true);
    }
  };

  const handleDeleteChange = (event) => {
    setSelectedDelete(event.target.value);
    // const selectedDelete = allData?.getAllDads.find(
    //   (dad) => dad._id === event.target.value && data.me._id === dad.userId
    // );
  };

  return (
    // moved main so site can handle viewing Stat page without being logged in
    <>
      {Auth.loggedIn() ? (
        <main style={styles.body}>
          <div style={styles.container}>
            <section style={styles.mainSection}>
              <div>
                <div style={styles.userContainer}>
                  <h1 style={styles.user}>Welcome to Fight My Dad!</h1>
                  <h3 style={styles.user2}>
                    Hey, {userData.firstName} {userData.lastName}!
                  </h3>
                </div>
                <div style={styles.userContainer}>
                  <div>
                    <h2 style={styles.user2}>Wanna Delete your Dad?</h2>
                  </div>
                  <form style={styles.body} onSubmit={handleDeletedDad}>
                    <FormControl style={styles.body} fullWidth>
                      <InputLabel id="select-dad">
                        Select dad to delete!
                      </InputLabel>
                      <Select
                        error={Boolean(formError)}
                        helperText={!formError ? '' : 'No Dads to Delete'}
                        labelId="select-delete"
                        id="select-delete-dropdown"
                        value={selectedDelete}
                        label="Dad"
                        onChange={handleDeleteChange}
                      >
                        {allData?.getAllDads
                          .filter((dad) => data.me._id === dad.userId)
                          .map((dad, index) => (
                            <MenuItem key={index} value={dad._id}>
                              {dad.dadName}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>

                    {/* Delete Dad Functionality */}
                    {<Button onClick={handleDelete}>Delete Dad</Button>}
                  </form>
                </div>
              </div>
            </section>
          </div>
          {/* <DadCard /> <DadCard /> */}

          {/* <DashStat /> */}
        </main>
      ) : (
        <LoginErr />
      )}
    </>
  );
};

export default Dashboard;
