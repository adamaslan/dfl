//import navStyles from "../styles/Nav.module.css";
//import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbare>
      <Logo href="/">
        Drinks Food<span> Life</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/about">Subscribe</MenuLink>
        <MenuLink href="/about">About</MenuLink>
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
  color: #001022;
  transition: all 0.3s ease-in;
  font-size: 1.4rem;
  &:hover {
    color: yellow;
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
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  color: #001022;
  text-decoration: none;
  font-family: "Palette Mosaic", cursive;
  span {
    font-weight: 300;
    font-size: 2.3rem;

    color: #001022;
    text-decoration: none;
    font-family: "Palette Mosaic", cursive;
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
    max-height: ${({ isOpen }) => (isOpen ? "250px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 30px;
    background: #001022;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ isOpen }) => (isOpen ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
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
