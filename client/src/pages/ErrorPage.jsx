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
    background: '#fedb0e',

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
        {/* <img src="https://c.tenor.com/aL5iB_tJe8YAAAAC/tenor.gif"></img> */}
      </Typography>
      
    </CardContent>
    <CardActions>{/* <Button size="small">Learn More</Button> */}</CardActions>
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

//! Card with media option
// export function ImgMediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
