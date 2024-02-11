import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Font Awesome

//USE THIS CARD FOR EVERY DISPLAY OF DADS


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
    half: {
        width: '50%'
    },
    bottom: {
        display: 'flex'
    },
    cardBtn: {
        backgroundColor: '#0alc20'
    }

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
            <div style={styles.bottom}>
                <aside style={styles.half}>
                    <Typography variant="body2" color="text.secondary">
                        <i className="fas fa-dumbbell">Weight</i>
                        <span> | </span>
                        <i className="fas fa-dumbbell">Height</i>
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                        <i className="fas fa-dumbbell">Experience</i>

                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                        <i className="fas fa-dumbbell">Weight</i>

                    </Typography>
                    <Divider />
                </aside>
                <div>
                    <button style={styles.cardBtn}>
                        Theme
                    </button>
                    <Typography variant="body2" color="text.secondary">
                        Wins | Losses
                    </Typography>
                </div>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small">Fight</Button>
            <Button size="small">Bet</Button>
          </CardActions>
        </Card>
      );
}

