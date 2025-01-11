"use client";
import React, { useState } from "react";
import style from "./HighlightEventCard.module.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import cardPoster1 from "../../../../../public/img/cardPoster1.jpg";
import authorHau from "../../../../../public/img/authorHau.jpg";
import Image from "next/image";

const HighlightEventCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className={`${style["card"]}`}>
        <Image
          src={cardPoster1}
          alt="CARDPOSTER1"
          priority
          className={`${style["poster_img"]}`}
        />
        <div className={`${style["card-content"]}`}>
          <h4 className={`${style["card-title"]}`}>
            [RECAP D.E.I.A] CÁC HOẠT ĐỘNG “AI-CON-NÍC” TẠI TRƯỜNG HỌC V.GEN...
          </h4>
          <div className={`${style["author"]}`}>
            <div className={`${style["author-info"]}`}>
              <div>
                <Image
                  src={authorHau}
                  alt="AUTHOR PICTURE"
                  priority
                  className={`${style["author-img"]}`}
                />
              </div>
              <div className={`${style["author-name"]}`}>
                <div>M Hau Nguyen</div>
                <div className={`${style["author-date"]}`}>05 Thg 6</div>
              </div>
            </div>
            {isLiked ? (
              <FaHeart
                onClick={handleClick}
                size={23}
                className={`${style["likeSuccess"]}`}
              />
            ) : (
              <FaRegHeart
                onClick={handleClick}
                size={23}
                className={`${style["like"]}`}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightEventCard;
