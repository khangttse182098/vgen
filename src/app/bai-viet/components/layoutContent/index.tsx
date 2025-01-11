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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "14px",
          gap: "12px",
          padding: "12px",
        }}
      >
        <div
          style={{
            flex: 2,
            backgroundColor: "#fff",
            height: "auto",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          {content1}
        </div>
        <div
          style={{
            flex: 8,
            backgroundColor: "#fff",
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          {content2}
        </div>
      </div>
    );
  }
};

export default LayoutContent;
