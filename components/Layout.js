import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />

      {children}
          <Footer />
    </>
  );
};

export default Layout;
