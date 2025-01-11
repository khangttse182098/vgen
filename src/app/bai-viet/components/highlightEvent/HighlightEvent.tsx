import React from "react";
import style from "./HighlightEvent.module.scss";
import eventPoster from "../../../../../public/img/eventPoster.jpg"
import Image from "next/image";
import HighlightEventCard from "../hightlightEventCard/HighlightEventCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

const HighlightEvent = () => {
    return (
        <>
        <div className={`${style["container"]}`}>
            <div className={`${style["container__img"]}`}>
                <Image
                    src={eventPoster}
                    alt="EVENT POSTER"
                    priority
                    className={`${style["container__img__src"]}`}
                />
            </div>
            <div className={`${style["container__cardlist"]}`}>
                <HighlightEventCard />
                <HighlightEventCard />
                <HighlightEventCard />
                <HighlightEventCard />
            </div>
            {/* fix this with wrong className */}
            <div className={`${style["container__option"]}`}>
                <div>
                    <button className={`${style["container__option__button"]}`}>XEM TẤT CẢ&nbsp;<IoArrowForward /></button>
                </div>
                <div className={`${style["container__option__arrow"]}`}>
                    <IoIosArrowBack size={32}/>
                    <IoIosArrowForward size={32}/> 
                </div>
            </div>
        </div>
        </>
    )
}

export default HighlightEvent;