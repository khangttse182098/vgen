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
      <ul className={`${style["header__tab"]}`}>
        <a href="#">Bài viết</a>
        <a href="#">Giới thiệu</a>
        <a href="#">Dự án giáo dục</a>
      </ul>
    </nav>
  );
};

export default Header;
