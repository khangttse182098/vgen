import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import style from "./Header.module.scss";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";

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
        <Link href="/bai-viet">Bài viết</Link>
        <Link href="/">Giới thiệu</Link>
        <Link href="/du-an-giao-duc">Dự án giáo dục</Link>
      </ul>
      <ul className={`${style["header__button"]}`}>
        <LanguageSwitch />
        <Link href="#">
          <BiSearch size={20} />
        </Link>
        <Link href="#">
          <AiOutlineUser size={20} />
        </Link>
        <Link href="#">
          <IoMdNotificationsOutline size={20} />
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
