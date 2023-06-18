import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import {motion, AnimatePresence} from "framer-motion";
import styles from "../styles/Layout.module.css";
import "../styles/Nav.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <AnimatePresence>
          <motion.div        initial={{ opacity: 0, scale: 0.5 }}
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 0.5 }}>
        <Nav />

      {/* </div> */}
      {children}

      <Footer />
      <Header />
          </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
