import Banner from "./components/banner/Banner";
import Carousel from "./components/carousel/Carousel";
import style from "./index.module.scss";
import { useTranslations } from "next-intl";

const EduPlanPage = () => {
  const t = useTranslations("EduPlanPage");
  return (
    <div className={`${style["container"]}`}>
      <Carousel />
      <h2 style={{ marginLeft: "27px", marginTop: "30px" }}>{t("eduPlan")}</h2>
      <Banner />
    </div>
  );
};

export default EduPlanPage;
