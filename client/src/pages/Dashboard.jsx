import Nav from '../Components/Nav';
import Image from '../Components/Image';
import DadCard from '../Components/Card';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries'

const styles = {
  //   display: 'flex',
  //   margin: '40px',
  // },
  mainSection: {
    display: 'flex',
    margin: '20px',
    justifyContent: 'space-evenly',
  },
  user: {
    background: '#142f36',
    height: '10vh',
    padding: '20px',
    borderRadius: '10px',
    color: '#fedb0e',
    fontSize: '40px',
    alignSelf: 'baseline',
  },
  divider: {
    background: '#142f36',
    padding: '10px',
    borderRadius: '10px',
  },
  dads: {
    background: '#142f36',
    padding: '10px',
    borderRadius: '10px',
    margin: '20px',
  },
};

// const drawerbar = ''
const Dashboard = (me) => {
  //Card
  const { loading, data } = useQuery(QUERY_ME)

  return (
    <main>
      <div style={styles.container}>
        <section style={styles.mainSection}>
          <Image />
          <div>
            <h1 style={styles.user}>{me.username}</h1>
            <h3>Hey, {me.firstName} {me.lastName}!</h3>
          </div>
          
        </section>
      </div>

      <div style={styles.divider}></div>

      {/* PUT DAD COLLECTION HERE */}


      <DadCard />
        {/* {dads.map((dad) => (
          <Stat />
        ))} */}


    </main>
  );
};

export default Dashboard;
