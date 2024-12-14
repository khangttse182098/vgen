import style from "./Header.module.scss";
const Header = () => {
  return (
    <nav className={`${style["header"]}`}>
      <div className={`${style["header__brand"]}`}>
        <div className={`${style["header__brand__image"]}`}>
          <img src="/img/brand__logo.png" alt="brand logo" />
        </div>
        <h1 className={`${style["header__brand__name"]}`}>
          V.Gen Network for Vietnam
        </h1>
      </div>
    </nav>
  );
};

export default Header;
