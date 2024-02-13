import Nav from "../Components/Nav";
import Image from "../Components/Image";
// import DadCard from "../Components/Card";
import Stat from "../Components/Stat";
import Auth from "../utils/auth.js";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import LoginErr from '../Components/LoginErr'

const styles = {
  //   display: 'flex',
  //   margin: '40px',
  // },
  mainSection: {
    display: "flex",
    margin: "20px",
    justifyContent: "space-around",
  },
  user: {
    // background: "#142f36",
    height: "10vh",
    padding: "20px",
    borderRadius: "10px",
    fontFamily: "Permanent Marker",
    color: "var(--secondary)",
    fontSize: "40px",
    alignSelf: "baseline",
  },
  divider: {
    background: "var(--dark)",
    padding: "10px",
    borderRadius: "10px",
  },
  dads: {
    background: "#142f36",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
  container: {
    height: '50vh'
  }
};

// const drawerbar = ''
const Dashboard = () => {
  //Card
  const { loading, data } = useQuery(QUERY_ME);

  return (
    // moved main so site can handle viewing Stat page without being logged in
    <>
      {Auth.loggedIn() ? (
        <main>
          
          <div style={styles.container}>
          <img className="asset4" src='https://cdn.discordapp.com/attachments/551452864615153665/1206788132087799878/fmdasset4.png?ex=65dd4807&is=65cad307&hm=c84bf7f0bab21c36af8737aea3075898995caba24fe97d6f9727c05616e5fab4&' />
            <section style={styles.mainSection}>
              <div>
                {/* <h1 style={styles.user}>Hey, Weewee!</h1> */}
                {/* <h3>Hey, {data.me.firstName} {data.me.lastName}!</h3> */}
              </div>
            </section>
          </div>
          {/* <div style={styles.divider}></div> */}
          {/* <DadCard /> <DadCard /> */}

          <Stat />
        </main>
       ) : (
        <LoginErr />
      )}
    </>
  );
};

export default Dashboard;
