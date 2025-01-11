import React from "react";
import style from "./PopularPostList.module.scss";
import PopularPost from "../popularPost/PopularPost";
import popularPostImg1 from "../../../../../public/img/popularPost1.jpg";
import popularPostImg2 from "../../../../../public/img/popularPost2.jpg";
import popularPostImg3 from "../../../../../public/img/popularPost3.jpg";
import popularPostImg4 from "../../../../../public/img/popularPost4.jpg";
import popularPostImg5 from "../../../../../public/img/popularPost5.jpg";
import authorHau from "../../../../../public/img/authorHau.jpg";

const PopularPostList = () => {
  return (
    <div className={`${style["popular__post__list__container"]}`}>
      <PopularPost
        postImg={popularPostImg1}
        authorImg={authorHau}
        name="M Hau Nguyen"
        date="18 thg 07"
        title="Dự án hoa tuyển tay tình nguyện"
      />
      <PopularPost
        postImg={popularPostImg2}
        authorImg={authorHau}
        name="M Hau Nguyen"
        date="05 thg 09"
        title="V.Gen mở ghế cho cộng đồng alumni"
      />
      <PopularPost
        postImg={popularPostImg3}
        authorImg={authorHau}
        name="M Hau Nguyen"
        date="18 thg 07"
        title="Dự án hoa tuyển tay tình nguyện"
      />
      <PopularPost
        postImg={popularPostImg4}
        authorImg={authorHau}
        name="M Hau Nguyen"
        date="18 thg 07"
        title="Dự án hoa tuyển tay tình nguyện"
      />
      <PopularPost
        postImg={popularPostImg5}
        authorImg={authorHau}
        name="M Hau Nguyen"
        date="18 thg 07"
        title="Dự án hoa tuyển tay tình nguyện"
      />
    </div>
  );
};

export default PopularPostList;
