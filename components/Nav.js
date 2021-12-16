import React from "react";
import navStyles from "../styles/Nav.module.css";
import Link from "next/link";


// import { slide as Menu } from "react-burger-menu";

// export default (props) => {
//   return (
//     <Menu {...props}>
//       <a className="menu-item" href="/">
//         Home
//       </a>

//       <a className="menu-item" href="/about">
//         About
//       </a>

//       <a className="menu-item" href="/services">
//         Services
//       </a>

//       <a className="menu-item" href="/contact">
//         Contact us
//       </a>
//     </Menu>
//   );
// };

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
