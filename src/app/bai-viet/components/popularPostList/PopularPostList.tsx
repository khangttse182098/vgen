"use client";
import React from "react";
import style from "./PopularPostList.module.scss";
import PopularPost, { TPopularPost } from "../popularPost/PopularPost";
import popularPostImg1 from "../../../../../public/img/popularPost1.jpg";
import popularPostImg2 from "../../../../../public/img/popularPost2.jpg";
import popularPostImg3 from "../../../../../public/img/popularPost3.jpg";
import popularPostImg4 from "../../../../../public/img/popularPost4.jpg";
import popularPostImg5 from "../../../../../public/img/popularPost5.jpg";
import authorHau from "../../../../../public/img/authorHau.jpg";

interface PopularPostListProps {
  onSelectPost?: (selectedPost: TPopularPost) => void;
}

const PopularPostList: React.FC<PopularPostListProps> = ({ onSelectPost }) => {
  const data = [
    {
      id: "1",
      postImg: popularPostImg1,
      authorImg: authorHau,
      name: "M Hau Nguyen",
      date: "18 thg 07",
      title: "Dự án hoa tuyển tay tình nguyện",
    },
    {
      id: "2",
      postImg: popularPostImg2,
      authorImg: authorHau,
      name: "M Hau Nguyen",
      date: "05 thg 09",
      title: "V.Gen mở ghế cho cộng đồng alumni",
    },
    {
      id: "3",
      postImg: popularPostImg3,
      authorImg: authorHau,
      name: "M Hau Nguyen",
      date: "18 thg 07",
      title: "Dự án hoa tuyển tay tình nguyện",
    },
    {
      id: "4",
      postImg: popularPostImg4,
      authorImg: authorHau,
      name: "M Hau Nguyen",
      date: "18 thg 07",
      title: "Dự án hoa tuyển tay tình nguyện",
    },
    {
      id: "5",
      postImg: popularPostImg5,
      authorImg: authorHau,
      name: "M Hau Nguyen",
      date: "18 thg 07",
      title: "Dự án hoa tuyển tay tình nguyện",
    },
  ];

  return (
    <div className={`${style["popular__post__list__container"]}`}>
      {data.map((popularPost, index) => (
        <PopularPost
          key={index}
          id={popularPost.id}
          postImg={popularPost.postImg}
          authorImg={popularPost.authorImg}
          name={popularPost.name}
          date={popularPost.date}
          title={popularPost.title}
          onSelectPost={() => onSelectPost?.(popularPost)}
        />
      ))}
    </div>
  );
};

export default PopularPostList;
