import React from "react";
import style from "./App.module.css";
import Uploader from "../Uploader/Uploader";
import Uploading from "../Uploading/Uploading";
import UploadedSuccess from "../UploadSuccess/UploadSuccess";

function App() {
  return (
    <>
      <div className={style.container}>
        <Uploader />
        {/* <Uploading /> */}
        {/* <UploadedSuccess /> */}
      </div>
      <footer className={style.footer}>
        <span className={style.footer_created}>created by</span>{" "}
        <span className={style.footer_user}>Jonathan Ruiz</span> -{" "}
        <span className={style.footer_page}>devChallenges.io</span>
      </footer>
    </>
  );
}

export default App;
