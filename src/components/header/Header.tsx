import { useTranslations } from "next-intl";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";
import style from "./Header.module.scss";
import ButtonDarkMode from "../buttonDarkMode/ButtonDarkMode";

const Header = () => {
  const t = useTranslations("Header");
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
        <Link href="/bai-viet">{t("post")}</Link>
        <Link href="/">{t("introduction")}</Link>
        <Link href="/du-an-giao-duc">{t("eduPlan")}</Link>
      </ul>
      <ul className={`${style["header__button"]}`}>
        <LanguageSwitch />
        <ButtonDarkMode />
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
