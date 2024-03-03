import { ConnectWallet } from "@thirdweb-dev/react";
import { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ConnectWallet />
      </div>
    </main>
  );
};

export default Home;
