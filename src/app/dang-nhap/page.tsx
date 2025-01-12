"use client";
import React from "react";
import style from "./page.module.scss";
import Image from "next/image";
import loginImage from "../../../public/img/login.png";
import { useRouter } from "next/navigation";

const LoginPage = () => {
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
        <div className={`${style["login__title"]}`}>Login</div>
        <div className={`${style["login__guide"]}`}>
          Nhập thông tin của bạn để đăng nhập
        </div>
        <div className={`${style["login__input__wrapper"]}`}>
          <label className={`${style["login__input__label"]}`}>Username</label>
          <input
            className={`${style["login__input"]}`}
            type="text"
            placeholder="Nhập tên người dùng"
          />
        </div>
        <div className={`${style["login__input__wrapper"]}`}>
          <label className={`${style["login__input__label"]}`}>Password</label>
          <input
            className={`${style["login__input"]}`}
            type="password"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <button
          className={`${style["login__input__button"]}`}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
