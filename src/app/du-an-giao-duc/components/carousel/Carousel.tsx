"use client";
import style from "./Carousel.module.scss";
import BannerExample from "../../../../../public/img/banner1.jpg";
import BannerExample2 from "../../../../../public/img/banner2.jpg";
import BannerExample3 from "../../../../../public/img/banner3.jpg";
import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
  const images = [BannerExample, BannerExample2, BannerExample3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className={style["carousel"]}>
      <button onClick={prevSlide} className={style["carousel__button"]}>
        &#10094;
      </button>
      <div
        className={style["carousel__track"]}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Banner ${currentIndex + 1}`}
            className={style["carousel__image"]}
          />
        ))}
      </div>
      <button onClick={nextSlide} className={style["carousel__button"]}>
        &#10095;
      </button>
      <div className={style["carousel__buttonDetail"]}>
        <button className={style["carousel__buttonDetail__click"]}>
          Tìm hiểu thêm {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
