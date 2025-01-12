import LayoutContent from "@/components/layoutContent";
import DetailContentPost from "../components/detailContentPost/DetailContentPost";
import RelatedPost from "../components/relatedPost/RelatedPost";

interface DetailProps {
  params: {
    postId: string;
  };
}

function DetailPost({ params }: DetailProps) {
  return (
    <>
      <LayoutContent
        layoutType={2}
        content1={<DetailContentPost />}
        content2={<RelatedPost />}
      ></LayoutContent>
    </>
  );
}

export default DetailPost;
