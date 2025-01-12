import style from "./DetailContentPost.module.scss";
import Image from "next/image";
import authorHau from "../../../../../public/img/authorHau.jpg";
import detailPost from "../../../../../public/img/detailPost.jpg";
const DetailContentPost = () => {
  return (
    <>
      <div className={`${style["container"]}`}>
        <div className={`${style["container__content"]}`}>
          <div className={`${style["container__content__header"]}`}>
            <h1 className={`${style["container__content__header__title"]}`}>
              Cơ hội trở thành tình nguyện viên cho dự án phi lợi nhuận về Nghệ
              thuật Giáo dục Tay Thở
            </h1>
            <div className={`${style["container__content__header__author"]}`}>
              <span
                className={`${style["container__content__header__author__date"]}`}
              >
                18-07-2024
              </span>
              <div
                className={`${style["container__content__header__author__container"]}`}
              >
                <Image
                  src={authorHau}
                  alt="AUTHOR HAU"
                  priority
                  className={`${style["container__content__header__author__container__authorImg"]}`}
                />
                <span
                  className={`${style["container__content__header__author__container__name"]}`}
                >
                  M Hau Nguyen
                </span>
              </div>
            </div>
          </div>

          <h4 className={`${style["container__content__fullTitle"]}`}>
            Cơ hội trở thành tình nguyện viên cho dự án phi lợi nhuận về Giáo
            dục nghệ thuật Tay thở hăng say học bao điều mới, phơi phới đón
            những ngày hè còn lại nha
          </h4>
          <div className={`${style["container__content__mainImg"]}`}>
            <Image
              src={detailPost}
              alt="DETAIL POST"
              priority
              className={`${style["container__content__mainImg__src"]}`}
            />
            <span className={`${style["container__content__mainImg__link"]}`}>
              Nguồn: abcdxyz
            </span>
          </div>

          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className={`${style["container__content__otherImg"]}`}>
            <Image
              src={detailPost}
              alt="DETAIL POST"
              priority
              className={`${style["container__content__otherImg__src"]}`}
            />
          </div>

          <div className={`${style["container__content__body"]}`}>
            <h3>Why do we use it?</h3>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>

            <h3>Why do we use it?</h3>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailContentPost;
