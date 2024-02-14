// import Logo from '../assets/images/FIGHTMYDAD.gif';
import '../assets/css/landing.css';
import { ButtonBase, Container, Grid } from '@mui/material/';
import Button from '@mui/material-next/Button';
// import FMDLanding from '../assets/images/FMDLanding.png';

// import Image from '../Components/Image'

const styles = {
  btn: {
    fontSize: '50px',
    fontFamily: 'Permanent Marker',
    backgroundColor: 'var(--primary)',
    padding: '20px',
    borderRadius: '10px',
    minWidth: '300px',
    margin: '5vw',
  },
  // container: {
  //   display: 'flex',
  //   justifyContent: 'space-evenly'
  // },
  bigContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}
const LandingPage = () => {
  // import into App to show on load '/'
  // Giant Fight My Dad img in the middle of page
  return (
    <div style={styles.bigContainer}>
    <img className='landingimg' src='https://cdn.discordapp.com/attachments/1205909717961015296/1206997441891672195/fmdasset1.png?ex=65de0af7&is=65cb95f7&hm=f4641fed1bc62fb58c3d71ebc0aa7e0eea391940d6231b59e7ccd63fe3157cd7&' alt='Fight My Dad!'/>
    <div>

      <Container className='landingContainer'>
        <ButtonBase variant="contained" style={styles.btn} href="/login">Login!</ButtonBase>
        <ButtonBase variant="contained" style={styles.btn} href="/signup">Sign Up!</ButtonBase>
      </Container>
    </div>
    <img className='asset1' src='https://cdn.discordapp.com/attachments/551452864615153665/1206408557239476306/fmdasset1.png?ex=65dbe686&is=65c97186&hm=374105d2f333b86832c3887f7edbe3be785e1783185e16c1892444017d45ed6f&' />
    <img className='asset2' src='https://cdn.discordapp.com/attachments/551452864615153665/1206416165975621672/fmdasset2.png?ex=65dbed9c&is=65c9789c&hm=59ce95656da56ac45e0aa191816313ee34bc13596dea0145836ac91a920e067d&' />
    </div>
    
  );
};

export default LandingPage;

{/* <Grid>
<Button */}
  // size="large"
  // variant="contained"
  // style={{
  //   backgroundPosition: 'center',
  //   display: 'flex',
  //   overflow: 'hidden',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }}
  // href="/dashboard"
  // ?? Consider using a Link component from react-router-dom
  //! Change Background color of img
// >
  {/* <img src={Logo} alt="fightmydad logo" /> */}
// </Button>
// </Grid>