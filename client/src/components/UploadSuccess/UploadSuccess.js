import React from "react";
import LinkImage from "../LinkImage/LinkImage";
import style from "./UploadSuccess.module.css";

export default function UploadedSuccess() {
  return (
    <div className={style.container}>
      <div className={style.image_container}>
        <img
          src="./check_circle.svg"
          alt="check circle"
          className={style.image}
        />
      </div>

      <h3 className={style.title}>Uploaded Successfully!</h3>
      <div className={style.drop_image_area}></div>
      <LinkImage />
    </div>
  );
}
