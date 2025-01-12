"use client";
import useDarkModeStore from "@/lib/zustand/store";
import {
    disable as disableDarkMode,
    enable as enableDarkMode,
} from "darkreader";
import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import style from "./ButtonDarkMode.module.scss";

function ButtonDarkMode() {
  const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      enableDarkMode({
        brightness: 100,
        contrast: 95,
        sepia: 10,
        mode: 1,
      });
    } else {
      disableDarkMode();
    }
    return () => disableDarkMode();
  }, [isDarkMode]);

  const handleClick = () => {
    setExiting(true);
    setTimeout(() => {
      toggleDarkMode();
      setExiting(false);
    }, 500);
  };

  console.log(isDarkMode ? "Dark mode active" : "Light mode active");
  return (
    <div onClick={handleClick} className={`${style["container"]}`}>
      {isDarkMode ? (
        <IoMdMoon
          size={20}
          className={`${style["container__icon"]} ${
            exiting ? style["container__dark-exit"] : style["container__dark"]
          }`}
        />
      ) : (
        <MdSunny
          size={20}
          className={`${style["container__icon"]} ${
            exiting ? style["container__light-exit"] : style["container__light"]
          }`}
        />
      )}
    </div>
  );
}

export default ButtonDarkMode;
