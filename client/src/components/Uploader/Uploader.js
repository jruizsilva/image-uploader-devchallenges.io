import React from "react";
import style from "./Uploader.module.css";

export default function Uploader() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Upload your image</h1>
      <h3 className={style.subtitle}>File should be Jpeg, Png...</h3>
      <div className={style.drop_image_area}>
        <div className={style.image_container}>
          <img src="./image.svg" className={style.image} />
        </div>
        <p className={style.drop_image_description}>
          Drag & Drop your image here
        </p>
      </div>
      <p className={style.or}>Or</p>
      <button className={style.button}>Choose a file</button>
    </div>
  );
}
