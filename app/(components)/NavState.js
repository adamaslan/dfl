"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
//navstate.js
export function Nave({ children }) {
  const router = useRouter();  // Access useRouter hook

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (path) => {
    setIsOpen(false); // Close the menu after navigation
    router.push(path);  // Use useRouter for programmatic navigationD
  };

  return (
    <Navbare>
      <Logo href="/">
        Drinks Food<span> Life</span>
      </Logo>
      {children}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink onClick={() => handleMenuClick("./subscribe")}>
          Subscribe
        </MenuLink>
        <MenuLink onClick={() => handleMenuClick("/About")}>About</MenuLink>
        <MenuLink onClick={() => handleMenuClick("/CreateUser")}>
          Create User
        </MenuLink>
        <MenuLink onClick={() => handleMenuClick("/ClientMember")}>
          Client Member
        </MenuLink>
        <MenuLink onClick={() => handleMenuClick("/Member")}>Member</MenuLink>
        <MenuLink onClick={() => handleMenuClick("/Public")}>Public</MenuLink>
      </Menu>
    </Navbare>
  );
}



const MenuLink = styled.a`
padding: 1rem 2rem;
cursor: crosshair;
text-align: center;
text-decoration: none;
background-color: transparent;
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
background-color: transparent;
cursor: pointer;
span {
  height: 3px;
  width: 30px;
  background: transparent;
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
  background: ${({ isOpen }) => (isOpen ? "#0D0C1D" : "transparent")};
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
  background-color: transparent;
}
`;




//other Navbar

//"use client"
// import React, { useState } from "react";
// import Link from "next/link";

// function Nave({ children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const styles = {
//     navbar: {
//       padding: "0 2rem",
//       display: "flex",
//       gridColumn: "1 / span 2",
//       gridRow: 1,
//       justifyContent: "space-between",
//       alignItems: "center",
//       flexWrap: "wrap",
//     },
//     logo: {
//       padding: "1rem 0",
//       color: "#7b7fda",
//       textDecoration: "none",
//       fontWeight: 800,
//       fontSize: "1.7rem",
//       color: "#001022",
//       fontFamily: '"Palette Mosaic", cursive',
//     },
//     "logo span": {
//       fontWeight: 300,
//       fontSize: "2.3rem",
//       color: "#001022",
//       fontFamily: '"Palette Mosaic", cursive',
//     },
//     "menu-link": {
//       padding: "1rem 2rem",
//       cursor: "crosshair",
//       textAlign: "center",
//       textDecoration: "none",
//       backgroundColor: "transparent",
//       color: "#001022",
//       transition: "all 0.3s ease-in",
//       fontSize: "1.4rem",
//     },
//     "menu-link:hover": {
//       color: "yellow",
//     },
//     hamburger: {
//       display: "none",
//       flexDirection: "column",
//       backgroundColor: "transparent",
//       cursor: "pointer",
//     },
//     "hamburger span": {
//       height: "3px",
//       width: "30px",
//       background: "transparent",
//       marginBottom: "4px",
//       borderRadius: "5px",
//     },
//     menu: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       position: "relative",
//     },
//     "menu.open": {
//       maxHeight: "250px",
//       transition: "max-height 0.3s ease-in",
//     },
//     "@media (max-width: 768px)": {
//       menu: {
//         flexDirection: "column",
//       },
//       hamburger: {
//         display: "flex",
//       },
//     },
//   };

//   return (
//     <div style={styles.navbar}>
//       <Link href="/">
//         <a className="logo" style={styles.logo}>
//           Drinks Food<span> Life</span>
//         </a>
//       </Link>
//       {children}
//       <div className="hamburger" style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
//         <span />
//         <span />
//         <span />
//       </div>
//       <div className={`menu ${isOpen ? "open" : ""}`} style={styles.menu}>
//         <Link href="./subscribe">
//           <a className="menu-link" style={styles["menu-link"]}>
//             Subscribe
//           </a>
//         </Link>
//         <Link href="/About">
//           <a className="menu-link" style={styles["menu-link"]}>
//             About
//           </a>
//         </Link>
//         <Link href="/CreateUser">Create User</Link>
//         <Link href="/ClientMember">Client Member</Link>
//         <Link href="/Member">Member</Link>
//         <Link href="/Public">Public</Link>
//       </div>
//     </div>
//   );
// }

// export default Nave;