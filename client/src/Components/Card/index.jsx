import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function MediaCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="placeholder.jpg"
          title="Dad img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Data input from login
            Name, Age, Weight, Height, Wins, Losses, Draws, walkout song, arm length, dad joke, proficencies.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Fight</Button>
          <Button size="small">Bet</Button>
        </CardActions>
      </Card>
    );
  }

export default function Card() {
    
    return(
        <div className='card'>
            {/* TO DO: CREATE CARD HERE */}
            
        </div>
    )
}

