import React from "react";
import style from "./index.module.scss";

type LayoutContentProps = {
  layoutType: number;
  content1: React.ReactNode;
  content2?: React.ReactNode;
};

const LayoutContent = ({
  layoutType,
  content1,
  content2,
}: LayoutContentProps) => {
  // layout cho trang bài viết
  if (layoutType === 1) {
    return (
      <div className={`${style["layout__container"]}`}>
        <div className={`${style["layout__container__content1"]}`}>
          {content1}
        </div>
        <div className={`${style["layout__container__content2"]}`}>
          {content2}
        </div>
      </div>
    );
  }
  // layout cho trang bài viết
  else if (layoutType === 2) {
    return (
      <div className={`${style["layout__container2"]}`}>
        <div className={`${style["layout__container2__content3"]}`}>
          {content1}
        </div>
        <div className={`${style["layout__container2__content4"]}`}>
          {content2}
        </div>
      </div>
    );
  }
};

export default LayoutContent;
