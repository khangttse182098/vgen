"use client";
import React from "react";
import style from "./page.module.scss";
import Image from "next/image";
import loginImage from "../../../public/img/login.png";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const t = useTranslations("LoginPage");
  const router = useRouter();
  const handleLogin = () => {
    router.push("/bai-viet");
  };

  return (
    <div className={`${style["login__container"]}`}>
      <div className={`${style["login__image"]}`}>
        <Image src={loginImage} alt="login-image" />
      </div>
      <div className={`${style["login__info"]}`}>
        <div className={`${style["login__title"]}`}>{t("login")}</div>
        <div className={`${style["login__guide"]}`}>{t("enterInfo")}</div>
        <div className={`${style["login__input__wrapper"]}`}>
          <label className={`${style["login__input__label"]}`}>
            {t("username")}
          </label>
          <input
            className={`${style["login__input"]}`}
            type="text"
            placeholder={t("EnterUser")}
          />
        </div>
        <div className={`${style["login__input__wrapper"]}`}>
          <label className={`${style["login__input__label"]}`}>
            {t("password")}
          </label>
          <input
            className={`${style["login__input"]}`}
            type="password"
            placeholder={t("EnterPass")}
          />
        </div>
        <button
          className={`${style["login__input__button"]}`}
          onClick={handleLogin}
        >
          {t("login")}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
