import React from "react";
import style from "./PopularPost.module.scss";
import Image, { StaticImageData } from "next/image";
import { CiHeart } from "react-icons/ci";

type TPopularPost = {
  postImg: StaticImageData;
  authorImg: StaticImageData;
  title: string;
  name: string;
  date: string;
};

const PopularPost = ({
  postImg,
  authorImg,
  name,
  date,
  title,
}: TPopularPost) => {
  return (
    <div className={`${style["popular__post__container"]}`}>
      <div className={`${style["popular__post__image"]}`}>
        <Image src={postImg} alt="post-img" />
      </div>
      <div className={`${style["popular__post__info"]}`}>
        <div className={`${style["popular__post__title"]}`}>{title}</div>
        <div className={`${style["popular__post__author__container"]}`}>
          <div className={`${style["popular__post__author__image"]}`}>
            <Image src={authorImg} alt="author-img" />
          </div>
          <div className={`${style["popular__post__author__info"]}`}>
            <div className={`${style["popular__post__author__name"]}`}>
              {name}
            </div>
            <div className={`${style["popular__post__author__date"]}`}>
              {date}
            </div>
          </div>
          <CiHeart />
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
