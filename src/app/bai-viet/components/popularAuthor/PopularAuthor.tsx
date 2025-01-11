import React from "react";
import style from "./PopularAuthor.module.scss";
import { GoPencil } from "react-icons/go";
import authorHau from "../../../../../public/img/authorHau.jpg";
import author1 from "../../../../../public/img/author1.jpg";
import author2 from "../../../../../public/img/author2.jpg";
import author3 from "../../../../../public/img/author3.jpg";
import Image from "next/image";

const PopularAuthor = (props: any) => {
  const renderAuthorImage = () => {
    switch (props.image) {
      case "authorHau":
        return (
          <Image
            src={authorHau}
            alt="AUTHOR PICTURE"
            priority
            className={`${style["author__img"]}`}
          />
        );
      case "author1":
        return (
          <Image
            src={author1}
            alt="AUTHOR PICTURE"
            priority
            className={`${style["author__img"]}`}
          />
        );
      case "author2":
        return (
          <Image
            src={author2}
            alt="AUTHOR PICTURE"
            priority
            className={`${style["author__img"]}`}
          />
        );
      case "author3":
        return (
          <Image
            src={author3}
            alt="AUTHOR PICTURE"
            priority
            className={`${style["author__img"]}`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={`${style["container"]}`}>
        <div>{renderAuthorImage()}</div>
        <div className={`${style["container__author__name"]}`}>
          {props.name}
        </div>
        <div className={`${style["container__author__article"]}`}>
          <GoPencil />
          <div>{props.quantity} bài viết</div>
        </div>
      </div>
    </>
  );
};

export default PopularAuthor;
