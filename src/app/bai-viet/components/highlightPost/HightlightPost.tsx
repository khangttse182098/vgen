import React from "react";
import MostPopularPost from "../mostPopularPost/MostPopularPost";
import PopularPostList from "../popularPostList/PopularPostList";
import style from "./HighlightPost.module.scss";

const HightlightPost = () => {
  return (
    <div className={`${style["post__outer__container"]}`}>
      <div className={`${style["post__inner__container"]}`}>
        <h2 className={`${style["post__heading"]}`}>Bài viết nổi bật</h2>
        <section className={`${style["post__popular__container"]}`}>
          <MostPopularPost />
          <PopularPostList />
        </section>
      </div>
    </div>
  );
};

export default HightlightPost;
