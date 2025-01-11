import React from "react";
import style from "./PopularAuthorList.module.scss";
import PopularAuthor from "../popularAuthor/PopularAuthor";

const PopularAuthorList = () => {
  return (
    <div className={`${style["container__outer"]}`}>
      <h2 className={`${style["title"]}`}>Cây bút nổi bật</h2>
      <div className={`${style["container"]}`}>
        <PopularAuthor image="authorHau" name="M Hau Nguyen" quantity={20} />
        <PopularAuthor image="authorHau" name="M Hau Nguyen" quantity={20} />
        <PopularAuthor image="author1" name="M Hau Nguyen" quantity={20} />
        <PopularAuthor image="author2" name="M Hau Nguyen" quantity={20} />
        <PopularAuthor image="author1" name="M Hau Nguyen" quantity={20} />
        <PopularAuthor image="author3" name="M Hau Nguyen" quantity={20} />
        <PopularAuthor image="author3" name="M Hau Nguyen" quantity={20} />
      </div>
    </div>
  );
};

export default PopularAuthorList;
