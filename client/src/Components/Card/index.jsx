import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Font Awesome


//Styling The Card
const styles = {
    card: {
        margin: '10px',
        background: '#41a6de'
    },
    pic: {
        height: '250px',
        margin: '10px'
    },
    name: {
        textAlign: 'center',
    },
    joke: {
        fontStyle: 'italic',
        textAlign: 'center',
    },

}

export default function DadCard() {

    return (
        <Card sx={{ maxWidth: 350 }} style={styles.card}>
          <CardMedia
            style={styles.pic}
            image="https://f2.toyhou.se/file/f2-toyhou-se/images/58919609_8VbzGiYepkRyQD3.gif"
            title="Dad img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={styles.name}>
                Placeholder Name
            </Typography>
            <Divider />
            <Typography variant="body2" color="text.secondary" style={styles.joke}>
              Dad Joke
            </Typography>
            <Divider />
            <div>
                <aside>
                    <Typography variant="body2" color="text.secondary">
                        <i class="fas fa-dumbbell"></i>
                    </Typography>
                </aside>
            </div>
            <Typography variant="body2" color="text.secondary">
              Data input from login
                Age, Weight, Height, Wins, Losses, Draws, walkout song, arm length, , proficencies.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Fight</Button>
            <Button size="small">Bet</Button>
          </CardActions>
        </Card>
      );
}

