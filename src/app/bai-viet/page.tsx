import Post from "@/app/bai-viet/components/normalPost";
import React from "react";
import style from "./index.module.scss";
import HightlightPost from "./components/highlightPost/HightlightPost";
import TopicList from "./components/topicList/TopicList";
import PopularAuthorList from "./components/popularAuthorList/PopularAuthorList";
import HighlightEvent from "./components/highlightEvent/HighlightEvent";

const PostPage = () => {
  return (
    <div>
      <HightlightPost />
      <Post />
      <TopicList />
      <HighlightEvent />
      <PopularAuthorList />
    </div>
  );
};

export default PostPage;
