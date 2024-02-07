// import Logo from '../assets/images/FIGHTMYDAD.gif';
import '../assets/css/landing.css';
import { ButtonBase, Container, Grid } from '@mui/material/';
import Button from '@mui/material-next/Button';
import Logo from '../assets/images/FIGHTMYDAD.gif';
// import AltLogo from '../assets/images/output-onlinegiftools.gif';
// import StillLogo from '../assets/images/FMDBounce.png';
import FMDLanding from '../assets/images/FMDLanding.png';

const LandingPage = () => {
  // import into App to show on load '/'
  // Giant Fight My Dad img in the middle of page
  return (
    <div
      style={{
        backgroundImage: `url(${FMDLanding}),linear-gradient(to right, #41a6de, #123456)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#41a6de',
        height: '100vh', // 100% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid>
          <Button
            // size="large"
            variant="contained"
            // style={{
            //   backgroundPosition: 'center',
            //   display: 'flex',
            //   overflow: 'hidden',
            //   justifyContent: 'center',
            //   alignItems: 'center',
            // }}
            href="/dashboard"
            // ?? Consider using a Link component from react-router-dom
            //! Change Background color of img
          >
            {/* <img src={Logo} alt="fightmydad logo" /> */}
          </Button>
        </Grid>
        <ButtonBase variant="contained">Bet!</ButtonBase>
      </Container>
    </div>
  );
};

export default LandingPage;
