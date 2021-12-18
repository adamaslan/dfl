//import navStyles from "../styles/Nav.module.css";
//import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbare>
      <Logo href="">
        Drinks Food<span>Life</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href=""> Work</MenuLink>
        <MenuLink href="">About</MenuLink>

        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Navbare>
  );
};

export default Nav;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: crosshair;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;

const Navbare = styled.div`
  padding: 0 2rem;
  display: flex;
  grid-column: 1 / span 2;
  grid-row: 1;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

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

// const Nav = () => {
//   return (
//     <nav className={navStyles.nav}>
//       <ul>
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/about">About</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;
