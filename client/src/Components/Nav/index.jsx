// Importing necessary components and icons from Material UI and React
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Logout from '../Logout';
import Auth from '../utils/auth';


//styles

const styles = {
  navBG: {
    background: 'var(--dark)',
    color: 'var(--primary)',
    height: '100vh',
  },
  navItems: {
    display: 'flex',
    alignItems: 'space-evenly',
  },
  navBtnContainer: {
    width: '100vw',
    display: 'flex',
    color: 'var(--light)',
    justifyContent: 'flex-end',
  },
  divider: {
    backgroundColor: 'var(--primary)',
    margin: '20px'
  }

};

//Links for the navbar
const back = [
  {
    name: 'Back',
    link: '/dashboard'
  }
]
const links = [
  {
    name: 'Logout',
    link: '/logout',
  },
  {
    name: 'Create Dad',
    link: '/dadcreate',
  },
  {
    name: 'Fight!',
    link: '/fight',
  },
  {
    name: 'Leaderboard',
    link: '/leaderboard',
  },
];

const socialMedia = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/fightmydadofficial/',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/_FightMyDad'
  }
]

// Defining the Nav component
export default function Nav() {

  const loggedIn = Auth.loggedIn();

  if (!loggedIn) {
    return null;
  }

  // State variable for controlling the open/close state of the drawer
  const [state, setState] = React.useState({
    right: false,
  });

  // Function to handle opening and closing of the drawer
  const toggleDrawer = (anchor, open) => (event) => {
    // If the event was a keydown event on the Tab or Shift key, don't do anything
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    // Otherwise, toggle the state of the drawer
    setState({ ...state, [anchor]: open });
  };

  // Function to render the list of items in the drawer
  const list = (anchor) => (
    <Grid
      style={styles.navBG}
      // Set the width of the drawer
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // When the drawer is clicked or a key is pressed, close the drawer
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {back.map((link) => (
          <ListItem
            key={link.name}
            // disablePadding
          >
            <ListItemButton component={Link} to={link.link}>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider style={styles.divider} />
        {links.map((link) => (
          <ListItem
            key={link.name}
            // disablePadding
          >
            <ListItemButton component={Link} to={link.link}>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider style={styles.divider} />
        {socialMedia.map((link) => (
          <ListItem
            key={link.name}
            // disablePadding
          >
            <ListItemButton component={Link} to={link.link}>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  return (
    <div style={styles.navBtnContainer}>
      {/* Map over an array of anchors and create a button and a drawer for each one */}
      {['right'].map((anchor) => (
        <div key={anchor} className="navContainer">
          {/* When the button is clicked, open the drawer */}
            <a
              onClick={toggleDrawer(anchor, true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              
            >
              <img className='navicon' src='https://cdn.discordapp.com/attachments/551452864615153665/1207094537512812584/fmdasset9.png?ex=65de6564&is=65cbf064&hm=165901f8634934db6416e6d3e374663096c8d5a79e5e2a18b4aa057fd26290b7&'/>

            </a>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            // When the drawer requests to be closed, close it
            onClose={toggleDrawer(anchor, false)}
          >
            {/* Render the list of items in the drawer */}
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
}