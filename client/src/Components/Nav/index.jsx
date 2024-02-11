// Importing necessary components and icons from Material UI and React
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//styles

const styles = {
  navBG: {
    background: '#142f36',
    color: '#fedb0e',
    height: '100vh',
  },
  navItems: {
    display: 'flex',
    alignItems: 'space-evenly',
  },
};

//Links for the navbar

const links = [
  {
    name: 'Logout',
    link: '/',
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

// Defining the Nav component
export default function Nav() {
  // State variable for controlling the open/close state of the drawer
  const [state, setState] = React.useState({
    left: false,
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
      </List>
    </Grid>
  );

  return (
    <div style={{ backgroundColor: '#41a6de' }}>
      {/* Map over an array of anchors and create a button and a drawer for each one */}
      <Divider />
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* When the button is clicked, open the drawer */}
            <IconButton 
              onClick={toggleDrawer(anchor, true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            // When the drawer requests to be closed, close it
            onClose={toggleDrawer(anchor, false)}
          >
            {/* Render the list of items in the drawer */}
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
