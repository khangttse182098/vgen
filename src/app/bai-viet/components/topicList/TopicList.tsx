import React from "react";
import style from "./TopicList.module.scss";
import TopicOption from "../topicOption/TopicOption";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { PiHandHeart } from "react-icons/pi";
import { BiBrush } from "react-icons/bi";
import { LuTreePine } from "react-icons/lu";
import { IoLanguageOutline } from "react-icons/io5";
import { GrWorkshop } from "react-icons/gr";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuBookMarked } from "react-icons/lu";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const TopicList = () => {
    return (
        <>
        <div className={`${style["container"]}`}>
            <IoIosArrowBack size={32}/>
            <TopicOption Icon={PiHandHeart} name='Tình nguyện'/>
            <TopicOption Icon={BiBrush} name='Mỹ thuật'/>
            <TopicOption Icon={LuTreePine} name='Môi trường'/>
            <TopicOption Icon={IoLanguageOutline} name='Ngôn ngữ'/>
            <TopicOption Icon={GrWorkshop} name='Workshop'/>
            <TopicOption Icon={IoFastFoodOutline} name='Ẩm thực'/>
            <TopicOption Icon={LuBookMarked} name='Khóa học'/>
            <TopicOption Icon={IoAirplaneOutline} name='Du học'/>
            <TopicOption Icon={MdOutlineWorkOutline} name='Việc làm'/>
            <TopicOption Icon={AiOutlineGlobal} name='Cộng đồng'/>
            <TopicOption Icon={IoChatbubbleEllipsesOutline} name='Bàn luận'/>
            <IoIosArrowForward size={32}/> 
        </div>
        </>
        
    )
}

export default TopicList;