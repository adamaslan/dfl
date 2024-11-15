import headerStyles from "../styles/Header.module.css";
import Link from "next/link";
import { Palette_Mosaic } from "next/font/google"; // Import optimized Google font

// Configure the font
const paletteMosaic = Palette_Mosaic({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  return (
    <div className={paletteMosaic.className}>
      <h1 className={headerStyles.title}>
        <Link href="/" passHref>
          <span>Drinks Food</span> Life
        </Link>
      </h1>
    </div>
  );
};

export default Header;
