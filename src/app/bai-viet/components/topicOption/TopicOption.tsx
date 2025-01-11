import React from "react";
import style from "./TopicOption.module.scss";
import { IconType } from "react-icons/lib";

type TTopicOption = {
  Icon: IconType;
  name: string;
};

const TopicOption = ({ Icon, name }: TTopicOption) => {
  return (
    <>
      <div className={`${style["option"]}`}>
        <span className={`${style["circle"]}`}>
          <Icon />
        </span>
        <span className={`${style["text"]}`}>{name}</span>
      </div>
    </>
  );
};

export default TopicOption;
