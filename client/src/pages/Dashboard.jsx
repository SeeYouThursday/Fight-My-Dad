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
          <img className="asset4" src='https://cdn.discordapp.com/attachments/551452864615153665/1206442984598409256/fmdasset4.png?ex=65dc0696&is=65c99196&hm=a0187464a98887499a846e3287127b71ea340013b50b94d60363ce916e01983b&' />
            <section style={styles.mainSection}>
              <img src='https://cdn.discordapp.com/attachments/551452864615153665/1206443566445101096/fmdasset5.png?ex=65dc0720&is=65c99220&hm=be1e216e3b553b561acec0fbd5d4f6259e4fae240cd90da486d928dcb8813b21&' />
              <div>
                <h1 style={styles.user}>Hey, Weewee!</h1>
                {/* <h3>Hey, {data.me.firstName} {data.me.lastName}!</h3> */}
              </div>
            </section>
          </div>
          {/* <div style={styles.divider}></div> */}
          <DadCard /> <DadCard />

          {/* <Stat /> */}
        </main>
       ) : (
        <LoginErr />
      )}
    </>
  );
};

export default Dashboard;
