import Nav from "../Components/Nav";
import Image from "../Components/Image";
import DadCard from "../Components/Card";
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
    justifyContent: "space-evenly",
  },
  user: {
    background: "#142f36",
    height: "10vh",
    padding: "20px",
    borderRadius: "10px",
    color: "#fedb0e",
    fontSize: "40px",
    alignSelf: "baseline",
  },
  divider: {
    background: "#142f36",
    padding: "10px",
    borderRadius: "10px",
  },
  dads: {
    background: "#142f36",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
};

// const drawerbar = ''
const Dashboard = (me) => {
  //Card
  const { loading, data } = useQuery(QUERY_ME);

  return (
    // moved main so site can handle viewing Stat page without being logged in
    <>
      {Auth.loggedIn() ? (
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
          <DadCard />
          <Stat />
        </main>
       ) : (
        <LoginErr />
      )}
    </>
  );
};

export default Dashboard;
