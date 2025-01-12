import LayoutContent from "@/components/layoutContent";
import HighlightEvent from "./components/highlightEvent/HighlightEvent";
import HightlightPost from "./components/highlightPost/HightlightPost";
import NormalPostList from "./components/normalPostList/NormalPostList";
import PopularAuthorList from "./components/popularAuthorList/PopularAuthorList";
import TopicList from "./components/topicList/TopicList";

const PostPage = () => {
  return (
    <div>
      <LayoutContent
        layoutType={1}
        content1={<HightlightPost />}
        content2={
          <>
            <TopicList />
            <NormalPostList />
            <HighlightEvent />
            <NormalPostList />
            <PopularAuthorList />
          </>
        }
      />
    </div>
  );
};

export default PostPage;
