import Link from "next/link";
import style from "./Footer.module.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={`${style["footer"]}`}>
      <div className={`${style["footer__wrapper"]}`}>
        <div className={`${style["footer__brand"]}`}>
          <div className={`${style["footer__brand__image"]}`}>
            <img src="/img/brand__logo.png" alt="brand logo" />
          </div>
        </div>
        <div className={`${style["footer__contact"]}`}>
          <h2 className={`${style["footer__contact__title"]}`}>Liên hệ</h2>
          <ul className={`${style["footer__contact__content"]}`}>
            <li>placeholder@gmail.com</li>
            <li>placeholder@gmail.com</li>
          </ul>
        </div>
        <div className={`${style["footer__social"]}`}>
          <h2 className={`${style["footer__social__title"]}`}>Mạng xã hội</h2>
          <ul className={`${style["footer__social__content"]}`}>
            <li>
              <FaFacebookSquare size={20} />
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <AiFillInstagram size={20} />
              <Link href="#">Instagram</Link>
            </li>
          </ul>
        </div>
        <div className={`${style["footer__address"]}`}>
          <h2 className={`${style["footer__address__title"]}`}>Địa chỉ</h2>
          <ul className={`${style["footer__address__content"]}`}>
            <li>123 đường abc, Hồ Chí Minh</li>
            <li>123 đường abc, Hồ Chí Minh</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
