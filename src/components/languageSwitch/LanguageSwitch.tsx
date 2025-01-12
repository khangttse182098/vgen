"use client";
import Image from "next/image";
import style from "./LanguageSwitch.module.scss";
import ImageVie from "../../../public/assets/Flags.png";
import ImageEng from "../../../public/assets/FlagsE.png";
import { useEffect, useState } from "react";
import setLanguageValue from "@/utils/server/set-language-action";

function LanguageSwitch() {
  const [locale, setLocale] = useState<string>("vi");
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  useEffect(() => {
    const storedLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("language="))
      ?.split("=")[1];

    if (storedLocale) {
      setLocale(storedLocale); // Cập nhật state nếu tìm thấy cookie
    }
  }, [locale]);

  const handleChange = (value: string) => {
    setLanguageValue(value); // Gọi hàm cập nhật ngôn ngữ
    setLocale(value); // Cập nhật state khi người dùng chọn ngôn ngữ mới
    console.log(locale);

    document.cookie = `language=${value}; path=/`; // Cập nhật cookie
    window.location.reload(); // Tải lại trang để cập nhật ngôn ngữ
  };

  // Function to toggle the visibility of options
  const toggleOptions = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };
  return (
    <div className={`${style["container"]}`}>
      <div className={`${style["container__select"]}`} onClick={toggleOptions}>
        {locale === "vi" ? (
          <>
            <Image
              src={ImageVie}
              alt="FlagVie"
              className={`${style["container__select__image"]}`}
            />
            <span className={`${style["container__select__text"]}`}>VIE</span>
            <span className={`${style["container__select__arrow"]}`}>
              {">"}
            </span>
          </>
        ) : (
          <>
            <Image
              src={ImageEng}
              alt="FlagEng"
              className={`${style["container__select__image"]}`}
            />
            <span className={`${style["container__select__text"]}`}>ENG</span>
            <span className={`${style["container__select__arrow"]}`}>
              {">"}
            </span>
          </>
        )}
      </div>

      <div
        className={`${style["container__options"]}`}
        // onClick={() => handleChange}
      >
        <div
          className={`${style["container__options__select"]} ${
            isOptionsVisible ? style["container__options__select--visible"] : ""
          }`}
        >
          {/* Vietnamese Option */}
          <div
            className={`${style["container__options__select__option1"]}`}
            onClick={() => handleChange("vi")}
          >
            <Image
              src={ImageVie}
              alt="FlagVie"
              className={`${style["container__options__select__option1__img"]}`}
            />
            <div
              className={`${style["container__options__select__option1__text"]}`}
            >
              VIE
            </div>
            <div
              className={`${style["container__options__select__option1__arrow"]}`}
            >
              {">"}
            </div>
          </div>

          {/* English Option */}
          <div
            className={`${style["container__options__select__option2"]}`}
            onClick={() => handleChange("en")}
          >
            <Image
              src={ImageEng}
              alt="FlagEng"
              className={`${style["container__options__select__option2__img"]}`}
            />
            <span
              className={`${style["container__options__select__option2__text"]}`}
            >
              ENG
            </span>
            <span
              className={`${style["container__options__select__option2__arrow"]}`}
            >
              {">"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitch;
