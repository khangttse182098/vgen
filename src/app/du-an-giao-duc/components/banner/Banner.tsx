import Image from "next/image";
import style from "./Banner.module.scss";
import BannerExample from "../../../../../public/img/banner1.jpg";
import BannerExample2 from "../../../../../public/img/banner2.jpg";
import BannerExample3 from "../../../../../public/img/banner3.jpg";
import BannerExample4 from "../../../../../public/img/banner4.jpg";
import BannerExample5 from "../../../../../public/img/banner5.jpg";
import BannerExample6 from "../../../../../public/img/banner6.jpg";
import BannerExample7 from "../../../../../public/img/banner7.jpg";
import BannerExample8 from "../../../../../public/img/banner8.png";
import BannerExample9 from "../../../../../public/img/banner9.png";

const Banner = () => {
  const dataExample = [
    {
      imageSrc: BannerExample,
      altText: "PIC",
      header: "Tinh thần lãnh đạo vui khỏe và dấn thân",
      location: "Kiên Lương",
      year: 2024,
    },
    {
      imageSrc: BannerExample2,
      altText: "PIC",
      header: "Đa dạng, công bằng, dung hợp, tiếp cận",
      location: "Hồ Chí Minh",
      year: 2024,
    },
    {
      imageSrc: BannerExample3,
      altText: "PIC",
      header: "Đa dạng, công bằng, dung hợp",
      location: "Nha Trang",
      year: 2023,
    },
    {
      imageSrc: BannerExample4,
      altText: "PIC",
      header: "Tuổi trẻ kiên lì & vui khoẻ",
      location: "Trà Vinh - Đồng Tháp",
      year: 2023,
    },
    {
      imageSrc: BannerExample5,
      altText: "PIC",
      header: "Khoá học mùa hè 2022",
      location: "Trà Vinh - Kiên Giang",
      year: 2022,
    },
    {
      imageSrc: BannerExample6,
      altText: "PIC",
      header: "Vì bạn là Việt Nam",
      location: "Hồ Chí Minh",
      year: 2021,
    },
    {
      imageSrc: BannerExample7,
      altText: "PIC",
      header: "Summer course",
      location: "Hồ Chí Minh - Kiên Giang",
      year: 2020,
    },
    {
      imageSrc: BannerExample8,
      altText: "PIC",
      header: "Summer course",
      location: "Hồ Chí Minh",
      year: 2019,
    },
    {
      imageSrc: BannerExample9,
      altText: "PIC",
      header: "Tôi, chúng ta và thế giới",
      location: "Hồ Chí Minh",
      year: 2018,
    },
  ];

  return (
    <div className={`${style["container"]}`}>
      {dataExample.map((data, index) => (
        <div key={index} className={`${style["container__content"]}`}>
          <Image
            src={data.imageSrc}
            alt={data.altText}
            priority
            className={`${style["container__image"]}`}
          />
          <div className={`${style["container__content__header"]}`}>
            {data.header}
          </div>
          <div>{data.location}</div>
          <div>{data.year}</div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
