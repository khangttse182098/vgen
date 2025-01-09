import Post from "@/app/bai-viet/components/normalPost";
import React from "react";
import style from "./index.module.scss";
import HightlightPost from "./components/highlightPost/HightlightPost";

const PostPage = () => {
  return (
    <div>
      <HightlightPost />
      <Post />
    </div>
  );
};

export default PostPage;
