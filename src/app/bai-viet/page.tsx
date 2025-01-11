import Post from "@/app/bai-viet/components/normalPost";
import React from "react";
import style from "./index.module.scss";
import HightlightPost from "./components/highlightPost/HightlightPost";
import TopicList from "./components/topicList/TopicList";
import PopularAuthorList from "./components/popularAuthorList/PopularAuthorList";
import HighlightEvent from "./components/highlightEvent/HighlightEvent";
import LayoutContent from "./components/layoutContent";
import MostPopularPost from "./components/mostPopularPost/MostPopularPost";
import PopularPostList from "./components/popularPostList/PopularPostList";

const PostPage = () => {
  return (
    <div>
      {/* <HightlightPost /> */}
      {/* <Post /> */}
      {/* <TopicList />
      <HighlightEvent />
      <PopularAuthorList /> */}
      <LayoutContent
        layoutType={1}
        content1={
          <div style={{ display: "flex" }}>
            <MostPopularPost />
            <PopularPostList />
          </div>
        }
        content2={<div>ABC</div>}
      />
    </div>
  );
};

export default PostPage;
