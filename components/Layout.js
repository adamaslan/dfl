import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import "../styles/Nav.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      {/* </div> */}
      {children}

      <Header />
      <Footer />
    </>
  );
};

export default Layout;
