import Link from "next/link";
import style from "./Footer.module.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={`${style["footer"]}`}>
      <div className={`${style["footer__brand"]}`}>
        <div className={`${style["footer__brand__image"]}`}>
          <img src="/img/brand__logo.png" alt="brand logo" />
        </div>
      </div>
      <div className={`${style["footer__contact"]}`}>
        <h2>Liên hệ</h2>
        <ul>
          <li>placeholder@gmail.com</li>
          <li>placeholder@gmail.com</li>
        </ul>
      </div>
      <div className={`${style["footer__social"]}`}>
        <h2>Mạng xã hội</h2>
        <ul>
          <li>
            <Link href="#">Facebook</Link>
            <FaFacebookSquare size={20} />
          </li>
          <li>
            <Link href="#">Instagram</Link>
            <AiFillInstagram size={20} />
          </li>
        </ul>
      </div>
      <div className={`${style["footer__address"]}`}>
        <h2>Địa chỉ</h2>
        <ul>
          <li>123 đường abc, Hồ Chí Minh</li>
          <li>123 đường abc, Hồ Chí Minh</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
