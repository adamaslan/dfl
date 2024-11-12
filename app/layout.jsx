
// import AuthProvider from "./(components)/AuthProvider";
import Nav from "./(components)/Nav";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
// import { Providers } from "./(components)/Framer";

// import "../styles/Nav.module.css";
import styles from "./styles/Layout.module.css";
// import "./globals.css";

export const metadata = {
  title: "Drinks Food Life",
  description: "Drinks Food Life. A Bushwick based publication covering the tastiest things in NYC and the rest of the world."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body>
      {/* <Providers> */}
      {/* <AuthProvider> */}
   
        <Nav />
        <Header />
      {/* </div> */}
      {children}

      <Footer />
      
        
      {/* </AuthProvider> */}
      {/* </Providers> */}
      </body>
    </html>
  );
}