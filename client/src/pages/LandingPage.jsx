import '../assets/css/landing.css';
import { Grid } from '@mui/material/';
import Button from '@mui/material-next/Button';

const styles = {
  btn: {
    //   fontSize: '50px',
    fontFamily: 'Permanent Marker',
    backgroundColor: 'var(--primary)',
    padding: '20px',
    borderRadius: '10px',
    // minWidth: '300px',
    margin: '3vw',
  },
  bigContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
  },
};

const LandingPage = () => {
  // Giant Fight My Dad img in the middle of page
  return (
    <div style={styles.bigContainer}>
      <img
        className="landingimg"
        src="src/assets/images/ComponentAssets/fightmydadlogo.png"
        alt="Fight My Dad!"
      />
      <div>
        <Grid className="bigContainer">
          <Button variant="contained" style={styles.btn} href="/login">
            Login!
          </Button>
          <Button variant="contained" style={styles.btn} href="/signup">
            Sign Up!
          </Button>
        </Grid>
      </div>
      <img
        className="asset1"
        src="src/assets/images/ComponentAssets/fmdassetbottom.png"
      />
      <img
        className="asset2"
        src="src/assets/images/ComponentAssets/fmdassettop.png"
      />
    </div>
  );
};

export default LandingPage;
