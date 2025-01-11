import Banner from "./components/banner/Banner";
import Carousel from "./components/carousel/Carousel";
import style from "./index.module.scss";

const EduPlanPage = () => {
  return (
    <div className={`${style["container"]}`}>
      <Carousel />
      <h2 style={{ marginLeft: "27px", marginTop: "30px" }}>
        Các dự án giáo dục
      </h2>
      <Banner />
    </div>
  );
};

export default EduPlanPage;
