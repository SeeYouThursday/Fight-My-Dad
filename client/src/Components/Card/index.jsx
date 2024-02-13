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
        display: 'flex',
        flexDirection: 'column',

    },
    pic: {
        height: '300px',
        margin: '10px',

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
    rightContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    winloss: {
        
    }

}

export function CreateCard({ formData }) {

    return (
        <Card sx={{ width: 350 }} style={styles.card}>
          {/* <CardMedia
            style={styles.pic}
            image={formData.icon}
            title="Dad img"
          /> */}
          <img src={formData.icon} style={styles.pic}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={styles.name}>
                {formData.dadName}
            </Typography>
            <Typography gutterBottom variant="body1" color='text.secondary' component="div" style={styles.name}>
                {formData.nickname}
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
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                        <i className="fas fa-dumbbell">Experience: {formData.experience}</i>
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                    <i className="fas fa-dumbbell">Arm Length: {formData.armLength}</i>
                    </Typography>
                    <Divider />
                </aside>
                <div style={styles.rightContainer}>
                    {/* <button style={styles.cardBtn} href={formData.theme}>
                        Theme
                    </button>   */}
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

export function FightCard(props) {

    return (
        <Card sx={{ width: 350 }} style={styles.card}>
          <img src={props.selectedMyDad.icon} style={styles.pic}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={styles.name}>

            {props.selectedMyDad.dadName}

            </Typography>
            <Typography gutterBottom variant="body1" color='text.secondary' component="div" style={styles.name}>
                {props.selectedMyDad.nickname}
            </Typography>
            <Divider />
            <Typography variant="body2" color="text.secondary" style={styles.joke}>
              Dad Joke: {props.selectedMyDad.dadJoke}
            </Typography>
            <Divider />
            <div style={styles.bottom}>
                <aside style={styles.half}>
                    <Typography variant="body2" color="text.secondary">
                        <i className="fas fa-dumbbell">Weight: {props.selectedMyDad.weight}</i>
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                        <i className="fas fa-dumbbell">Experience: {props.selectedMyDad.experience}</i>
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                    <i className="fas fa-dumbbell">Arm Length: {props.selectedMyDad.armLength}</i>
                    </Typography>
                    <Divider />
                </aside>
                <div style={styles.rightContainer}>
                    {/* <button style={styles.cardBtn} href=''>
                        Theme
                    </button> */}
                    
                </div>
            </div>
            <Typography style={styles.winloss} variant="h5" color="text.secondary">
                        Wins: {props.selectedMyDad.winNum}
                        <span> | </span> 
                        Losses: {props.selectedMyDad.lossNum}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Fight</Button>
            <Button size="small">Bet</Button>
          </CardActions> */}
        </Card>
      );
}

export function FightCard2(props) {

    return (
        <Card sx={{ width: 350 }} style={styles.card}>
          <img src={props.selectedOpponent.icon} style={styles.pic}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={styles.name}>
            {props.selectedOpponent.dadName}
            </Typography>
            <Typography gutterBottom variant="body1" color='text.secondary' component="div" style={styles.name}>
              {props.selectedOpponent.nickname}
            </Typography>
            <Divider />
            <Typography variant="body2" color="text.secondary" style={styles.joke}>
              Dad Joke: {props.selectedOpponent.dadJoke}
            </Typography>
            <Divider />
            <div style={styles.bottom}>
                <aside style={styles.half}>
                    <Typography variant="body2" color="text.secondary">
                        <i className="fas fa-dumbbell">Weight: {props.selectedOpponent.weight}</i>
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                        <i className="fas fa-dumbbell">Experience: {props.selectedOpponent.experience}</i>
                    </Typography>
                    <Divider />
                    <Typography variant="body2" color="text.secondary">
                    <i className="fas fa-dumbbell">Arm Length: {props.selectedOpponent.armLength}</i>
                    </Typography>
                    <Divider />
                </aside>
                <div style={styles.rightContainer}>
                    {/* <button style={styles.cardBtn} href=''>
                        Theme
                    </button> */}
                    
                </div>
            </div>
            <Typography style={styles.winloss} variant="h5" color="text.secondary">
                        Wins: {props.selectedOpponent.winNum}
                        <span> | </span> 
                        Losses: {props.selectedOpponent.lossNum}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Fight</Button>
            <Button size="small">Bet</Button>
          </CardActions> */}
        </Card>
      );
}