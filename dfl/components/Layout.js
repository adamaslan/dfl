import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}></main>
        <div className={styles.submain}></div>
        <div className={styles.subsubmain}>{children} </div>
      </div>
    </>
  );
};

export default Layout;
