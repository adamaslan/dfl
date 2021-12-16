import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import "../styles/Nav.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div id="App">
        <Nav pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div id="page-wrap">
          <h1>Click to show menu</h1>
        </div>

        <Footer />
      </div>
      {children}
    </>
  );
};

export default Layout;
