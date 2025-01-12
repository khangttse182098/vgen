import React from "react";
import Post from "../normalPost";
import styles from "./NormalPostList.module.scss";

const NormalPostList = () => {
  return (
    <div className={`${styles["list__container"]}`}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default NormalPostList;
