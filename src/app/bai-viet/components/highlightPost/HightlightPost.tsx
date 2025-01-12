"use client";
import MostPopularPost from "../mostPopularPost/MostPopularPost";
import { TPopularPost } from "../popularPost/PopularPost";
import PopularPostList from "../popularPostList/PopularPostList";
import style from "./HighlightPost.module.scss";
import { useRouter } from "next/navigation";

const HightlightPost = () => {
  const router = useRouter();
  const handleSelectPost = (selectedPost: TPopularPost) => {
    console.log("Selected Post ID:", selectedPost.id);
    router.push(`/bai-viet/${selectedPost.id}`);
  };

  return (
    <div className={`${style["post__outer__container"]}`}>
      <div className={`${style["post__inner__container"]}`}>
        <h2 className={`${style["post__heading"]}`}>Bài viết nổi bật</h2>
        <section className={`${style["post__popular__container"]}`}>
          <MostPopularPost />
          <PopularPostList onSelectPost={handleSelectPost} />
        </section>
      </div>
    </div>
  );
};

export default HightlightPost;
