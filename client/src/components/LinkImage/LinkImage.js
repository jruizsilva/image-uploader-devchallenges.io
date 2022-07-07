import React from "react";
import style from "./LinkImage.module.css";

export default function LinkImage() {
  return (
    <div className={style.container}>
      <p className={style.link}>
        https://images.yourdomain.com/photo-1496950866446-325 31231232131312...{" "}
      </p>
      <button className={style.button}>Copy Link</button>
    </div>
  );
}
