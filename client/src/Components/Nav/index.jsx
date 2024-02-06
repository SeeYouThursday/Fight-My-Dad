import * as React from 'react';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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
      // Set the width of the drawer
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      // When the drawer is clicked or a key is pressed, close the drawer
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* Map over an array of texts and create a list item for each one */}
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* If the index is even, use the InboxIcon, otherwise use the MailIcon */}
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  return (
    <div>
      <h1>hi</h1>
      {/* Map over an array of anchors and create a button and a drawer for each one */}
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* When the button is clicked, open the drawer */}
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
