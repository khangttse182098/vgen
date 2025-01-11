import React from "react";
import style from "./HighlightEvent.module.scss";
import eventPoster from "../../../../../public/img/eventPoster.jpg";
import Image from "next/image";
import HighlightEventCard from "../hightlightEventCard/HighlightEventCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const HighlightEvent = () => {
  return (
    <>
      <div className={`${style["container"]}`}>
        <div>
          <Image
            src={eventPoster}
            alt="EVENT POSTER"
            priority
            className={`${style["container__img"]}`}
          />
        </div>
        <div className={`${style["container__cardlist"]}`}>
          <HighlightEventCard />
          <HighlightEventCard />
          <HighlightEventCard />
          <HighlightEventCard />
        </div>
        {/* fix this with wrong className */}
        <div className={`${style["container__cardlist"]}`}>
          <div>
            <button className={`${style["container__buttonSeeAll"]}`}>
              Xem tất cả
            </button>
          </div>
          <div>
            <IoIosArrowBack size={32} />
            <IoIosArrowForward size={32} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightEvent;
