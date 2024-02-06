import Nav from '../Components/Nav'
import Image from '../Components/Image'

const styles = {
  main: {
    // display: 'flex',
    // margin: '20px',
  },
  mainSection: {
    display: 'flex',
    margin: '20px',
    justifyContent: 'space-evenly'
  },
  user: {
    background: '#142f36',
    height: 'auto',
    padding: '20px',
    borderRadius: '10px',
    color: '#fedb0e',
    fontSize: '40px',
  }
}

// const drawerbar = ''
const Dashboard = () => {
  //Card

  return(
    <main >
      <div style={styles.main}>
        <Nav />
        <section style={styles.mainSection}>
          <Image />
          <h1 style={styles.user}>
            Put Username Here
          </h1>
        </section>
      </div>
      
      {/* PUT DAD COLLECTION HERE */}

      <div>

      </div>
    </main>
  )
};

export default Dashboard;

