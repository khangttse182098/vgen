import LayoutContent from "@/components/layoutContent";

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
        content1={<div>Trang Detail Ne</div>}
        content2={<div>Detail voi ID: {params.postId}</div>}
      ></LayoutContent>
    </>
  );
}

export default DetailPost;
