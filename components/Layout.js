import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import {motion, AnimatePresence} from "framer-motion";
import styles from "../styles/Layout.module.css";
import "../styles/Nav.module.css";

const Layout = ({ children }) => {
  return (
    <>
<AnimatePresence > <motion.div initial={{ opacity: .25, scale: 0.1, rotate: 300 }} 
animate={{ opacity: 1, scale: 1, rotate: 360 }}
 transition={{ duration: 4,  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01] }} exit={{ opacity: 0, scale: 0.5, rotate: -180 }} >

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
