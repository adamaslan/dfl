import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Drinks Food</span> Life
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest on Drinks Food and Liiiife.
      </p>
    </div>
  );
};

export default Header;
