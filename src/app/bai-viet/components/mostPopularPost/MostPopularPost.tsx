"use client";

import React from "react";
import style from "./MostPopularPost.module.scss";
import mostPopularPostImg from "../../../../../public/img/mostPopularPost.jpg";
import authorHau from "../../../../../public/img/authorHau.jpg";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const MostPopularPost = () => {
  return (
    <div className={`${style["post__container"]}`}>
      <div className={`${style["post__img__container"]}`}>
        <Image src={mostPopularPostImg} alt="mostPopularPostImage" />
      </div>
      <h2 className={`${style["post__title"]}`}>
        Ngày hội "Sustainability Matters: Earthy Day 2024"
      </h2>
      <section className={`${style["post__info"]}`}>
        <div className={`${style["post__author__container"]}`}>
          <div className={`${style["post__author__img__container"]}`}>
            <Image src={authorHau} alt="author" />
          </div>
          <div className={`${style["post__author"]}`}>
            <div className={`${style["post__author__name"]}`}>M Hau Nguyen</div>
            <div className={`${style["post__author__post__date"]}`}>
              05 Thg 09
            </div>
          </div>
        </div>
        <CiHeart className={`${style["post__like"]}`} />
      </section>
    </div>
  );
};

export default MostPopularPost;
