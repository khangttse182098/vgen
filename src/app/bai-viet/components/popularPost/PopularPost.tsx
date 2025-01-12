import React from "react";
import style from "./PopularPost.module.scss";
import Image, { StaticImageData } from "next/image";
import { CiHeart } from "react-icons/ci";

export type TPopularPost = {
  id: string;
  postImg: StaticImageData;
  authorImg: StaticImageData;
  title: string;
  name: string;
  date: string;
  onSelectPost?: () => void;
};

const PopularPost = ({
  id,
  postImg,
  authorImg,
  name,
  date,
  title,
  onSelectPost,
}: TPopularPost) => {
  return (
    <div
      className={`${style["post__container"]}`}
      onClick={onSelectPost}
      id={id}
    >
      <div className={`${style["post__image"]}`}>
        <Image src={postImg} alt="post-img" />
      </div>
      <div className={`${style["post__info"]}`}>
        <div className={`${style["post__title"]}`}>{title}</div>
        <div className={`${style["post__author__container"]}`}>
          <div className={`${style["post__author__image"]}`}>
            <Image src={authorImg} alt="author-img" />
          </div>
          <div className={`${style["post__author__info"]}`}>
            <div className={`${style["post__author__name"]}`}>{name}</div>
            <div className={`${style["post__author__date"]}`}>{date}</div>
          </div>
          <CiHeart className={`${style["post__like"]}`} />
        </div>
      </div>
    </div>
  );
};

export default PopularPost;
