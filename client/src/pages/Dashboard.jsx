import Nav from '../Components/Nav';
import Image from '../Components/Image';
// import DadCard from "../Components/Card";
import { DashStat } from '../Components/Stat';
import Auth from '../utils/auth.js';
import { useQuery, useMutation } from '@apollo/client';
// import { useQuery } from "@apollo/client";
import { QUERY_ME } from '../utils/queries';
import LoginErr from '../Components/LoginErr';
import React, { useState, useEffect } from 'react';
import { REMOVE_DAD } from '../utils/mutations';
import { QUERY_DADS } from '../utils/queries';

import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material/';

const styles = {
  //   display: 'flex',
  //   margin: '40px',
  // },
  mainSection: {
    display: 'flex',
    margin: '20px',
    justifyContent: 'flex-end',
  },
  user: {
    // background: "var(--darkest)",
    height: 'auto',
    padding: '10px',
    borderRadius: '10px',
    fontFamily: 'Permanent Marker',
    color: 'var(--light)',
    fontSize: '40px',
    alignSelf: 'baseline',
    textAlign: 'center',
  },
  user2: {
    // background: "var(--darkest)",
    height: 'auto',
    padding: '5px',
    letterSpacing: '3px',
    borderRadius: '10px',
    fontFamily: 'Permanent Marker',
    color: 'var(--light)',
    fontSize: '20px',
    alignSelf: 'baseline',
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
    height: '50vh',
  },
  userContainer: {
    margin: '1vw 10vw',
    background: 'var(--darkest)',
    borderRadius: '5px',
    width: 'auto',
    padding: '10px',
  },
};

// const drawerbar = ''
const Dashboard = () => {
  const [selectedDelete, setSelectedDelete] = useState('');
  const [deleteDad] = useMutation(REMOVE_DAD);
  const { data: allData } = useQuery(QUERY_DADS);

  //Card
  // const { loading, data } = useQuery(QUERY_ME);
  // const userData = data && data.me;

  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me;

  if (loading || !userData) {
    return <h2>LOADING...</h2>;
  } else {
    console.log(userData);
  }

  const handleDeleteChange = (event) => {
    setSelectedDelete(event.target.value);
    const selectedDelete = allData?.getAllDads.find(
      (dad) => dad._id === event.target.value && data.me._id === dad.userId
    );
  };

  return (
    // moved main so site can handle viewing Stat page without being logged in
    <>
      {Auth.loggedIn() ? (
        <main>
          <div style={styles.container}>
            <section style={styles.mainSection}>
              {/* <img
                className="asset4"
                src="https://cdn.discordapp.com/attachments/551452864615153665/1206788132087799878/fmdasset4.png?ex=65dd4807&is=65cad307&hm=c84bf7f0bab21c36af8737aea3075898995caba24fe97d6f9727c05616e5fab4&"
                alt='A Stick Figure which says "My dad can beat up your dad!"'
              /> */}
              <div>
                <div style={styles.userContainer}>
                  <h1 style={styles.user}>Welcome to Fight My Dad!</h1>
                  <h3>
                    Hey, {userData.firstName} {userData.lastName}!
                  </h3>
                </div>
                <div style={styles.userContainer}>
                  <div>
                    <h2 style={styles.user2}>Wanna Delete your Dad?</h2>
                    {/* <h3>
                      Hey, {userData.firstName} {userData.lastName}!
                    </h3> */}
                  </div>
                  <FormControl fullWidth>
                    <InputLabel id="select-dad">
                      Select dad to delete!
                    </InputLabel>
                    <Select
                      labelId="select-delete"
                      id="select-delete-dropdown"
                      value={selectedDelete}
                      label="Dad"
                      onChange={handleDeleteChange}
                    >
                      {allData.getAllDads
                        .filter((dad) => data.me._id === dad.userId)
                        .map((dad, index) => (
                          <MenuItem key={index} value={dad._id}>
                            {dad.dadName}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  {/* <Button
                    onClick={() => {
                      deleteDad({
                        variables: {
                          dadId: selectedDelete,
                        },
                      })
                        .then((res) => {
                          console.log('The dad has been deleted:', res);
                        })
                        .catch((err) => {
                          console.error('Error deleting dad:', err);
                        });
                    }}
                  >
                    Delete Dad
                  </Button> */}
                  <Button
                    onClick={() => {
                      deleteDad({
                        variables: {
                          dadId: selectedDelete, 
                        },
                      })
                        .then((res) => {
                          console.log('The dad has been deleted:', res);
                        })
                        .catch((err) => {
                          console.error('Error deleting dad:', err);
                        });
                    }}
                  >
                    Delete Dad
                  </Button>
                </div>
              </div>
            </section>
          </div>
          {/* <div style={styles.divider}></div> */}
          {/* <DadCard /> <DadCard /> */}

          {/* <DashStat /> */}
          {/* <img
            className="asset5"
            src="https://cdn.discordapp.com/attachments/551452864615153665/1206833789406421022/fmdasset4.png?ex=65dd728d&is=65cafd8d&hm=c1022d2f0c87172a58cf08dd14adf95942f56524284a935ea0582b6cdca72ec4&"
            alt='A Stick Figure which says "My dad can beat up your dad!"'
          /> */}
        </main>
      ) : (
        <LoginErr />
      )}
    </>
  );
};

export default Dashboard;
