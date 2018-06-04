import React from "react";
import styles from "./styles.scss";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img src={require("images/phone.png")} alt="Checkour our app. Is cool" />
    </div>
    <div className={styles.column}>
      <div className={styles.whiteBox}>
        {(() => {
          switch (props.action) {
            case "login":
              return (
                <p>
                  계정이 없으신가요?{" "}
                  <span
                    onClick={props.changeAction}
                    className={styles.changeLink}
                  >
                    가입하기
                  </span>
                </p>
              );
            case "signup":
              return (
                <p>
                  계정이 있으신가요?{" "}
                  <span
                    onClick={props.changeAction}                  
                    className={styles.changeLink}
                  >
                    로그인
                  </span>
                </p>
              );
            default:
              return null;
          }
        })()}
      </div>
      <div className={styles.appBox}>
        <span>Get the app</span>
        <div className={styles.appstores}>
          <img
            src={require("images/ios.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/android.png")}
            alt="Download it on the Google Playstore"
          />
        </div>
      </div>
    </div>
  </main>
);

export default Auth;