import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import CardMedia from '@mui/material/CardMedia';

const styles = {
  stickynote: {
    width: '300px',
    height: '300px',
    rotate: '20deg',
    background: 'var(--primary)',

  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    flexWrap: 'nowrap',
    height: '100vh'
  },
  divider: {
    margin: '40px 0px'
  },
  notetext: {
    fontFamily: 'Permanent Marker',
    textAlign: 'center'
  }
}
const card = (
  <React.Fragment>
    <CardContent margin={10} spacing={0} >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        ERROR
      </Typography>
      <Divider style={styles.divider}/>
      <Typography variant="h5" component="div" style={styles.notetext}>
        Out for Milk - Dad{' '}
      </Typography>
      
    </CardContent>
  </React.Fragment>
);

export default function ErrorPage() {
  return (
    <Box sx={{ minWidth: 275 }} style={styles.container}>
      <Card style={styles.stickynote} variant="outlined">
        {card}
      </Card>
    </Box>
  );
}