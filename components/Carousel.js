import React from "react";
//import Carousel from "nuka-carousel";
//https://kenwheeler.github.io/nuka-carousel/#/
//   cellAlign="center" - not working well
export default class extends React.Component {
  render() {
    return (
      <Carousel
        className="caro"
        slidesToShow={2}
        cellSpacing={20}
        frameOverflow="hidden"
        setHeightMode="max"
      >
        <a href="./amaromontenegro">
          <img src="https://lh3.googleusercontent.com/SpfSt4EadOjpRUZCfjEPu_bl5mCTyXq5skTyHKKqwcCt1hUzXHZ5ZxU9rPg_oY4e_tIZQQnZb4RD4FjBFzJTmMGKArLmctic3R1oD7GbBy_kXHazlVy1QdGWiN0ywz1GGenQRrCl2w=w2400" />
        </a>
        <img src="https://lh3.googleusercontent.com/uNvMIWcJl7Fn3vuEWe2k0VgJe7oAGLOEQ65Mw1UCOMqvmOIdsP2GJ2jd8bnt2dKDfUl-7WWOTFk8pozU74MTy0A5XOxLlhUL1ROAJtK0RH03Bbo-PC5Tpgk68Rre8naoqWytCgCunQ=w2400" />
        <img src="https://lh3.googleusercontent.com/uucnoXh-7hhllptS6JzDoBL1_5Cy9u_kq3herLqXTN67FAE_mXn-YxMm5bw4JVZ52lg16FjCTJYBn_DPXy4Aqa0Hw2U4mYes_xKASLHZx70xQGWV3yh7vzSmamKyRGm3BrYiNRkPww=w2400" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
      </Carousel>
    );
  }
}
