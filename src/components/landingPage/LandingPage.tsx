"use client";
import Image from "next/image";
import VGenSticker from "../../../public/img/VGenSticker.jpg";
import VGenCoin from "../../../public/img/VGenCoin.jpg";
import VGenMembers from "../../../public/img/VGenMembers.jpg";
import style from "./LandingPage.module.scss";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const LandingPage = () => {
  return (
    <>
      <div className={`${style["landingpage"]}`}>
        <div className={`${style["landingpage__container"]}`}>
          <div className={`${style["landingpage__container__left"]}`}>
            <div
              className={`${style["landingpage__container__left__content"]}`}
            >
              <h2>
                {" "}
                <span
                  className={`${style["landingpage__container__left__content__word__1"]}`}
                >
                  V.Gen
                </span>{" "}
                Network <br />
                for{" "}
                <span
                  className={`${style["landingpage__container__left__content__word__2"]}`}
                >
                  VietNam
                </span>
              </h2>
              <p>
                V.Gen Network Viet Nam là một tổ <br /> chức phi lợi nhuận.
                Lorem Ipsum 
                <br /> is simply dummy text of the printing and <br />
                typesetting industry.
              </p>
              <div
                className={`${style["landingpage__container__left__content__btn"]}`}
              >
                <button
                  className={`${style["landingpage__container__left__content__btn__login"]}`}
                >
                  Đăng nhập
                </button>
                <button
                  className={`${style["landingpage__container__left__content__btn__findMore"]}`}
                >
                  Tìm hiểu thêm &nbsp;
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
          <div className={`${style["landingpage__container__right"]}`}>
            <div
              className={`${style["landingpage__container__right__content"]}`}
            >
              <div className={`${style["landingpage__container__right__content__baseElement"]}`}>
                <Image
                  src={VGenSticker}
                  alt="STICKER PICTURE"
                  priority
                  className={`${style["landingpage__container__right__content__stickerImg"]}`}
                />
                <div className={`${style["landingpage__container__right__content__baseElement__childElement1"]}`}>
                  <Image
                    src={VGenCoin}
                    alt="COIN PICTURE"
                    priority
                    className={`${style["landingpage__container__right__content__coinImg"]}`}
                  />
                </div>
                <div className={`${style["landingpage__container__right__content__baseElement__childElement2"]}`}>
                  <Image
                    src={VGenMembers}
                    alt="MEMBERS PICTURE"
                    priority
                    className={`${style["landingpage__container__right__content__memberImg"]}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
