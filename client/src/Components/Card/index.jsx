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
        background: 'var(--secondary)',
        // width: '40vw',
        // height: '90vh',

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

export default function DadCard({ formData}) {

    return (
        <Card sx={{ maxWidth: 350 }} style={styles.card}>
          <CardMedia
            style={styles.pic}
            image="https://cdn.discordapp.com/attachments/551452864615153665/1205332455389925406/dadicon6.png?ex=65d7fc53&is=65c58753&hm=54e66318eadba3da199fa7f676cf1332a5bc31402957905298a0d7b671a3e43f&"
            title="Dad img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={styles.name}>
                {formData.dadName}
            </Typography>
            <Divider />
            <Typography variant="body2" color="text.secondary" style={styles.joke}>
              Dad Joke: {formData.dadJoke}
            </Typography>
            <Divider />
            <div style={styles.bottom}>
                <aside style={styles.half}>
                    <Typography variant="body2" color="text.secondary">
                        <i className="fas fa-dumbbell">Weight: {formData.weight}</i>
                        <span> | </span>
                        <i className="fas fa-dumbbell">Height: {formData.armLength}</i>
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                        <i className="fas fa-dumbbell">Experience: {formData.experience}</i>

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
          {/* <CardActions>
            <Button size="small">Fight</Button>
            <Button size="small">Bet</Button>
          </CardActions> */}
        </Card>
      );
}

