import React from "react";
import style from "./TopicOption.module.scss";

import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

type TTopicOption = {
  Icon: IconType;
  name: string;
};

const TopicOption = ({ Icon, name }: TTopicOption) => {
  return (
    <>
      <div className={`${style["container"]}`}>
        <span className={`${style["container__circle"]}`}>
          <Icon />
        </span>
        <span className={`${style["container__text"]}`}>{name}</span>
      </div>
    </>
  );
};

export default TopicOption;
