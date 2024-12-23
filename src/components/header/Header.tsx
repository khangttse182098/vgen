import Link from "next/link";
import style from "./Header.module.scss";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

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
        <Link href="#">Bài viết</Link>
        <Link href="#">Giới thiệu</Link>
        <Link href="#">Dự án giáo dục</Link>
      </ul>
      <ul className={`${style["header__button"]}`}>
        <Link href="#">
          <BiSearch size={30} />
        </Link>
        <Link href="#">
          <AiOutlineUser size={30} />
        </Link>
        <Link href="#">
          <IoMdNotificationsOutline size={30} />
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
