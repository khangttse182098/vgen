"use client";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import authorHau from "../../../../../public/img/authorHau.jpg";
import examPic from "../../../../../public/img/bài viết mới mẫu 7.jpg";
import style from "./index.module.scss";
import { useState } from "react";

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={`${style["container"]}`}>
      <Image
        src={examPic}
        alt="VGEN PICTURE"
        priority
        className={`${style["container__image"]}`}
      />
      <div className={`${style["container__content"]}`}>
        <div className={`${style["container__content__title"]}`}>
          Lớp học tử tế khoá 3 mở đơn đăng ký
        </div>
        <div className={`${style["container__content__description"]}`}>
          Hehe lu bu quá mấy nay quên share với mụi người. Đến hẹn lại lên, năm
          nay Quỹ Lương Văn Can tiếp tục tổ chức "Lớp học tử tế...
        </div>
        <div className={`${style["container__content__author"]}`}>
          <div className={`${style["container__content__author__info"]}`}>
            <div>
              <Image
                src={authorHau}
                alt="AUTHOR PICTURE"
                priority
                className={`${style["container__content__author__imageAuthor"]}`}
              />
            </div>
            <div className={`${style["container__content__author__name"]}`}>
              <div>M Hau Nguyen</div>
              <div className={`${style["container__content__author__date"]}`}>
                05 Thg 6
              </div>
            </div>
          </div>
          {isLiked ? (
            <FaHeart
              onClick={handleClick}
              size={23}
              className={`${style["container__content__author__likeSuccess"]}`}
            />
          ) : (
            <FaRegHeart
              onClick={handleClick}
              size={23}
              className={`${style["container__content__author__like"]}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
